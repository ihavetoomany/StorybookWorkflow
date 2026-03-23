import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme";

export interface MenuProps {
  items: string[];
  onSelect?: (index: number) => void;
}

export function Menu({ items, onSelect }: MenuProps) {
  return (
    <View style={styles.menu}>
      {items.map((label, i) => (
        <Pressable key={label} style={styles.item} onPress={() => onSelect?.(i)}>
          <Text style={styles.label}>{label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: theme.color.background.paper,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    minWidth: 200,
    overflow: "hidden",
  },
  item: { paddingVertical: 12, paddingHorizontal: 16 },
  label: { fontSize: 16, color: theme.color.foreground.default },
});
