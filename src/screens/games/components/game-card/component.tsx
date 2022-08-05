import * as React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS, COMMON_STYLES } from "@/theme";
import { default as GameCard } from "./components/game-card";
import { CARD_HEIGHT } from "./constants";
import { GameCardProps } from "./types";

function GameCardMenu(props: GameCardProps) {
  return (
    <View style={styles.cardContainer}>
      <GameCard {...props}>
        <GameCard.Title />

        <GameCard.Image />

        <GameCard.OtherInfo />

        <GameCard.LikeSection />

        <GameCard.Description />

        <GameCard.Action />
      </GameCard>
    </View>
  );
}

export default React.memo(GameCardMenu);

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderRadius: 8,
    shadowColor: COLORS.shadowColor,
    ...COMMON_STYLES.CARDS_SHADOW,
    padding: 16,
    minHeight: CARD_HEIGHT,
    backgroundColor: COLORS.paper,
  },
});
