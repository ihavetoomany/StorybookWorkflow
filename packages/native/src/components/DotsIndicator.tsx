import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme";

export interface DotsIndicatorProps {
  count: number;
  activeIndex: number;
}

export function DotsIndicator({ count, activeIndex }: DotsIndicatorProps) {
  return (
    <View style={styles.row}>
      {Array.from({ length: count }, (_, i) => (
        <View key={i} style={[styles.dot, i === activeIndex && styles.dotActive]} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 6, alignItems: "center" },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: theme.color.neutral["300"] },
  dotActive: { backgroundColor: theme.color.primary.main, width: 10, height: 10, borderRadius: 5 },
});
