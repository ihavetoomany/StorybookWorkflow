import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, LayoutAnimation, Platform, UIManager } from "react-native";
import theme from "../theme";
import { MaterialIcons } from "@expo/vector-icons";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

function animateToggle() {
  // RN-web’s LayoutAnimation path is flaky when panels mount/unmount in Storybook; native keeps animation.
  if (Platform.OS === "web") return;
  try {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  } catch {
    /* no-op */
  }
}

export interface AccordionProps {
  title: string;
  children?: React.ReactNode;
  defaultExpanded?: boolean;
}

export function Accordion({ title, children, defaultExpanded = false }: AccordionProps) {
  const [open, setOpen] = useState(defaultExpanded);
  return (
    <View style={styles.wrap}>
      <Pressable
        style={styles.header}
        onPress={() => {
          animateToggle();
          setOpen((o) => !o);
        }}
        accessibilityRole="button"
        accessibilityState={{ expanded: open }}
      >
        <Text style={styles.title}>{title}</Text>
        <MaterialIcons name={open ? "expand-less" : "expand-more"} size={24} color={theme.color.foreground.secondary} />
      </Pressable>
      {open ? <View style={styles.body}>{children}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    borderRadius: 8,
    overflow: "hidden",
    minWidth: 280,
    backgroundColor: theme.color.background.paper,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
  },
  title: { fontSize: 16, fontWeight: "600", color: theme.color.foreground.default },
  body: { padding: 12, paddingTop: 0 },
});
