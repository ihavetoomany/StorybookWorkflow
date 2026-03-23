import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

export interface BadgeProps {
  label: string;
}

export function Badge({ label }: BadgeProps) {
  return (
    <View style={styles.pill} accessibilityLabel={label}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    backgroundColor: theme.color.primary.background,
    alignSelf: "flex-start",
  },
  text: { fontSize: 12, fontWeight: "600", color: theme.color.primary.main },
});
