import { COMMON_STYLES } from "@/theme";
import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";
import Button from "./component";

storiesOf("Buttons", module)
  .addDecorator(withKnobs)
  .addDecorator((getStory) => (
    <View style={COMMON_STYLES.CENTER_CONTAINER}>{getStory()}</View>
  ))
  .add("App Button", () => (
    <Button label={text("title", "Use KNOBS to change me!")} />
  ));
