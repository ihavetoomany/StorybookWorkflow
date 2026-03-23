import React from "react";
import { View, StyleSheet, type ViewStyle } from "react-native";
import theme from "../theme";

export interface GraphicElementsProps {
  children?: React.ReactNode;
  style?: ViewStyle;
}

export function GraphicElements({ children, style }: GraphicElementsProps) {
  return <View style={[styles.root, { borderRadius: 0 }, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.color.background.paper,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    padding: 16,
  },
});
