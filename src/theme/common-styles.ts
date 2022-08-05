import { Platform, StyleSheet, ViewStyle } from "react-native";

export default StyleSheet.create({
  CENTER_CONTAINER: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  FLEX: {
    flex: 1,
  },
  CARDS_SHADOW: {
    ...Platform.select<ViewStyle>({
      android: {
        shadowColor: "#A09AA5",
        elevation: 2,
      },
      ios: {
        shadowColor: "rgba(45, 97, 185, 0.04)",
        shadowOffset: {
          width: 3,
          height: 4,
        },
        shadowOpacity: 1.25,
        shadowRadius: 1,
      },
    }),
  },
});
