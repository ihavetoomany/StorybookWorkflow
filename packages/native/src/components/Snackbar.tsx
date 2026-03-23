import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

export interface SnackbarProps {
  message: string;
}

export function Snackbar({ message }: SnackbarProps) {
  return (
    <View style={styles.bar} accessibilityRole="alert">
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: theme.color.secondary.dark,
    maxWidth: 400,
  },
  text: { color: theme.color.white["100"], fontSize: 14 },
});
