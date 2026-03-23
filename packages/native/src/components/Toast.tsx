import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

export interface ToastProps {
  message: string;
}

export function Toast({ message }: ToastProps) {
  return (
    <View style={styles.toast}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  toast: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: theme.color.secondary.dark,
    maxWidth: 360,
  },
  text: { color: theme.color.white["100"], fontSize: 14 },
});
