import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FONTS } from "@/theme";
import { useGameCardContext } from "./context";

export default function GameCardTitle() {
  const { title } = useGameCardContext();

  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    ...FONTS.FONT_H3,
    textAlign: "left",
  },
});
