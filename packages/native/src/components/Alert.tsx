import React from "react";
import { View, Text, StyleSheet, type ViewStyle, type TextStyle } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "../theme";

export type AlertSeverity = "error" | "warning" | "info" | "success";

export interface AlertProps {
  /** Inline message (Resurs UI 2.0 Alert page — severity variants). */
  message: string;
  severity?: AlertSeverity;
  style?: ViewStyle;
  textStyle?: TextStyle;
  testID?: string;
}

const severityIcon: Record<AlertSeverity, keyof typeof MaterialIcons.glyphMap> = {
  error: "error-outline",
  warning: "warning",
  info: "info-outline",
  success: "check-circle-outline",
};

function severityColors(s: AlertSeverity) {
  const sem = theme.color.semantic[s];
  return {
    bg: sem.background,
    fg: theme.color.foreground.default,
    accent: sem.main,
  };
}

export function Alert({
  message,
  severity = "info",
  style,
  textStyle,
  testID,
}: AlertProps) {
  const c = severityColors(severity);
  return (
    <View
      testID={testID}
      accessibilityRole="alert"
      style={[styles.row, { backgroundColor: c.bg, borderLeftColor: c.accent }, style]}
    >
      <MaterialIcons name={severityIcon[severity]} size={22} color={c.accent} />
      <Text style={[styles.text, { color: c.fg }, textStyle]}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    minHeight: 56,
    maxWidth: 320,
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: theme.color.semantic.info.main,
  },
  text: {
    flex: 1,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
  },
});
