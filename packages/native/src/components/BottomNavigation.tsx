import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import theme from "../theme";
import { MaterialIcons } from "@expo/vector-icons";

export interface BottomNavigationItem {
  key: string;
  label: string;
  icon: keyof typeof MaterialIcons.glyphMap;
}

export interface BottomNavigationProps {
  items: BottomNavigationItem[];
  activeKey: string;
  onSelect: (key: string) => void;
}

export function BottomNavigation({ items, activeKey, onSelect }: BottomNavigationProps) {
  return (
    <View style={styles.row} accessibilityRole="tablist">
      {items.map((it) => {
        const active = it.key === activeKey;
        return (
          <Pressable key={it.key} style={styles.item} onPress={() => onSelect(it.key)} accessibilityRole="tab" accessibilityState={{ selected: active }}>
            <MaterialIcons name={it.icon} size={24} color={active ? theme.color.primary.main : theme.color.foreground.muted} />
            <Text style={[styles.label, active && styles.labelActive]}>{it.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: theme.color.background.paper,
    justifyContent: "space-around",
    minWidth: 320,
  },
  item: { alignItems: "center", gap: 4 },
  label: { fontSize: 12, color: theme.color.foreground.muted },
  labelActive: { color: theme.color.primary.main, fontWeight: "600" },
});
