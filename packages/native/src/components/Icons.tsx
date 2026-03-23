import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "../theme";

export interface IconsProps {
  names: (keyof typeof MaterialIcons.glyphMap)[];
}

export function Icons({ names }: IconsProps) {
  return (
    <View style={styles.grid}>
      {names.map((n) => (
        <MaterialIcons key={n} name={n} size={28} color={theme.color.foreground.default} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 16 },
});
