import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import theme from "../theme";

export interface TextFieldProps {
  label?: string;
  value: string;
  onChangeText: (t: string) => void;
  placeholder?: string;
  error?: string;
}

export function TextField({ label, value, onChangeText, placeholder, error }: TextFieldProps) {
  return (
    <View style={styles.wrap}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        style={[styles.input, error ? styles.inputErr : null]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.color.foreground.muted}
      />
      {error ? <Text style={styles.err}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 4, minWidth: 280 },
  label: { fontSize: 12, fontWeight: "600", color: theme.color.foreground.secondary },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: theme.color.foreground.default,
    backgroundColor: theme.color.background.paper,
  },
  inputErr: { borderColor: theme.color.semantic.error.main },
  err: { fontSize: 12, color: theme.color.semantic.error.main },
});
