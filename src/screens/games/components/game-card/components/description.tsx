import { GameCardHelpers } from "@/screens/games/components/game-card/helpers";
import { COLORS, FONTS } from "@/theme";
import * as React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import Collapsible from "react-native-collapsible";
import * as Animatable from "react-native-animatable";
import { useGameCardContext } from "./context";

export default function GameCardDescription() {
  const { description, isCollapsed, toggleCollapse } = useGameCardContext();

  const isNotCollapsed = !isCollapsed;

  return (
    <View style={styles.wrapper}>
      {isNotCollapsed && (
        <Text style={styles.subtitle}>
          {GameCardHelpers.getShortenedDescriptionText(description)}
        </Text>
      )}

      <TouchableOpacity onPress={toggleCollapse}>
        <Text style={[styles.readMore, { marginBottom: isCollapsed ? 12 : 0 }]}>
          {isNotCollapsed ? "Read more..." : "Collapse details"}
        </Text>
      </TouchableOpacity>

      {/**
       * collapsible is not stable it should be, it recalculates dynamic content height, and flickers randomly...
       * since the project has a deadline, will skip this small bug for now.
       * related issues listed below:
       * https://github.com/oblador/react-native-collapsible/issues/113#issuecomment-803461946
       * https://github.com/oblador/react-native-collapsible/issues/420
       * https://github.com/oblador/react-native-collapsible/issues/91
       * https://github.com/oblador/react-native-collapsible/issues/91#issuecomment-851208734
       */}
      <Collapsible key={description} duration={500} collapsed={isNotCollapsed}>
        <Animatable.Text
          style={styles.collapsedSubtitle}
          animation={isNotCollapsed ? undefined : "slideInDown"}
          duration={500}
          useNativeDriver>
          {description}
        </Animatable.Text>
      </Collapsible>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 16,
  },
  title: {
    ...FONTS.FONT_P1,
    textAlign: "left",
  },
  subtitle: {
    ...FONTS.FONT_P2,
    textAlign: "left",
  },
  readMore: {
    ...FONTS.FONT_P2,
    fontWeight: "bold",
    color: COLORS.primary,
    textAlign: "left",
  },
  collapsedSubtitle: {
    ...FONTS.FONT_P2,
    color: COLORS.primary,
    textAlign: "left",
  },
});
