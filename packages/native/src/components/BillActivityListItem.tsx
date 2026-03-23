import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

export interface BillActivityListItemProps {
  title: string;
  subtitle?: string;
  amount: string;
}

export function BillActivityListItem({ title, subtitle, amount }: BillActivityListItemProps) {
  return (
    <View style={styles.row}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.sub}>{subtitle}</Text> : null}
      </View>
      <Text style={styles.amount}>{amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    minWidth: 280,
  },
  title: { fontSize: 16, fontWeight: "500", color: theme.color.foreground.default },
  sub: { fontSize: 14, color: theme.color.foreground.secondary, marginTop: 2 },
  amount: { fontSize: 16, fontWeight: "600", color: theme.color.foreground.default },
});
