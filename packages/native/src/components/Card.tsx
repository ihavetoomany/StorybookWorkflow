import React from "react";
import { View, StyleSheet, type ViewStyle } from "react-native";
import theme from "../theme";

export interface CardProps {
  children?: React.ReactNode;
  style?: ViewStyle;
}

export function Card({ children, style }: CardProps) {
  return <View style={[styles.root, { borderRadius: 12 }, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.color.background.paper,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    padding: 16,
  },
});
