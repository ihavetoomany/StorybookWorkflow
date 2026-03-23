import React from "react";
import { Pressable, StyleSheet } from "react-native";
import theme from "../theme";
import { MaterialIcons } from "@expo/vector-icons";

export interface FloatingActionButtonProps {
  icon?: keyof typeof MaterialIcons.glyphMap;
  onPress?: () => void;
}

export function FloatingActionButton({ icon = "add", onPress }: FloatingActionButtonProps) {
  return (
    <Pressable style={styles.fab} onPress={onPress} accessibilityRole="button">
      <MaterialIcons name={icon} size={28} color={theme.color.primary.contrast} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: theme.color.primary.main,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
