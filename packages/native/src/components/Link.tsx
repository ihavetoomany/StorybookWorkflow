import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme";

export interface LinkProps {
  children: string;
  onPress?: () => void;
}

export function Link({ children, onPress }: LinkProps) {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.link}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  link: {
    fontSize: 16,
    color: theme.color.primary.main,
    textDecorationLine: "underline",
  },
});
