import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import theme from "../theme";

export interface RadioProps {
  selected: boolean;
  onToggle: () => void;
}

export function Radio({ selected, onToggle }: RadioProps) {
  return (
    <Pressable style={styles.outer} onPress={onToggle} accessibilityRole="radio" accessibilityState={{ selected }}>
      {selected ? <View style={styles.inner} /> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  outer: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: theme.color.primary.main,
    alignItems: "center",
    justifyContent: "center",
  },
  inner: { width: 12, height: 12, borderRadius: 6, backgroundColor: theme.color.primary.main },
});
