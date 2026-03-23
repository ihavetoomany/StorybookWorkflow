import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

export interface TreeNode {
  label: string;
  children?: TreeNode[];
}

export interface TreeViewProps {
  nodes: TreeNode[];
  depth?: number;
}

export function TreeView({ nodes, depth = 0 }: TreeViewProps) {
  return (
    <View style={{ paddingLeft: depth * 12 }}>
      {nodes.map((n, i) => (
        <View key={i} style={styles.item}>
          <Text style={styles.label}>{n.label}</Text>
          {n.children?.length ? <TreeView nodes={n.children} depth={depth + 1} /> : null}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  item: { marginBottom: 4 },
  label: { fontSize: 14, color: theme.color.foreground.default },
});
