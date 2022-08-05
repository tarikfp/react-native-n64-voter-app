import { COLORS } from "@/theme";
import * as React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type Props = TouchableOpacityProps & {
  label: string;
};

export default function Button({
  label,
  style,
  ...touchableOpacityProps
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.touchableOpacity, style]}
      {...touchableOpacityProps}>
      <Text style={styles.labelText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchableOpacity: {
    backgroundColor: COLORS.primary,
    minWidth: 70,
    minHeight: 25,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  labelText: {
    fontSize: 15,
    color: COLORS.paper,
  },
});
