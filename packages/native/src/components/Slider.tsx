import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

export interface SliderProps {
  value: number;
  min?: number;
  max?: number;
}

export function Slider({ value, min = 0, max = 100 }: SliderProps) {
  const ratio = (value - min) / (max - min);
  return (
    <View style={styles.track}>
      <View style={styles.fillArea}>
        <View style={[styles.fill, { width: `${Math.min(1, Math.max(0, ratio)) * 100}%` }]} />
      </View>
      <Text style={styles.val}>{Math.round(value)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  track: { minWidth: 200, gap: 8 },
  fillArea: { height: 8, borderRadius: 4, backgroundColor: theme.color.neutral["200"], overflow: "hidden" },
  fill: { height: "100%", backgroundColor: theme.color.primary.main },
  val: { fontSize: 12, color: theme.color.foreground.secondary },
});
