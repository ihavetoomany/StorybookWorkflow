import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";
import { IconButton } from "./IconButton";

export interface TopAppBarProps {
  title: string;
  onBack?: () => void;
}

export function TopAppBar({ title, onBack }: TopAppBarProps) {
  return (
    <View style={styles.bar}>
      {onBack ? <IconButton name="arrow-back" onPress={onBack} accessibilityLabel="Back" /> : <View style={{ width: 40 }} />}
      <Text style={styles.title}>{title}</Text>
      <View style={{ width: 40 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: theme.color.background.paper,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    minWidth: 320,
  },
  title: { fontSize: 18, fontWeight: "700", color: theme.color.foreground.default, flex: 1, textAlign: "center" },
});
