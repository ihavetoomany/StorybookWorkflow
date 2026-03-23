import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "./Button";

export interface ButtonGroupProps {
  labels: string[];
  onPressIndex?: (index: number) => void;
}

export function ButtonGroup({ labels, onPressIndex }: ButtonGroupProps) {
  return (
    <View style={styles.row}>
      {labels.map((title, i) => (
        <Button key={title} title={title} variant={i === 0 ? "outline" : "default"} onPress={() => onPressIndex?.(i)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
});
