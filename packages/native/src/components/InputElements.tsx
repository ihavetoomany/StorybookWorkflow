import React from "react";
import { View, StyleSheet } from "react-native";

export interface InputElementsProps {
  children?: React.ReactNode;
}

export function InputElements({ children }: InputElementsProps) {
  return <View style={styles.col}>{children}</View>;
}

const styles = StyleSheet.create({
  col: { gap: 12, minWidth: 280 },
});
