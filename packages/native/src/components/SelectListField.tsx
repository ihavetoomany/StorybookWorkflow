import React from "react";
import { View } from "react-native";
import { ListItem } from "./ListItem";

export interface SelectListFieldProps {
  options: string[];
  valueIndex: number;
  onChange: (index: number) => void;
}

export function SelectListField({ options, valueIndex, onChange }: SelectListFieldProps) {
  return (
    <View>
      {options.map((o, i) => (
        <ListItem key={o} title={o} onPress={() => onChange(i)} subtitle={i === valueIndex ? "Selected" : undefined} />
      ))}
    </View>
  );
}
