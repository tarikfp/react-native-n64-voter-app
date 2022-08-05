import { useGameCardContext } from "@/screens/games/components/game-card/components/context";
import * as React from "react";
import { StyleSheet, Pressable } from "react-native";
import FastImage from "react-native-fast-image";

export default function GameCardImage() {
  const { onImagePress, imageUrl } = useGameCardContext();

  return (
    <Pressable
      style={styles.imageWrapper}
      onPress={() => onImagePress?.(imageUrl)}>
      <FastImage
        style={styles.image}
        resizeMode={FastImage.resizeMode.contain}
        source={{ uri: imageUrl }}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    minWidth: 150,
    minHeight: 100,
    marginVertical: 4,
  },
  imageWrapper: {
    marginVertical: 12,
  },
});
