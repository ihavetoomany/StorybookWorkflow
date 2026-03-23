import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

export interface LogoProps {
  /** Wordmark placeholder — swap for brand asset from Figma */
  label?: string;
}

export function Logo({ label = "Resurs" }: LogoProps) {
  return (
    <View style={styles.box} accessibilityLabel={label}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { paddingVertical: 8, paddingHorizontal: 4 },
  text: { fontSize: 20, fontWeight: "700", color: theme.color.primary.main },
});
