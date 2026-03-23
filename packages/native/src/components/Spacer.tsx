import React from "react";
import { View } from "react-native";

export interface SpacerProps {
  width?: number;
  height?: number;
  flex?: number;
}

export function Spacer({ width, height, flex }: SpacerProps) {
  return <View style={{ width, height, flex }} />;
}
