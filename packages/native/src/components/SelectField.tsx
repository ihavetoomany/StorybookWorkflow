import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme";
import { MaterialIcons } from "@expo/vector-icons";

export interface SelectFieldProps {
  label: string;
  value: string;
  onPress?: () => void;
}

export function SelectField({ label, value, onPress }: SelectFieldProps) {
  return (
    <Pressable style={styles.field} onPress={onPress} accessibilityRole="button">
      <View>
        <Text style={styles.lab}>{label}</Text>
        <Text style={styles.val}>{value}</Text>
      </View>
      <MaterialIcons name="arrow-drop-down" size={24} color={theme.color.foreground.secondary} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  field: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: 280,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    backgroundColor: theme.color.background.paper,
  },
  lab: { fontSize: 12, color: theme.color.foreground.secondary },
  val: { fontSize: 16, color: theme.color.foreground.default, marginTop: 2 },
});
