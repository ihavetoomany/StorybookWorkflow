import React from "react";
import { Pressable, StyleSheet } from "react-native";
import theme from "../theme";
import { MaterialIcons } from "@expo/vector-icons";

export interface IconButtonProps {
  name: keyof typeof MaterialIcons.glyphMap;
  onPress?: () => void;
  accessibilityLabel: string;
}

export function IconButton({ name, onPress, accessibilityLabel }: IconButtonProps) {
  return (
    <Pressable style={styles.hit} onPress={onPress} accessibilityRole="button" accessibilityLabel={accessibilityLabel}>
      <MaterialIcons name={name} size={24} color={theme.color.foreground.default} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  hit: { padding: 8, borderRadius: 999 },
});
