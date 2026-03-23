import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "../theme";

export interface IconProps {
  name: keyof typeof MaterialIcons.glyphMap;
  size?: number;
  color?: string;
}

export function Icon({ name, size = 24, color = theme.color.foreground.default }: IconProps) {
  return <MaterialIcons name={name} size={size} color={color} />;
}
