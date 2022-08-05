import { Platform, TextStyle } from "react-native";

export default {
  FONT_H3: {
    ...Platform.select<TextStyle>({
      ios: {
        fontSize: 18,
        lineHeight: 24,
        fontWeight: "500",
      },
      android: {
        fontSize: 18,
        lineHeight: 24,
        fontWeight: "500",
      },
    }),
  },
  FONT_P1: {
    ...Platform.select<TextStyle>({
      ios: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "400",
      },
      android: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "400",
      },
    }),
  },
  FONT_P2: {
    ...Platform.select<TextStyle>({
      ios: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "400",
      },
      android: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "400",
      },
    }),
  },
};
