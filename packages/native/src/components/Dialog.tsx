import React from "react";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme";

export interface DialogProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
}

export function Dialog({ visible, onClose, title, children }: DialogProps) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable style={styles.back} onPress={onClose}>
        <Pressable style={styles.card} onPress={(e) => e.stopPropagation()}>
          <Text style={styles.title}>{title}</Text>
          {children}
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  back: { flex: 1, backgroundColor: theme.color.black["50"], justifyContent: "center", padding: 24 },
  card: {
    backgroundColor: theme.color.background.paper,
    borderRadius: 12,
    padding: 20,
    maxWidth: 400,
    alignSelf: "center",
    width: "100%",
  },
  title: { fontSize: 18, fontWeight: "700", marginBottom: 12, color: theme.color.foreground.default },
});
