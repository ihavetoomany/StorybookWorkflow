import React from "react";
import { Pressable, StyleSheet } from "react-native";
import theme from "../theme";

export interface BackdropProps {
  visible: boolean;
  onPress?: () => void;
}

export function Backdrop({ visible, onPress }: BackdropProps) {
  if (!visible) return null;
  return <Pressable style={styles.root} onPress={onPress} accessibilityLabel="Backdrop" />;
}

const styles = StyleSheet.create({
  root: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.color.black["50"],
  },
});
