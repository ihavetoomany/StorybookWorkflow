import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme";

export interface SkeletonProps {
  width?: number | string;
  height?: number;
}

export function Skeleton({ width = "100%", height = 16 }: SkeletonProps) {
  return <View style={[styles.box, { width, height } as object]} accessibilityLabel="Loading" />;
}

const styles = StyleSheet.create({
  box: { borderRadius: 4, backgroundColor: theme.color.neutral["200"] },
});
