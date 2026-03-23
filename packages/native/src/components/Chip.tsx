import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme";

export interface ChipProps {
  label: string;
  selected?: boolean;
  onPress?: () => void;
}

export function Chip({ label, selected, onPress }: ChipProps) {
  return (
    <Pressable
      style={[styles.chip, selected && styles.chipOn]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected }}
    >
      <Text style={[styles.text, selected && styles.textOn]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    backgroundColor: theme.color.background.paper,
  },
  chipOn: { backgroundColor: theme.color.primary.background, borderColor: theme.color.primary.main },
  text: { fontSize: 14, color: theme.color.foreground.default },
  textOn: { fontWeight: "600", color: theme.color.primary.main },
});
