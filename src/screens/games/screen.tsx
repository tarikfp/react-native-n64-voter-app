import * as React from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Linking,
  ListRenderItemInfo,
  RefreshControl,
  StyleSheet,
  View,
} from "react-native";
import { showMessage } from "react-native-flash-message";
import { AppSafeAreaView } from "@/components/safe-area";
import useUpdateGame from "@/api/games/mutations/useUpdateGame";
import useGetAllGames from "@/api/games/queries/useGetAllGames";
import { Game } from "@/api/games/types";
import { GameCard } from "@/screens/games/components/game-card";
import {
  getDataId,
  getItemLayout,
  useIsInternetConnected,
  useRefreshByUser,
} from "@/utils";
import { COMMON_STYLES } from "@/theme";
import ImageModal from "./components/image-modal";
import { CARD_HEIGHT } from "./components/game-card/constants";
import ErrorService from "../../api/error/error-service";
import ErrorBanner from "./components/error-banner";

function GamesScreen() {
  // game image to show on modal on pressing game entry image
  const [modalImageUrl, setModalImageUrl] = React.useState<string | null>(null);
  // animating "likes" text and emoji together
  const [gameAnimationId, setGameAnimationId] = React.useState<number | null>(
    null,
  );
  // collapsing game description section
  const [collapsedGameId, setCollapsedGameId] = React.useState<number | null>(
    null,
  );

  const isInternetConnected = useIsInternetConnected();

  const {
    data: gamesData,
    isLoading,
    refetch,
    error: getAllGamesError,
  } = useGetAllGames();

  const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch);

  const { mutateAsync } = useUpdateGame();

  let isGameNonInternetError = false;

  if (getAllGamesError) {
    isGameNonInternetError = !ErrorService.isNetworkError(getAllGamesError);
  }

  // do not hide the all screen if its the network error
  // instead error banner will be displayed
  const shouldRenderGameListData = !isGameNonInternetError && gamesData;

  const handleLikeGameEntry = React.useCallback(
    async (game: Pick<Game, "id" | "likeCount" | "title">) => {
      if (!isInternetConnected) {
        return Alert.alert(
          "Warning",
          "There is no internet connection, ensure you have the internet connection in order to vote for a game entry.",
          [{ text: "Ok" }],
        );
      }

      await mutateAsync({
        id: game.id,
        body: { likeCount: game.likeCount + 1 },
      });

      setGameAnimationId(game.id);

      showMessage({
        message: `${game.title} game has been successfully liked!`,
        animated: true,
        duration: 3000,
        type: "success",
        icon: "success",
      });
    },
    [isInternetConnected, mutateAsync],
  );

  const handleOnWikipediaPress = React.useCallback(
    async (url: string) => Linking.openURL(url),
    [],
  );

  const toggleCollapse = React.useCallback(
    (itemId: number) => () => {
      if (collapsedGameId === itemId) {
        setCollapsedGameId(null);
      } else {
        setCollapsedGameId(itemId);
      }
    },
    [collapsedGameId],
  );

  const renderGameDataItem = React.useCallback(
    (listInfo: ListRenderItemInfo<Game>) => (
      <GameCard
        {...listInfo.item}
        shouldAnimate={gameAnimationId === listInfo.item.id}
        onAnimationEnd={() => setGameAnimationId(null)}
        toggleCollapse={toggleCollapse(listInfo.item.id)}
        isCollapsed={collapsedGameId === listInfo.item.id}
        onImagePress={setModalImageUrl}
        onWikipediaPress={handleOnWikipediaPress}
        onLikePress={handleLikeGameEntry}
      />
    ),
    [
      collapsedGameId,
      gameAnimationId,
      handleLikeGameEntry,
      handleOnWikipediaPress,
      toggleCollapse,
    ],
  );

  const ItemSeparatorComponent = React.useCallback(
    () => <View style={styles.listSeparatorStyle} />,
    [],
  );

  return (
    <AppSafeAreaView style={COMMON_STYLES.FLEX} edges={["bottom"]}>
      <View style={COMMON_STYLES.FLEX}>
        {isLoading && (
          <View style={COMMON_STYLES.CENTER_CONTAINER}>
            <ActivityIndicator size={35} />
          </View>
        )}

        {(isGameNonInternetError || !isInternetConnected) && (
          <ErrorBanner
            text={
              isGameNonInternetError
                ? "An error occurred while fetching games"
                : "There is no internet connection"
            }
          />
        )}

        {shouldRenderGameListData && (
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={isRefetchingByUser}
                onRefresh={refetchByUser}
              />
            }
            style={styles.flatListStyle}
            data={gamesData}
            getItemLayout={getItemLayout(CARD_HEIGHT)}
            keyExtractor={getDataId}
            ItemSeparatorComponent={ItemSeparatorComponent}
            renderItem={renderGameDataItem}
            contentContainerStyle={styles.flatListContentContainerStyle}
          />
        )}
      </View>

      <ImageModal
        setModalImageUrl={setModalImageUrl}
        imageUrl={modalImageUrl}
      />
    </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({
  flatListContentContainerStyle: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 24,
    alignItems: "center",
  },
  flatListStyle: {
    flex: 1,
  },
  listSeparatorStyle: {
    height: 8,
  },
});

export default GamesScreen;
