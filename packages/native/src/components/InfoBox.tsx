import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

export interface InfoBoxProps {
  message: string;
}

export function InfoBox({ message }: InfoBoxProps) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: theme.color.semantic.info.background,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.semantic.info.main,
    maxWidth: 360,
  },
  text: { fontSize: 14, color: theme.color.foreground.default, lineHeight: 20 },
});
