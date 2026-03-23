import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme";

export interface ProgressProps {
  /** 0–1 */
  value: number;
}

export function Progress({ value }: ProgressProps) {
  const v = Math.min(1, Math.max(0, value));
  return (
    <View style={styles.track}>
      <View style={[styles.fill, { width: `${v * 100}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.color.neutral["200"],
    overflow: "hidden",
    minWidth: 200,
  },
  fill: { height: "100%", backgroundColor: theme.color.primary.main },
});
