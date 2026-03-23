import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme";

export interface PaymentOptionSelectFieldProps {
  options: string[];
  valueIndex: number;
  onChange: (index: number) => void;
}

export function PaymentOptionSelectField({ options, valueIndex, onChange }: PaymentOptionSelectFieldProps) {
  return (
    <View style={styles.col}>
      {options.map((opt, i) => (
        <Pressable key={opt} style={[styles.row, i === valueIndex && styles.on]} onPress={() => onChange(i)}>
          <Text style={styles.t}>{opt}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  col: { gap: 8, minWidth: 280 },
  row: {
    padding: 12,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
  },
  on: { borderColor: theme.color.primary.main, backgroundColor: theme.color.primary.background },
  t: { fontSize: 16, color: theme.color.foreground.default },
});
