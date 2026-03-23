import React from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  StyleSheet,
  type ViewStyle,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "../theme";
import { Button } from "./Button";

export type AlertDialogState = "error" | "warning" | "info" | "success";

export interface AlertDialogProps {
  visible: boolean;
  onRequestClose: () => void;
  title: string;
  description: string;
  state?: AlertDialogState;
  /** Narrow layout for small screens (stacked actions). */
  smallScreen?: boolean;
  primaryLabel?: string;
  onPrimaryPress?: () => void;
  secondaryLabel?: string;
  onSecondaryPress?: () => void;
  cardStyle?: ViewStyle;
  testID?: string;
}

const iconName: Record<AlertDialogState, keyof typeof MaterialIcons.glyphMap> = {
  error: "error-outline",
  warning: "warning",
  info: "info-outline",
  success: "check-circle-outline",
};

function stateColors(s: AlertDialogState) {
  const sem = theme.color.semantic[s];
  return { accent: sem.main, fg: theme.color.foreground.default, muted: theme.color.foreground.secondary };
}

export function AlertDialog({
  visible,
  onRequestClose,
  title,
  description,
  state = "info",
  smallScreen = false,
  primaryLabel = "OK",
  onPrimaryPress,
  secondaryLabel = "Cancel",
  onSecondaryPress,
  cardStyle,
  testID,
}: AlertDialogProps) {
  const c = stateColors(state);
  const actionsRow = !smallScreen;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onRequestClose}
      testID={testID}
    >
      <Pressable style={styles.backdrop} onPress={onRequestClose} accessibilityLabel="Dismiss dialog backdrop">
        <Pressable style={[styles.card, cardStyle]} onPress={(e) => e.stopPropagation()}>
          <View style={styles.header}>
            <MaterialIcons name={iconName[state]} size={28} color={c.accent} />
            <Text style={[styles.title, { color: c.fg }]} accessibilityRole="header">
              {title}
            </Text>
          </View>
          <ScrollView style={styles.bodyScroll} contentContainerStyle={styles.bodyContent}>
            <Text style={[styles.body, { color: c.muted }]}>{description}</Text>
          </ScrollView>
          <View style={[styles.actions, actionsRow ? styles.actionsRow : styles.actionsCol]}>
            <View style={smallScreen ? styles.btnFull : styles.btnGrow}>
              <Button
                title={secondaryLabel}
                variant="outline"
                onPress={() => {
                  onSecondaryPress?.();
                  onRequestClose();
                }}
              />
            </View>
            <View style={smallScreen ? styles.btnFull : styles.btnGrow}>
              <Button
                title={primaryLabel}
                variant="default"
                onPress={() => {
                  onPrimaryPress?.();
                  onRequestClose();
                }}
              />
            </View>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: theme.color.black["50"],
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  card: {
    width: "100%",
    maxWidth: 444,
    maxHeight: "90%",
    backgroundColor: theme.color.background.paper,
    borderRadius: 12,
    padding: 24,
    gap: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 28,
  },
  bodyScroll: {
    maxHeight: 220,
  },
  bodyContent: {
    paddingBottom: 4,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
  },
  actions: {
    gap: 12,
    marginTop: 8,
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  actionsCol: {
    flexDirection: "column",
  },
  btnGrow: {
    minWidth: 120,
  },
  btnFull: {
    width: "100%",
  },
});
