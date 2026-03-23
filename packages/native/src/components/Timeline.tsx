import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

export interface TimelineItem {
  title: string;
  time?: string;
}

export interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <View>
      {items.map((it, i) => (
        <View key={i} style={styles.row}>
          <View style={styles.lineCol}>
            <View style={styles.dot} />
            {i < items.length - 1 ? <View style={styles.vline} /> : null}
          </View>
          <View style={{ flex: 1, paddingBottom: 16 }}>
            <Text style={styles.title}>{it.title}</Text>
            {it.time ? <Text style={styles.time}>{it.time}</Text> : null}
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 12 },
  lineCol: { alignItems: "center", width: 16 },
  dot: { width: 10, height: 10, borderRadius: 5, backgroundColor: theme.color.primary.main },
  vline: { width: 2, flex: 1, backgroundColor: theme.color.border.muted, marginVertical: 4 },
  title: { fontSize: 16, fontWeight: "500", color: theme.color.foreground.default },
  time: { fontSize: 12, color: theme.color.foreground.secondary, marginTop: 2 },
});
