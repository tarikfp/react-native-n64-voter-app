import { useGameCardContext } from "@/screens/games/components/game-card/components/context";
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS } from "@/theme";
import { GameCardHelpers } from "../helpers";

export default function GameCardOtherInfo() {
  const { developer, wikipedia, onWikipediaPress, genre } =
    useGameCardContext();

  return (
    <>
      <View style={styles.row}>
        <Text
          onPress={() => onWikipediaPress?.(wikipedia)}
          style={[
            styles.value,
            {
              textDecorationLine: "underline",
            },
          ]}>
          Wikipedia
        </Text>
      </View>

      <RowItem label="Developer: " value={developer} />

      <RowItem label="Genre: " value={GameCardHelpers.getGenreString(genre)} />
    </>
  );
}

function RowItem({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  label: {
    ...FONTS.FONT_P2,
  },
  spacing: {
    height: 12,
  },
  value: {
    ...FONTS.FONT_P2,
    fontWeight: "bold",
    color: COLORS.primary,
  },
});
