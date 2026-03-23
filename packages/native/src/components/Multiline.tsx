import React from "react";
import { TextInput, StyleSheet } from "react-native";
import theme from "../theme";

export interface MultilineProps {
  value: string;
  onChangeText: (t: string) => void;
  placeholder?: string;
  lines?: number;
}

export function Multiline({ value, onChangeText, placeholder, lines = 4 }: MultilineProps) {
  return (
    <TextInput
      style={[styles.input, { minHeight: lines * 22 }]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={theme.color.foreground.muted}
      multiline
      textAlignVertical="top"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: theme.color.foreground.default,
    minWidth: 280,
    backgroundColor: theme.color.background.paper,
  },
});
