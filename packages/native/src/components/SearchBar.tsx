import React from "react";
import { TextInput, StyleSheet } from "react-native";
import theme from "../theme";

export interface SearchBarProps {
  value: string;
  onChangeText: (t: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChangeText, placeholder }: SearchBarProps) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={theme.color.foreground.muted}
      accessibilityLabel={placeholder}
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
