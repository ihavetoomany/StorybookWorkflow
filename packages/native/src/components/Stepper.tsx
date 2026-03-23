import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

export interface StepperProps {
  steps: string[];
  activeIndex: number;
}

export function Stepper({ steps, activeIndex }: StepperProps) {
  return (
    <View style={styles.row}>
      {steps.map((s, i) => (
        <View key={s} style={styles.step}>
          <View style={[styles.bubble, i <= activeIndex && styles.bubbleOn]}>
            <Text style={[styles.num, i <= activeIndex && styles.numOn]}>{i + 1}</Text>
          </View>
          <Text style={styles.label}>{s}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
  step: { alignItems: "center", gap: 4, maxWidth: 80 },
  bubble: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: theme.color.border.muted,
    alignItems: "center",
    justifyContent: "center",
  },
  bubbleOn: { backgroundColor: theme.color.primary.main, borderColor: theme.color.primary.main },
  num: { fontSize: 14, fontWeight: "600", color: theme.color.foreground.secondary },
  numOn: { color: theme.color.primary.contrast },
  label: { fontSize: 11, color: theme.color.foreground.secondary, textAlign: "center" },
});
