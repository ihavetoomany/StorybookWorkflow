import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme";

export interface CardListProps {
  children?: React.ReactNode;
}

export function CardList({ children }: CardListProps) {
  return <View style={styles.col}>{children}</View>;
}

const styles = StyleSheet.create({
  col: { gap: 12, minWidth: 280 },
});
