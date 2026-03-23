import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme";

export interface DateTimeProps {
  /** ISO or display string */
  value: string;
}

export function DateTime({ value }: DateTimeProps) {
  return <Text style={styles.t}>{value}</Text>;
}

const styles = StyleSheet.create({
  t: { fontSize: 16, color: theme.color.foreground.default },
});
