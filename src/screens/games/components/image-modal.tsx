import { COLORS } from "@/theme";
import { getWindowWidth } from "@tarikfp/react-native-utils";
import * as React from "react";
import { View, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import Modal from "react-native-modal";

interface Props {
  setModalImageUrl: (visible: string | null) => void;
  imageUrl: string | null;
}

export default function ImageModal({ setModalImageUrl, imageUrl }: Props) {
  return (
    <Modal
      hasBackdrop
      animationInTiming={500}
      animationIn="fadeInUp"
      animationOut="fadeOutDown"
      onBackdropPress={() => setModalImageUrl(null)}
      animationOutTiming={600}
      onBackButtonPress={() => setModalImageUrl(null)}
      onDismiss={() => setModalImageUrl(null)}
      style={styles.modal}
      backdropOpacity={0.45}
      isVisible={imageUrl !== null}>
      <View style={styles.imgContainer}>
        <FastImage
          resizeMode={FastImage.resizeMode.contain}
          source={{ uri: imageUrl as string }}
          style={styles.img}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    padding: 16,
    width: getWindowWidth(90),
    backgroundColor: COLORS.paper,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  modal: {
    alignSelf: "center",
  },
});
