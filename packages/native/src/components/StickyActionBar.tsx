import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme";
import { Button } from "./Button";

export interface StickyActionBarProps {
  primaryTitle: string;
  onPrimaryPress?: () => void;
  secondaryTitle?: string;
  onSecondaryPress?: () => void;
}

export function StickyActionBar({ primaryTitle, onPrimaryPress, secondaryTitle, onSecondaryPress }: StickyActionBarProps) {
  return (
    <View style={styles.bar}>
      {secondaryTitle ? <Button title={secondaryTitle} variant="outline" onPress={onSecondaryPress} /> : null}
      <Button title={primaryTitle} onPress={onPrimaryPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12,
    padding: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    backgroundColor: theme.color.background.paper,
  },
});
