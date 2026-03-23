import React from "react";
import { Modal as RNModal, View, StyleSheet, Pressable, Text } from "react-native";
import theme from "../theme";

export interface ModalProps {
  visible: boolean;
  onRequestClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

export function Modal({ visible, onRequestClose, title, children }: ModalProps) {
  return (
    <RNModal visible={visible} transparent animationType="slide" onRequestClose={onRequestClose}>
      <Pressable style={styles.back} onPress={onRequestClose}>
        <Pressable style={styles.sheet} onPress={(e) => e.stopPropagation()}>
          {title ? <Text style={styles.title}>{title}</Text> : null}
          {children}
        </Pressable>
      </Pressable>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  back: { flex: 1, justifyContent: "flex-end", backgroundColor: theme.color.black["50"] },
  sheet: {
    backgroundColor: theme.color.background.paper,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
    minHeight: 200,
  },
  title: { fontSize: 18, fontWeight: "700", marginBottom: 12 },
});
