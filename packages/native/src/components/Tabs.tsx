import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme";

export interface TabsProps {
  tabs: string[];
  activeIndex: number;
  onChange: (i: number) => void;
}

export function Tabs({ tabs, activeIndex, onChange }: TabsProps) {
  return (
    <View style={styles.row}>
      {tabs.map((t, i) => (
        <Pressable key={t} style={[styles.tab, i === activeIndex && styles.on]} onPress={() => onChange(i)}>
          <Text style={[styles.txt, i === activeIndex && styles.txtOn]}>{t}</Text>
          {i === activeIndex ? <View style={styles.underline} /> : null}
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", borderBottomWidth: StyleSheet.hairlineWidth, borderColor: theme.color.border.muted, gap: 16 },
  tab: { paddingVertical: 8 },
  on: {},
  txt: { fontSize: 16, color: theme.color.foreground.secondary },
  txtOn: { fontWeight: "600", color: theme.color.primary.main },
  underline: { height: 2, backgroundColor: theme.color.primary.main, marginTop: 4 },
});
