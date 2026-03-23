import React from "react";
import { Text, type TextProps } from "react-native";
import theme from "../theme";

export type TextVariant = keyof typeof theme.typeStyles;

export interface ResursTextProps extends TextProps {
  variant?: TextVariant;
  children: React.ReactNode;
}

export function ResursText({ variant = "bodyMedium", style, children, ...rest }: ResursTextProps) {
  const t = theme.typeStyles[variant];
  return (
    <Text
      style={[
        {
          fontSize: parseFloat(String(t.fontSize).replace("rem", "")) * 16,
          fontWeight: t.fontWeight as "400" | "500" | "600" | "700",
          lineHeight: parseFloat(String(t.lineHeight).replace("px", "")) || 22,
          letterSpacing: t.letterSpacing === "-0.01em" ? -0.15 : 0,
          color: theme.color.foreground.default,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
}
