import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme";

export interface TopNavBarProps {
  items: string[];
  activeIndex: number;
  onChange: (i: number) => void;
}

export function TopNavBar({ items, activeIndex, onChange }: TopNavBarProps) {
  return (
    <View style={styles.row}>
      {items.map((t, i) => (
        <Pressable key={t} onPress={() => onChange(i)}>
          <Text style={[styles.item, i === activeIndex && styles.active]}>{t}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 16, paddingVertical: 8, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: theme.color.border.muted },
  item: { fontSize: 16, color: theme.color.foreground.secondary },
  active: { color: theme.color.primary.main, fontWeight: "700" },
});
