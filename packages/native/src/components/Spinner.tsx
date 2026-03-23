import React from "react";
import { ActivityIndicator } from "react-native";
import theme from "../theme";

export interface SpinnerProps {
  size?: "small" | "large";
}

export function Spinner({ size = "large" }: SpinnerProps) {
  return <ActivityIndicator color={theme.color.primary.main} size={size} accessibilityLabel="Loading" />;
}
