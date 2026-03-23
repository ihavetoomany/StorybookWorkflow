import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme";

export interface SidebarProps {
  children?: React.ReactNode;
}

export function Sidebar({ children }: SidebarProps) {
  return <View style={styles.side}>{children}</View>;
}

const styles = StyleSheet.create({
  side: {
    minWidth: 240,
    maxWidth: 320,
    flex: 1,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    padding: 16,
    backgroundColor: theme.color.background.paper,
  },
});
