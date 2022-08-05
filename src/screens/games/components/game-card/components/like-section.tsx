import { useGameCardContext } from "@/screens/games/components/game-card/components/context";
import { COLORS, FONTS } from "@/theme";
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

export default function GameCardLikeSection() {
  const { likeCount, onAnimationEnd, shouldAnimate } = useGameCardContext();

  return (
    <View style={styles.row}>
      <Text style={styles.likeLabel}>Likes: </Text>
      <Animatable.Text
        duration={800}
        useNativeDriver
        onAnimationEnd={onAnimationEnd}
        animation={shouldAnimate ? "bounceIn" : undefined}
        style={styles.likeValue}>
        ♥️ {likeCount}
      </Animatable.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 16,
  },
  likeLabel: {
    ...FONTS.FONT_P2,
  },
  likeValue: {
    ...FONTS.FONT_P2,
    fontWeight: "bold",
    color: COLORS.primary,
  },
});
