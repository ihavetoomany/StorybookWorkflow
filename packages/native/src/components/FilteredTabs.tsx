import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme";

export interface FilteredTabsProps {
  tabs: string[];
  activeIndex: number;
  onChange: (index: number) => void;
}

export function FilteredTabs({ tabs, activeIndex, onChange }: FilteredTabsProps) {
  return (
    <View style={styles.row}>
      {tabs.map((t, i) => (
        <Pressable key={t} style={[styles.tab, i === activeIndex && styles.tabOn]} onPress={() => onChange(i)}>
          <Text style={[styles.label, i === activeIndex && styles.labelOn]}>{t}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  tab: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
  },
  tabOn: { backgroundColor: theme.color.primary.background, borderColor: theme.color.primary.main },
  label: { fontSize: 14, color: theme.color.foreground.secondary },
  labelOn: { fontWeight: "600", color: theme.color.primary.main },
});
