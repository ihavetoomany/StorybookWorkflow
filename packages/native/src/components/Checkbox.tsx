import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import theme from "../theme";
import { MaterialIcons } from "@expo/vector-icons";

export interface CheckboxProps {
  checked: boolean;
  onToggle: (v: boolean) => void;
}

export function Checkbox({ checked, onToggle }: CheckboxProps) {
  return (
    <Pressable
      style={[styles.box, checked && styles.boxOn]}
      onPress={() => onToggle(!checked)}
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
    >
      {checked ? <MaterialIcons name="check" size={18} color={theme.color.primary.contrast} /> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 22,
    height: 22,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: theme.color.border.default,
    alignItems: "center",
    justifyContent: "center",
  },
  boxOn: { backgroundColor: theme.color.primary.main, borderColor: theme.color.primary.main },
});
