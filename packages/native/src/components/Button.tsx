import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  type ViewStyle,
  type TextStyle,
} from "react-native";
import theme from "../theme";

type ButtonVariant = "default" | "outline" | "secondary";

export interface ButtonProps {
  title: string;
  variant?: ButtonVariant;
  onPress?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const variantStyles: Record<ButtonVariant, { container: ViewStyle; text: TextStyle }> = {
  default: {
    container: { backgroundColor: theme.color?.primary?.[500] ?? "#0ea5e9" },
    text: { color: "#fff" },
  },
  outline: {
    container: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: theme.color?.neutral?.[300] ?? "#d4d4d8",
    },
    text: { color: theme.color?.foreground?.default ?? "#18181b" },
  },
  secondary: {
    container: { backgroundColor: theme.color?.neutral?.[100] ?? "#f4f4f5" },
    text: { color: theme.color?.foreground?.default ?? "#18181b" },
  },
};

export function Button({
  title,
  variant = "default",
  onPress,
  disabled,
  style,
  textStyle,
}: ButtonProps) {
  const v = variantStyles[variant];
  return (
    <TouchableOpacity
      style={[styles.base, v.container, style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, v.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
  },
});
