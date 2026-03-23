import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";
import { MaterialIcons } from "@expo/vector-icons";

export interface PaymentStatusViewProps {
  status: "pending" | "paid" | "failed";
  label: string;
}

export function PaymentStatusView({ status, label }: PaymentStatusViewProps) {
  const icon = status === "paid" ? "check-circle" : status === "failed" ? "error-outline" : "schedule";
  const color =
    status === "paid" ? theme.color.semantic.success.main : status === "failed" ? theme.color.semantic.error.main : theme.color.foreground.secondary;
  return (
    <View style={styles.row}>
      <MaterialIcons name={icon} size={24} color={color} />
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", gap: 8 },
  text: { fontSize: 16, color: theme.color.foreground.default },
});
