import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import theme from "../theme";

export type AppTab = "fakturor" | "konton" | "upptack" | "mitt-resurs";

export interface AppShellProps {
  /** Active tab key */
  activeTab?: AppTab;
  /** Called when user taps a tab (for interactive prototypes) */
  onTabChange?: (tab: AppTab) => void;
  /** Main content area (placeholder or per-tab content) */
  children?: React.ReactNode;
}

const TAB_ITEMS: { key: AppTab; label: string; icon: string }[] = [
  { key: "fakturor", label: "Fakturor", icon: "📄" },
  { key: "konton", label: "Konton", icon: "💳" },
  { key: "upptack", label: "Upptäck", icon: "🧭" },
  { key: "mitt-resurs", label: "Mitt Resurs", icon: "👤" },
];

const bg = (theme as { color?: { background?: { default?: string } } }).color?.background?.default ?? "#ffffff";
const fg = (theme as { color?: { foreground?: { default?: string } } }).color?.foreground?.default ?? "#18181b";
const muted = (theme as { color?: { neutral?: Record<string, string> } }).color?.neutral?.[500] ?? "#71717a";
const border = (theme as { color?: { border?: { default?: string } } }).color?.border?.default ?? "#e4e4e7";

export function AppShell({
  activeTab = "konton",
  onTabChange,
  children,
}: AppShellProps) {
  const headerTitle = TAB_ITEMS.find((t) => t.key === activeTab)?.label ?? activeTab;
  const windowHeight = Dimensions.get("window").height;
  return (
    <View style={[styles.container, { backgroundColor: bg, minHeight: windowHeight }]}>
      <View style={[styles.header, { borderBottomColor: border }]}>
        <Text style={[styles.headerTitle, { color: fg }]} numberOfLines={1}>
          {headerTitle}
        </Text>
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </ScrollView>
      <View style={[styles.tabBar, { borderTopColor: border }]}>
        {TAB_ITEMS.map(({ key, label, icon }) => {
          const isActive = activeTab === key;
          return (
            <TouchableOpacity
              key={key}
              style={styles.tab}
              onPress={() => onTabChange?.(key)}
              activeOpacity={0.7}
              accessibilityRole="tab"
              accessibilityState={{ selected: isActive }}
              accessibilityLabel={label}
            >
              <Text style={[styles.tabIcon, { color: isActive ? fg : muted }]}>
                {icon}
              </Text>
              <Text
                style={[
                  styles.tabLabel,
                  { color: isActive ? fg : muted },
                  isActive && styles.tabLabelActive,
                ]}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    justifyContent: "center",
    minHeight: 48,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
  },
  tabBar: {
    flexDirection: "row",
    borderTopWidth: 1,
    paddingBottom: 24,
    paddingTop: 8,
    paddingHorizontal: 8,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    gap: 4,
  },
  tabIcon: {
    fontSize: 20,
    marginBottom: 2,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: "500",
  },
  tabLabelActive: {
    fontWeight: "600",
  },
});
