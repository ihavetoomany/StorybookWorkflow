import React from "react";
import { Switch as RNSwitch } from "react-native";
import theme from "../theme";

export interface SwitchProps {
  value: boolean;
  onValueChange: (v: boolean) => void;
}

export function Switch({ value, onValueChange }: SwitchProps) {
  return (
    <RNSwitch
      value={value}
      onValueChange={onValueChange}
      trackColor={{ false: theme.color.neutral["300"], true: theme.color.primary["300"] }}
      thumbColor={value ? theme.color.primary.main : theme.color.neutral["100"]}
      ios_backgroundColor={theme.color.neutral["300"]}
    />
  );
}
