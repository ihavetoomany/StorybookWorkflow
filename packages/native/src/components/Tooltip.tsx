import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

export interface TooltipProps {
  text: string;
}

export function Tooltip({ text }: TooltipProps) {
  return (
    <View style={styles.bubble} accessibilityLabel={text}>
      <Text style={styles.t}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: theme.color.secondary.dark,
    maxWidth: 240,
  },
  t: { fontSize: 12, color: theme.color.white["100"] },
});
