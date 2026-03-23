import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

export interface AvatarProps {
  label: string;
  size?: number;
}

export function Avatar({ label, size = 40 }: AvatarProps) {
  const initials = label
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <View style={[styles.circle, { width: size, height: size, borderRadius: size / 2 }]} accessibilityLabel={label}>
      <Text style={[styles.text, { fontSize: size * 0.35 }]}>{initials}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    backgroundColor: theme.color.primary.background,
    alignItems: "center",
    justifyContent: "center",
  },
  text: { fontWeight: "600", color: theme.color.primary.main },
});
