import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme";

export interface PaginationProps {
  page: number;
  pageCount: number;
  onChange: (p: number) => void;
}

export function Pagination({ page, pageCount, onChange }: PaginationProps) {
  return (
    <View style={styles.row}>
      <Pressable onPress={() => onChange(Math.max(1, page - 1))} disabled={page <= 1}>
        <Text style={[styles.nav, page <= 1 && styles.dis]}>Prev</Text>
      </Pressable>
      <Text style={styles.meta}>
        {page} / {pageCount}
      </Text>
      <Pressable onPress={() => onChange(Math.min(pageCount, page + 1))} disabled={page >= pageCount}>
        <Text style={[styles.nav, page >= pageCount && styles.dis]}>Next</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", gap: 16 },
  nav: { fontSize: 16, color: theme.color.primary.main, fontWeight: "600" },
  dis: { color: theme.color.foreground.disabled },
  meta: { fontSize: 16, color: theme.color.foreground.default },
});
