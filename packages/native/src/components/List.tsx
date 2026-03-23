import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme";

export interface ListProps {
  children?: React.ReactNode;
}

export function List({ children }: ListProps) {
  return <View style={styles.col}>{children}</View>;
}

const styles = StyleSheet.create({
  col: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    borderRadius: 8,
    overflow: "hidden",
    minWidth: 280,
  },
});
