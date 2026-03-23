import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import theme from "../theme";
import { MaterialIcons } from "@expo/vector-icons";

export interface RatingProps {
  value: number;
  max?: number;
  onChange?: (v: number) => void;
}

export function Rating({ value, max = 5, onChange }: RatingProps) {
  return (
    <View style={styles.row}>
      {Array.from({ length: max }, (_, i) => (
        <Pressable key={i} onPress={() => onChange?.(i + 1)}>
          <MaterialIcons name={i < value ? "star" : "star-border"} size={28} color={theme.color.amber["500"]} />
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 4 },
});
