import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme";

export interface ListItemProps {
  title: string;
  subtitle?: string;
  onPress?: () => void;
}

export function ListItem({ title, subtitle, onPress }: ListItemProps) {
  const Body = (
    <View style={styles.row}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.sub}>{subtitle}</Text> : null}
      </View>
    </View>
  );
  return onPress ? (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.wrap, pressed && styles.pressed]}>
      {Body}
    </Pressable>
  ) : (
    <View style={styles.wrap}>{Body}</View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingVertical: 12, paddingHorizontal: 16, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: theme.color.border.muted },
  pressed: { backgroundColor: theme.color.neutral["50"] },
  row: { flexDirection: "row", alignItems: "center" },
  title: { fontSize: 16, color: theme.color.foreground.default },
  sub: { fontSize: 14, color: theme.color.foreground.secondary, marginTop: 2 },
});
