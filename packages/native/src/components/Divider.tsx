import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme";

export interface DividerProps {
  vertical?: boolean;
}

export function Divider({ vertical }: DividerProps) {
  return <View style={vertical ? styles.v : styles.h} accessibilityRole="none" />;
}

const styles = StyleSheet.create({
  h: { height: StyleSheet.hairlineWidth, backgroundColor: theme.color.border.muted, alignSelf: "stretch" },
  v: { width: StyleSheet.hairlineWidth, backgroundColor: theme.color.border.muted, alignSelf: "stretch" },
});
