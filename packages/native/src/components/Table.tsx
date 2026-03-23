import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

export interface TableProps {
  headers: string[];
  rows: string[][];
}

export function Table({ headers, rows }: TableProps) {
  return (
    <View style={styles.table}>
      <View style={[styles.row, styles.head]}>
        {headers.map((h) => (
          <Text key={h} style={[styles.cell, styles.headText]}>
            {h}
          </Text>
        ))}
      </View>
      {rows.map((r, ri) => (
        <View key={ri} style={styles.row}>
          {r.map((c, ci) => (
            <Text key={ci} style={styles.cell}>
              {c}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  table: { borderWidth: StyleSheet.hairlineWidth, borderColor: theme.color.border.muted, borderRadius: 8, overflow: "hidden" },
  row: { flexDirection: "row", borderBottomWidth: StyleSheet.hairlineWidth, borderColor: theme.color.border.muted },
  head: { backgroundColor: theme.color.neutral["100"] },
  cell: { flex: 1, padding: 8, fontSize: 14, color: theme.color.foreground.default },
  headText: { fontWeight: "700" },
});
