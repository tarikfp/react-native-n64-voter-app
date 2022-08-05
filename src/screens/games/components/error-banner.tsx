import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, COMMON_STYLES, FONTS } from "@/theme";

interface Props {
  text: string;
}

export default function ErrorBanner({ text }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMessageText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderTopWidth: 1,
    borderTopColor: COLORS.borderColor,
    backgroundColor: COLORS.paper,
    ...COMMON_STYLES.CARDS_SHADOW,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  errorMessageText: {
    ...FONTS.FONT_P1,
    color: COLORS.error,
  },
});
