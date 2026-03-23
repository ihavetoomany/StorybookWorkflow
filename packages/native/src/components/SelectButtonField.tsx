import React from "react";
import { View, StyleSheet } from "react-native";
import { Chip } from "./Chip";

export interface SelectButtonFieldProps {
  options: string[];
  valueIndex: number;
  onChange: (index: number) => void;
}

export function SelectButtonField({ options, valueIndex, onChange }: SelectButtonFieldProps) {
  return (
    <View style={styles.row}>
      {options.map((o, i) => (
        <Chip key={o} label={o} selected={i === valueIndex} onPress={() => onChange(i)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
});
