import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme";

export interface ToggleButtonProps {
  label: string;
  selected: boolean;
  onToggle: () => void;
}

export function ToggleButton({ label, selected, onToggle }: ToggleButtonProps) {
  return (
    <Pressable style={[styles.btn, selected && styles.on]} onPress={onToggle} accessibilityRole="button" accessibilityState={{ selected }}>
      <Text style={[styles.txt, selected && styles.txtOn]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
  },
  on: { backgroundColor: theme.color.primary.background, borderColor: theme.color.primary.main },
  txt: { fontSize: 14, color: theme.color.foreground.default },
  txtOn: { fontWeight: "600", color: theme.color.primary.main },
});
