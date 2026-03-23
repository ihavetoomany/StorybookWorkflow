import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme";

export interface ToolbarProps {
  children?: React.ReactNode;
}

export function Toolbar({ children }: ToolbarProps) {
  return <View style={styles.bar}>{children}</View>;
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: theme.color.background.paper,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
  },
});
