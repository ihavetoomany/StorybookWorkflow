import React from "react";
import { View, type ViewProps } from "react-native";

export interface LayoutProps extends ViewProps {
  children?: React.ReactNode;
}

export function Layout({ children, style, ...rest }: LayoutProps) {
  return (
    <View style={[{ flexDirection: "row", flexWrap: "wrap", gap: 12 }, style]} {...rest}>
      {children}
    </View>
  );
}
