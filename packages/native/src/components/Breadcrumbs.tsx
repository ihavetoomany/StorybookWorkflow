import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme";
import { MaterialIcons } from "@expo/vector-icons";

export interface BreadcrumbsProps {
  items: string[];
  onPressItem?: (index: number) => void;
}

export function Breadcrumbs({ items, onPressItem }: BreadcrumbsProps) {
  return (
    <View style={styles.row} accessibilityRole="text">
      {items.map((label, i) => (
        <React.Fragment key={`${i}-${label}`}>
          {i > 0 ? <MaterialIcons name="chevron-right" size={18} color={theme.color.foreground.muted} /> : null}
          <Pressable onPress={() => onPressItem?.(i)} disabled={!onPressItem}>
            <Text style={[styles.crumb, i === items.length - 1 && styles.current]}>{label}</Text>
          </Pressable>
        </React.Fragment>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 4 },
  crumb: { fontSize: 14, color: theme.color.foreground.secondary },
  current: { color: theme.color.foreground.default, fontWeight: "600" },
});
