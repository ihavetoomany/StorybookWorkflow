/**
 * Generates React Native components + Storybook stories aligned with Resurs UI 2.0 Figma pages
 * (pages after Master Components). Run from repo root:
 *   node packages/native/scripts/generate-ui20-components.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const componentsDir = path.join(__dirname, "../src/components");

/** component export name -> Figma canvas node id */
const FIGMA = {
  Autocomplete: "335:14891",
  Accordion: "869:86254",
  Avatar: "133:4540",
  Backdrop: "503:38172",
  Badge: "2:2",
  BottomNavigation: "456:29486",
  Breadcrumbs: "460:29642",
  BillActivityListItem: "8314:13496",
  StickyActionBar: "7217:2252",
  ButtonGroup: "642:48410",
  Card: "584:42764",
  CardList: "6579:2432",
  Checkbox: "341:27368",
  Chip: "55:15217",
  CreditCard: "1775:95722",
  CreditWarning: "7497:23845",
  DateTime: "442:27697",
  Dialog: "769:81247",
  Divider: "125:6073",
  DotsIndicator: "1590:3688",
  FilteredTabs: "2703:82659",
  FloatingActionButton: "504:36349",
  GraphicElements: "1798:664",
  Icon: "95:3419",
  IconButton: "171:14128",
  Icons: "122:7839",
  InfoBox: "3401:8578",
  InputElements: "301:11923",
  Layout: "569:53917",
  Link: "457:29548",
  List: "946:88322",
  ListItem: "437:27104",
  Logo: "409:85319",
  Menu: "328:18920",
  Modal: "1321:100135",
  Multiline: "557:41252",
  Pagination: "513:36867",
  Paper: "577:44632",
  PaymentStatusView: "4194:294",
  PaymentOptionSelectField: "7186:152",
  Progress: "443:31438",
  Radio: "336:22774",
  Rating: "475:32799",
  SelectField: "302:13604",
  SearchBar: "1967:14095",
  SelectButtonField: "1556:50756",
  SelectListField: "1556:1818",
  SelectPaymentOptionField: "6263:102",
  Skeleton: "441:27005",
  Sidebar: "6629:14484",
  Snackbar: "171:8411",
  Slider: "216:9506",
  Stepper: "117:3421",
  Spinner: "7323:25624",
  Spacer: "569:53957",
  Switch: "363:17232",
  Table: "697:54904",
  Tabs: "443:32243",
  ResursText: "6367:10697",
  TextField: "353:19696",
  PhoneCountryField: "6309:13848",
  Timeline: "792:82363",
  ToggleButton: "559:41201",
  TopAppBar: "1381:97351",
  TopNavBar: "6939:1668",
  Toolbar: "2628:60184",
  Toast: "6575:1104",
  Tooltip: "90:3533",
  TreeView: "783:83182",
};

const FILE_KEY = "DFy3VmnixeA0hD2W78qPGS";

function figmaUrl(nodeId) {
  return `https://www.figma.com/design/${FILE_KEY}/Resurs-UI-2.0?node-id=${nodeId.replace(":", "-")}`;
}

/** Storybook sidebar title (human-readable, matches Figma page names where possible) */
function storyTitle(name) {
  const map = {
    ResursText: "Text",
    BottomNavigation: "Bottom Navigation",
    StickyActionBar: "Sticky Action Bar",
    ButtonGroup: "Button Group",
    BillActivityListItem: "Bill Activity List Item",
    CardList: "Card list",
    CreditCard: "Credit card",
    CreditWarning: "Credit warning",
    DateTime: "Date / Time",
    DotsIndicator: "Dots Indicator",
    FilteredTabs: "FilteredTabs",
    FloatingActionButton: "Floating Action Button",
    GraphicElements: "Graphic elements",
    IconButton: "Icon Button",
    InfoBox: "Info Box",
    InputElements: "Input Elements",
    ListItem: "ListItem",
    PaymentStatusView: "PaymentStatusView",
    PaymentOptionSelectField: "PaymentOptionSelectField",
    PhoneCountryField: "PhoneCountryField",
    SelectButtonField: "SelectButtonField",
    SelectListField: "SelectListField",
    SelectPaymentOptionField: "SelectPaymentOptionField",
    TopAppBar: "Top App Bar",
    TopNavBar: "Top Nav Bar",
    TreeView: "Tree View",
  };
  return map[name] ?? name.replace(/([A-Z])/g, " $1").replace(/^\s+/, "");
}

function storyMeta(componentName, storyName, figmaId) {
  return `import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { ${componentName} } from "./${componentName}";

const meta: Meta<typeof ${componentName}> = {
  title: "Components/App/${storyName}",
  component: ${componentName},
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: \`Resurs UI 2.0 — [Figma](${figmaUrl(figmaId)})\`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ${componentName}>;

export const Default: Story = {
  render: (args) => (
    <View style={{ padding: 16, minWidth: 280 }}>
      <${componentName} {...args} />
    </View>
  ),
};
`;
}

const skipOverwrite = new Set(["Button.tsx", "Alert.tsx", "AlertDialog.tsx"]);

function writeComponent(name, source) {
  const f = path.join(componentsDir, `${name}.tsx`);
  if (skipOverwrite.has(`${name}.tsx`) && fs.existsSync(f)) return;
  fs.writeFileSync(f, source);
}

function writeStory(name, storyName, figmaId) {
  fs.writeFileSync(path.join(componentsDir, `${name}.stories.tsx`), storyMeta(name, storyName, figmaId));
}

/* ——— Component sources ——— */

function tInput(name) {
  return `import React from "react";
import { TextInput, StyleSheet } from "react-native";
import theme from "../theme";

export interface ${name}Props {
  value: string;
  onChangeText: (t: string) => void;
  placeholder?: string;
}

export function ${name}({ value, onChangeText, placeholder }: ${name}Props) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={theme.color.foreground.muted}
      accessibilityLabel={placeholder}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: theme.color.foreground.default,
    minWidth: 280,
    backgroundColor: theme.color.background.paper,
  },
});
`;
}

function tSurface(name, rounded = 8) {
  return `import React from "react";
import { View, StyleSheet, type ViewStyle } from "react-native";
import theme from "../theme";

export interface ${name}Props {
  children?: React.ReactNode;
  style?: ViewStyle;
}

export function ${name}({ children, style }: ${name}Props) {
  return <View style={[styles.root, { borderRadius: ${rounded} }, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.color.background.paper,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    padding: 16,
  },
});
`;
}

function tAccordion() {
  return `import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, LayoutAnimation, Platform, UIManager } from "react-native";
import theme from "../theme";
import { MaterialIcons } from "@expo/vector-icons";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
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
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
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
`;
}

function tAvatar() {
  return `import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

export interface AvatarProps {
  label: string;
  size?: number;
}

export function Avatar({ label, size = 40 }: AvatarProps) {
  const initials = label
    .split(/\\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <View style={[styles.circle, { width: size, height: size, borderRadius: size / 2 }]} accessibilityLabel={label}>
      <Text style={[styles.text, { fontSize: size * 0.35 }]}>{initials}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    backgroundColor: theme.color.primary.background,
    alignItems: "center",
    justifyContent: "center",
  },
  text: { fontWeight: "600", color: theme.color.primary.main },
});
`;
}

function tBackdrop() {
  return `import React from "react";
import { Pressable, StyleSheet } from "react-native";
import theme from "../theme";

export interface BackdropProps {
  visible: boolean;
  onPress?: () => void;
}

export function Backdrop({ visible, onPress }: BackdropProps) {
  if (!visible) return null;
  return <Pressable style={styles.root} onPress={onPress} accessibilityLabel="Backdrop" />;
}

const styles = StyleSheet.create({
  root: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.color.black["50"],
  },
});
`;
}

function tBadge() {
  return `import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

export interface BadgeProps {
  label: string;
}

export function Badge({ label }: BadgeProps) {
  return (
    <View style={styles.pill} accessibilityLabel={label}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    backgroundColor: theme.color.primary.background,
    alignSelf: "flex-start",
  },
  text: { fontSize: 12, fontWeight: "600", color: theme.color.primary.main },
});
`;
}

function tBottomNav() {
  return `import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import theme from "../theme";
import { MaterialIcons } from "@expo/vector-icons";

export interface BottomNavigationItem {
  key: string;
  label: string;
  icon: keyof typeof MaterialIcons.glyphMap;
}

export interface BottomNavigationProps {
  items: BottomNavigationItem[];
  activeKey: string;
  onSelect: (key: string) => void;
}

export function BottomNavigation({ items, activeKey, onSelect }: BottomNavigationProps) {
  return (
    <View style={styles.row} accessibilityRole="tablist">
      {items.map((it) => {
        const active = it.key === activeKey;
        return (
          <Pressable key={it.key} style={styles.item} onPress={() => onSelect(it.key)} accessibilityRole="tab" accessibilityState={{ selected: active }}>
            <MaterialIcons name={it.icon} size={24} color={active ? theme.color.primary.main : theme.color.foreground.muted} />
            <Text style={[styles.label, active && styles.labelActive]}>{it.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: theme.color.background.paper,
    justifyContent: "space-around",
    minWidth: 320,
  },
  item: { alignItems: "center", gap: 4 },
  label: { fontSize: 12, color: theme.color.foreground.muted },
  labelActive: { color: theme.color.primary.main, fontWeight: "600" },
});
`;
}

function tBreadcrumbs() {
  return `import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme";
import { MaterialIcons } from "@expo/vector-icons";

export interface BreadcrumbsProps {
  items: string[];
  onPressItem?: (index: number) => void;
}

export function Breadcrumbs({ items, onPressItem }: BreadcrumbsProps) {
  return (
    <View style={styles.row} accessibilityRole="text">
      {items.map((label, i) => (
        <React.Fragment key={\`\${i}-\${label}\`}>
          {i > 0 ? <MaterialIcons name="chevron-right" size={18} color={theme.color.foreground.muted} /> : null}
          <Pressable onPress={() => onPressItem?.(i)} disabled={!onPressItem}>
            <Text style={[styles.crumb, i === items.length - 1 && styles.current]}>{label}</Text>
          </Pressable>
        </React.Fragment>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 4 },
  crumb: { fontSize: 14, color: theme.color.foreground.secondary },
  current: { color: theme.color.foreground.default, fontWeight: "600" },
});
`;
}

function tBillRow() {
  return `import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

export interface BillActivityListItemProps {
  title: string;
  subtitle?: string;
  amount: string;
}

export function BillActivityListItem({ title, subtitle, amount }: BillActivityListItemProps) {
  return (
    <View style={styles.row}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.sub}>{subtitle}</Text> : null}
      </View>
      <Text style={styles.amount}>{amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    minWidth: 280,
  },
  title: { fontSize: 16, fontWeight: "500", color: theme.color.foreground.default },
  sub: { fontSize: 14, color: theme.color.foreground.secondary, marginTop: 2 },
  amount: { fontSize: 16, fontWeight: "600", color: theme.color.foreground.default },
});
`;
}

function tStickyBar() {
  return `import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme";
import { Button } from "./Button";

export interface StickyActionBarProps {
  primaryTitle: string;
  onPrimaryPress?: () => void;
  secondaryTitle?: string;
  onSecondaryPress?: () => void;
}

export function StickyActionBar({ primaryTitle, onPrimaryPress, secondaryTitle, onSecondaryPress }: StickyActionBarProps) {
  return (
    <View style={styles.bar}>
      {secondaryTitle ? <Button title={secondaryTitle} variant="outline" onPress={onSecondaryPress} /> : null}
      <Button title={primaryTitle} onPress={onPrimaryPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12,
    padding: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    backgroundColor: theme.color.background.paper,
  },
});
`;
}

function tButtonGroup() {
  return `import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "./Button";

export interface ButtonGroupProps {
  labels: string[];
  onPressIndex?: (index: number) => void;
}

export function ButtonGroup({ labels, onPressIndex }: ButtonGroupProps) {
  return (
    <View style={styles.row}>
      {labels.map((title, i) => (
        <Button key={title} title={title} variant={i === 0 ? "outline" : "default"} onPress={() => onPressIndex?.(i)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
});
`;
}

function tCardList() {
  return `import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme";

export interface CardListProps {
  children?: React.ReactNode;
}

export function CardList({ children }: CardListProps) {
  return <View style={styles.col}>{children}</View>;
}

const styles = StyleSheet.create({
  col: { gap: 12, minWidth: 280 },
});
`;
}

function tCheckbox() {
  return `import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import theme from "../theme";
import { MaterialIcons } from "@expo/vector-icons";

export interface CheckboxProps {
  checked: boolean;
  onToggle: (v: boolean) => void;
}

export function Checkbox({ checked, onToggle }: CheckboxProps) {
  return (
    <Pressable
      style={[styles.box, checked && styles.boxOn]}
      onPress={() => onToggle(!checked)}
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
    >
      {checked ? <MaterialIcons name="check" size={18} color={theme.color.primary.contrast} /> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 22,
    height: 22,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: theme.color.border.default,
    alignItems: "center",
    justifyContent: "center",
  },
  boxOn: { backgroundColor: theme.color.primary.main, borderColor: theme.color.primary.main },
});
`;
}

function tChip() {
  return `import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme";

export interface ChipProps {
  label: string;
  selected?: boolean;
  onPress?: () => void;
}

export function Chip({ label, selected, onPress }: ChipProps) {
  return (
    <Pressable
      style={[styles.chip, selected && styles.chipOn]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected }}
    >
      <Text style={[styles.text, selected && styles.textOn]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    backgroundColor: theme.color.background.paper,
  },
  chipOn: { backgroundColor: theme.color.primary.background, borderColor: theme.color.primary.main },
  text: { fontSize: 14, color: theme.color.foreground.default },
  textOn: { fontWeight: "600", color: theme.color.primary.main },
});
`;
}

function tCreditCard() {
  return `import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

export interface CreditCardProps {
  lastFour: string;
  holder?: string;
}

export function CreditCard({ lastFour, holder }: CreditCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.brand}>Card</Text>
      <Text style={styles.pan}>•••• {lastFour}</Text>
      {holder ? <Text style={styles.holder}>{holder}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 280,
    minHeight: 160,
    borderRadius: 12,
    padding: 16,
    backgroundColor: theme.color.secondary.dark,
  },
  brand: { color: theme.color.white["70"], fontSize: 12 },
  pan: { color: theme.color.white["100"], fontSize: 20, fontWeight: "600", marginTop: 24 },
  holder: { color: theme.color.white["70"], marginTop: 8, fontSize: 14 },
});
`;
}

function tCreditWarning() {
  return `import React from "react";
import { Alert } from "./Alert";

export interface CreditWarningProps {
  message: string;
}

export function CreditWarning({ message }: CreditWarningProps) {
  return <Alert severity="warning" message={message} />;
}
`;
}

function tDateTime() {
  return `import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme";

export interface DateTimeProps {
  /** ISO or display string */
  value: string;
}

export function DateTime({ value }: DateTimeProps) {
  return <Text style={styles.t}>{value}</Text>;
}

const styles = StyleSheet.create({
  t: { fontSize: 16, color: theme.color.foreground.default },
});
`;
}

function tDialog() {
  return `import React from "react";
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
`;
}

function tDivider() {
  return `import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme";

export interface DividerProps {
  vertical?: boolean;
}

export function Divider({ vertical }: DividerProps) {
  return <View style={vertical ? styles.v : styles.h} accessibilityRole="none" />;
}

const styles = StyleSheet.create({
  h: { height: StyleSheet.hairlineWidth, backgroundColor: theme.color.border.muted, alignSelf: "stretch" },
  v: { width: StyleSheet.hairlineWidth, backgroundColor: theme.color.border.muted, alignSelf: "stretch" },
});
`;
}

function tDots() {
  return `import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme";

export interface DotsIndicatorProps {
  count: number;
  activeIndex: number;
}

export function DotsIndicator({ count, activeIndex }: DotsIndicatorProps) {
  return (
    <View style={styles.row}>
      {Array.from({ length: count }, (_, i) => (
        <View key={i} style={[styles.dot, i === activeIndex && styles.dotActive]} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 6, alignItems: "center" },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: theme.color.neutral["300"] },
  dotActive: { backgroundColor: theme.color.primary.main, width: 10, height: 10, borderRadius: 5 },
});
`;
}

function tFilteredTabs() {
  return `import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme";

export interface FilteredTabsProps {
  tabs: string[];
  activeIndex: number;
  onChange: (index: number) => void;
}

export function FilteredTabs({ tabs, activeIndex, onChange }: FilteredTabsProps) {
  return (
    <View style={styles.row}>
      {tabs.map((t, i) => (
        <Pressable key={t} style={[styles.tab, i === activeIndex && styles.tabOn]} onPress={() => onChange(i)}>
          <Text style={[styles.label, i === activeIndex && styles.labelOn]}>{t}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  tab: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
  },
  tabOn: { backgroundColor: theme.color.primary.background, borderColor: theme.color.primary.main },
  label: { fontSize: 14, color: theme.color.foreground.secondary },
  labelOn: { fontWeight: "600", color: theme.color.primary.main },
});
`;
}

function tFab() {
  return `import React from "react";
import { Pressable, StyleSheet } from "react-native";
import theme from "../theme";
import { MaterialIcons } from "@expo/vector-icons";

export interface FloatingActionButtonProps {
  icon?: keyof typeof MaterialIcons.glyphMap;
  onPress?: () => void;
}

export function FloatingActionButton({ icon = "add", onPress }: FloatingActionButtonProps) {
  return (
    <Pressable style={styles.fab} onPress={onPress} accessibilityRole="button">
      <MaterialIcons name={icon} size={28} color={theme.color.primary.contrast} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: theme.color.primary.main,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
`;
}

function tGraphic() {
  return tSurface("GraphicElements", 0);
}

function tIcon() {
  return `import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "../theme";

export interface IconProps {
  name: keyof typeof MaterialIcons.glyphMap;
  size?: number;
  color?: string;
}

export function Icon({ name, size = 24, color = theme.color.foreground.default }: IconProps) {
  return <MaterialIcons name={name} size={size} color={color} accessibilityElementsHidden importantForAccessibility="no" />;
}
`;
}

function tIconButton() {
  return `import React from "react";
import { Pressable, StyleSheet } from "react-native";
import theme from "../theme";
import { MaterialIcons } from "@expo/vector-icons";

export interface IconButtonProps {
  name: keyof typeof MaterialIcons.glyphMap;
  onPress?: () => void;
  accessibilityLabel: string;
}

export function IconButton({ name, onPress, accessibilityLabel }: IconButtonProps) {
  return (
    <Pressable style={styles.hit} onPress={onPress} accessibilityRole="button" accessibilityLabel={accessibilityLabel}>
      <MaterialIcons name={name} size={24} color={theme.color.foreground.default} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  hit: { padding: 8, borderRadius: 999 },
});
`;
}

function tIcons() {
  return `import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "../theme";

export interface IconsProps {
  names: (keyof typeof MaterialIcons.glyphMap)[];
}

export function Icons({ names }: IconsProps) {
  return (
    <View style={styles.grid}>
      {names.map((n) => (
        <MaterialIcons key={n} name={n} size={28} color={theme.color.foreground.default} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 16 },
});
`;
}

function tInfoBox() {
  return `import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

export interface InfoBoxProps {
  message: string;
}

export function InfoBox({ message }: InfoBoxProps) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: theme.color.semantic.info.background,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.semantic.info.main,
    maxWidth: 360,
  },
  text: { fontSize: 14, color: theme.color.foreground.default, lineHeight: 20 },
});
`;
}

function tInputElements() {
  return `import React from "react";
import { View, StyleSheet } from "react-native";

export interface InputElementsProps {
  children?: React.ReactNode;
}

export function InputElements({ children }: InputElementsProps) {
  return <View style={styles.col}>{children}</View>;
}

const styles = StyleSheet.create({
  col: { gap: 12, minWidth: 280 },
});
`;
}

function tLayout() {
  return `import React from "react";
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
`;
}

function tLink() {
  return `import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme";

export interface LinkProps {
  children: string;
  onPress?: () => void;
}

export function Link({ children, onPress }: LinkProps) {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.link}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  link: {
    fontSize: 16,
    color: theme.color.primary.main,
    textDecorationLine: "underline",
  },
});
`;
}

function tList() {
  return `import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme";

export interface ListProps {
  children?: React.ReactNode;
}

export function List({ children }: ListProps) {
  return <View style={styles.col}>{children}</View>;
}

const styles = StyleSheet.create({
  col: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    borderRadius: 8,
    overflow: "hidden",
    minWidth: 280,
  },
});
`;
}

function tListItem() {
  return `import React from "react";
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
`;
}

function tLogo() {
  return `import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

export interface LogoProps {
  /** Wordmark placeholder — swap for brand asset from Figma */
  label?: string;
}

export function Logo({ label = "Resurs" }: LogoProps) {
  return (
    <View style={styles.box} accessibilityLabel={label}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { paddingVertical: 8, paddingHorizontal: 4 },
  text: { fontSize: 20, fontWeight: "700", color: theme.color.primary.main },
});
`;
}

function tMenu() {
  return `import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme";

export interface MenuProps {
  items: string[];
  onSelect?: (index: number) => void;
}

export function Menu({ items, onSelect }: MenuProps) {
  return (
    <View style={styles.menu}>
      {items.map((label, i) => (
        <Pressable key={label} style={styles.item} onPress={() => onSelect?.(i)}>
          <Text style={styles.label}>{label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: theme.color.background.paper,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    minWidth: 200,
    overflow: "hidden",
  },
  item: { paddingVertical: 12, paddingHorizontal: 16 },
  label: { fontSize: 16, color: theme.color.foreground.default },
});
`;
}

function tModal() {
  return `import React from "react";
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
`;
}

function tMultiline() {
  return `import React from "react";
import { TextInput, StyleSheet } from "react-native";
import theme from "../theme";

export interface MultilineProps {
  value: string;
  onChangeText: (t: string) => void;
  placeholder?: string;
  lines?: number;
}

export function Multiline({ value, onChangeText, placeholder, lines = 4 }: MultilineProps) {
  return (
    <TextInput
      style={[styles.input, { minHeight: lines * 22 }]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={theme.color.foreground.muted}
      multiline
      textAlignVertical="top"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: theme.color.foreground.default,
    minWidth: 280,
    backgroundColor: theme.color.background.paper,
  },
});
`;
}

function tPagination() {
  return `import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme";

export interface PaginationProps {
  page: number;
  pageCount: number;
  onChange: (p: number) => void;
}

export function Pagination({ page, pageCount, onChange }: PaginationProps) {
  return (
    <View style={styles.row}>
      <Pressable onPress={() => onChange(Math.max(1, page - 1))} disabled={page <= 1}>
        <Text style={[styles.nav, page <= 1 && styles.dis]}>Prev</Text>
      </Pressable>
      <Text style={styles.meta}>
        {page} / {pageCount}
      </Text>
      <Pressable onPress={() => onChange(Math.min(pageCount, page + 1))} disabled={page >= pageCount}>
        <Text style={[styles.nav, page >= pageCount && styles.dis]}>Next</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", gap: 16 },
  nav: { fontSize: 16, color: theme.color.primary.main, fontWeight: "600" },
  dis: { color: theme.color.foreground.disabled },
  meta: { fontSize: 16, color: theme.color.foreground.default },
});
`;
}

function tPaymentStatus() {
  return `import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";
import { MaterialIcons } from "@expo/vector-icons";

export interface PaymentStatusViewProps {
  status: "pending" | "paid" | "failed";
  label: string;
}

export function PaymentStatusView({ status, label }: PaymentStatusViewProps) {
  const icon = status === "paid" ? "check-circle" : status === "failed" ? "error-outline" : "schedule";
  const color =
    status === "paid" ? theme.color.semantic.success.main : status === "failed" ? theme.color.semantic.error.main : theme.color.foreground.secondary;
  return (
    <View style={styles.row}>
      <MaterialIcons name={icon} size={24} color={color} />
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", gap: 8 },
  text: { fontSize: 16, color: theme.color.foreground.default },
});
`;
}

function tPaymentOption() {
  return `import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme";

export interface PaymentOptionSelectFieldProps {
  options: string[];
  valueIndex: number;
  onChange: (index: number) => void;
}

export function PaymentOptionSelectField({ options, valueIndex, onChange }: PaymentOptionSelectFieldProps) {
  return (
    <View style={styles.col}>
      {options.map((opt, i) => (
        <Pressable key={opt} style={[styles.row, i === valueIndex && styles.on]} onPress={() => onChange(i)}>
          <Text style={styles.t}>{opt}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  col: { gap: 8, minWidth: 280 },
  row: {
    padding: 12,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
  },
  on: { borderColor: theme.color.primary.main, backgroundColor: theme.color.primary.background },
  t: { fontSize: 16, color: theme.color.foreground.default },
});
`;
}

function tProgress() {
  return `import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme";

export interface ProgressProps {
  /** 0–1 */
  value: number;
}

export function Progress({ value }: ProgressProps) {
  const v = Math.min(1, Math.max(0, value));
  return (
    <View style={styles.track}>
      <View style={[styles.fill, { width: \`\${v * 100}%\` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.color.neutral["200"],
    overflow: "hidden",
    minWidth: 200,
  },
  fill: { height: "100%", backgroundColor: theme.color.primary.main },
});
`;
}

function tRadio() {
  return `import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import theme from "../theme";

export interface RadioProps {
  selected: boolean;
  onToggle: () => void;
}

export function Radio({ selected, onToggle }: RadioProps) {
  return (
    <Pressable style={styles.outer} onPress={onToggle} accessibilityRole="radio" accessibilityState={{ selected }}>
      {selected ? <View style={styles.inner} /> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  outer: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: theme.color.primary.main,
    alignItems: "center",
    justifyContent: "center",
  },
  inner: { width: 12, height: 12, borderRadius: 6, backgroundColor: theme.color.primary.main },
});
`;
}

function tRating() {
  return `import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import theme from "../theme";
import { MaterialIcons } from "@expo/vector-icons";

export interface RatingProps {
  value: number;
  max?: number;
  onChange?: (v: number) => void;
}

export function Rating({ value, max = 5, onChange }: RatingProps) {
  return (
    <View style={styles.row}>
      {Array.from({ length: max }, (_, i) => (
        <Pressable key={i} onPress={() => onChange?.(i + 1)}>
          <MaterialIcons name={i < value ? "star" : "star-border"} size={28} color={theme.color.amber["500"]} />
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 4 },
});
`;
}

function tSelectField() {
  return `import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme";
import { MaterialIcons } from "@expo/vector-icons";

export interface SelectFieldProps {
  label: string;
  value: string;
  onPress?: () => void;
}

export function SelectField({ label, value, onPress }: SelectFieldProps) {
  return (
    <Pressable style={styles.field} onPress={onPress} accessibilityRole="button">
      <View>
        <Text style={styles.lab}>{label}</Text>
        <Text style={styles.val}>{value}</Text>
      </View>
      <MaterialIcons name="arrow-drop-down" size={24} color={theme.color.foreground.secondary} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  field: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: 280,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    backgroundColor: theme.color.background.paper,
  },
  lab: { fontSize: 12, color: theme.color.foreground.secondary },
  val: { fontSize: 16, color: theme.color.foreground.default, marginTop: 2 },
});
`;
}

function tSelectButtonField() {
  return `import React from "react";
import { View, StyleSheet } from "react-native";
import { Chip } from "./Chip";

export interface SelectButtonFieldProps {
  options: string[];
  valueIndex: number;
  onChange: (index: number) => void;
}

export function SelectButtonField({ options, valueIndex, onChange }: SelectButtonFieldProps) {
  return (
    <View style={styles.row}>
      {options.map((o, i) => (
        <Chip key={o} label={o} selected={i === valueIndex} onPress={() => onChange(i)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
});
`;
}

function tSelectListField() {
  return `import React from "react";
import { View } from "react-native";
import { ListItem } from "./ListItem";

export interface SelectListFieldProps {
  options: string[];
  valueIndex: number;
  onChange: (index: number) => void;
}

export function SelectListField({ options, valueIndex, onChange }: SelectListFieldProps) {
  return (
    <View>
      {options.map((o, i) => (
        <ListItem key={o} title={o} onPress={() => onChange(i)} subtitle={i === valueIndex ? "Selected" : undefined} />
      ))}
    </View>
  );
}
`;
}

function tSelectPayment() {
  return `import React from "react";
import { PaymentOptionSelectField } from "./PaymentOptionSelectField";

export type SelectPaymentOptionFieldProps = import("./PaymentOptionSelectField").PaymentOptionSelectFieldProps;

export function SelectPaymentOptionField(props: SelectPaymentOptionFieldProps) {
  return <PaymentOptionSelectField {...props} />;
}
`;
}

function tSkeleton() {
  return `import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme";

export interface SkeletonProps {
  width?: number | string;
  height?: number;
}

export function Skeleton({ width = "100%", height = 16 }: SkeletonProps) {
  return <View style={[styles.box, { width, height } as object]} accessibilityLabel="Loading" />;
}

const styles = StyleSheet.create({
  box: { borderRadius: 4, backgroundColor: theme.color.neutral["200"] },
});
`;
}

function tSidebar() {
  return `import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme";

export interface SidebarProps {
  children?: React.ReactNode;
}

export function Sidebar({ children }: SidebarProps) {
  return <View style={styles.side}>{children}</View>;
}

const styles = StyleSheet.create({
  side: {
    minWidth: 240,
    maxWidth: 320,
    flex: 1,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    padding: 16,
    backgroundColor: theme.color.background.paper,
  },
});
`;
}

function tSnackbar() {
  return `import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

export interface SnackbarProps {
  message: string;
}

export function Snackbar({ message }: SnackbarProps) {
  return (
    <View style={styles.bar} accessibilityRole="alert">
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: theme.color.secondary.dark,
    maxWidth: 400,
  },
  text: { color: theme.color.white["100"], fontSize: 14 },
});
`;
}

function tSlider() {
  return `import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

export interface SliderProps {
  value: number;
  min?: number;
  max?: number;
}

export function Slider({ value, min = 0, max = 100 }: SliderProps) {
  const ratio = (value - min) / (max - min);
  return (
    <View style={styles.track}>
      <View style={styles.fillArea}>
        <View style={[styles.fill, { width: \`\${Math.min(1, Math.max(0, ratio)) * 100}%\` }]} />
      </View>
      <Text style={styles.val}>{Math.round(value)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  track: { minWidth: 200, gap: 8 },
  fillArea: { height: 8, borderRadius: 4, backgroundColor: theme.color.neutral["200"], overflow: "hidden" },
  fill: { height: "100%", backgroundColor: theme.color.primary.main },
  val: { fontSize: 12, color: theme.color.foreground.secondary },
});
`;
}

function tStepper() {
  return `import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

export interface StepperProps {
  steps: string[];
  activeIndex: number;
}

export function Stepper({ steps, activeIndex }: StepperProps) {
  return (
    <View style={styles.row}>
      {steps.map((s, i) => (
        <View key={s} style={styles.step}>
          <View style={[styles.bubble, i <= activeIndex && styles.bubbleOn]}>
            <Text style={[styles.num, i <= activeIndex && styles.numOn]}>{i + 1}</Text>
          </View>
          <Text style={styles.label}>{s}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
  step: { alignItems: "center", gap: 4, maxWidth: 80 },
  bubble: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: theme.color.border.muted,
    alignItems: "center",
    justifyContent: "center",
  },
  bubbleOn: { backgroundColor: theme.color.primary.main, borderColor: theme.color.primary.main },
  num: { fontSize: 14, fontWeight: "600", color: theme.color.foreground.secondary },
  numOn: { color: theme.color.primary.contrast },
  label: { fontSize: 11, color: theme.color.foreground.secondary, textAlign: "center" },
});
`;
}

function tSpinner() {
  return `import React from "react";
import { ActivityIndicator } from "react-native";
import theme from "../theme";

export interface SpinnerProps {
  size?: "small" | "large";
}

export function Spinner({ size = "large" }: SpinnerProps) {
  return <ActivityIndicator color={theme.color.primary.main} size={size} accessibilityLabel="Loading" />;
}
`;
}

function tSpacer() {
  return `import React from "react";
import { View } from "react-native";

export interface SpacerProps {
  width?: number;
  height?: number;
  flex?: number;
}

export function Spacer({ width, height, flex }: SpacerProps) {
  return <View style={{ width, height, flex }} />;
}
`;
}

function tSwitch() {
  return `import React from "react";
import { Switch as RNSwitch, Platform } from "react-native";
import theme from "../theme";

export interface SwitchProps {
  value: boolean;
  onValueChange: (v: boolean) => void;
}

export function Switch({ value, onValueChange }: SwitchProps) {
  return (
    <RNSwitch
      value={value}
      onValueChange={onValueChange}
      trackColor={{ false: theme.color.neutral["300"], true: theme.color.primary["300"] }}
      thumbColor={value ? theme.color.primary.main : theme.color.neutral["100"]}
      ios_backgroundColor={theme.color.neutral["300"]}
    />
  );
}
`;
}

function tTable() {
  return `import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

export interface TableProps {
  headers: string[];
  rows: string[][];
}

export function Table({ headers, rows }: TableProps) {
  return (
    <View style={styles.table}>
      <View style={[styles.row, styles.head]}>
        {headers.map((h) => (
          <Text key={h} style={[styles.cell, styles.headText]}>
            {h}
          </Text>
        ))}
      </View>
      {rows.map((r, ri) => (
        <View key={ri} style={styles.row}>
          {r.map((c, ci) => (
            <Text key={ci} style={styles.cell}>
              {c}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  table: { borderWidth: StyleSheet.hairlineWidth, borderColor: theme.color.border.muted, borderRadius: 8, overflow: "hidden" },
  row: { flexDirection: "row", borderBottomWidth: StyleSheet.hairlineWidth, borderColor: theme.color.border.muted },
  head: { backgroundColor: theme.color.neutral["100"] },
  cell: { flex: 1, padding: 8, fontSize: 14, color: theme.color.foreground.default },
  headText: { fontWeight: "700" },
});
`;
}

function tTabs() {
  return `import React from "react";
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
`;
}

function tResursText() {
  return `import React from "react";
import { Text, StyleSheet, type TextProps } from "react-native";
import theme from "../theme";

export type TextVariant = keyof typeof theme.typeStyles;

export interface ResursTextProps extends TextProps {
  variant?: TextVariant;
  children: React.ReactNode;
}

export function ResursText({ variant = "bodyMedium", style, children, ...rest }: ResursTextProps) {
  const t = theme.typeStyles[variant];
  return (
    <Text
      style={[
        {
          fontSize: parseFloat(String(t.fontSize).replace("rem", "")) * 16,
          fontWeight: t.fontWeight as "400" | "500" | "600" | "700",
          lineHeight: parseFloat(String(t.lineHeight).replace("px", "")) || 22,
          letterSpacing: t.letterSpacing === "-0.01em" ? -0.15 : 0,
          color: theme.color.foreground.default,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
}
`;
}

function tTextField() {
  return `import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import theme from "../theme";

export interface TextFieldProps {
  label?: string;
  value: string;
  onChangeText: (t: string) => void;
  placeholder?: string;
  error?: string;
}

export function TextField({ label, value, onChangeText, placeholder, error }: TextFieldProps) {
  return (
    <View style={styles.wrap}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        style={[styles.input, error ? styles.inputErr : null]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.color.foreground.muted}
      />
      {error ? <Text style={styles.err}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 4, minWidth: 280 },
  label: { fontSize: 12, fontWeight: "600", color: theme.color.foreground.secondary },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: theme.color.foreground.default,
    backgroundColor: theme.color.background.paper,
  },
  inputErr: { borderColor: theme.color.semantic.error.main },
  err: { fontSize: 12, color: theme.color.semantic.error.main },
});
`;
}

function tPhoneCountry() {
  return `import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import theme from "../theme";

export interface PhoneCountryFieldProps {
  countryCode: string;
  number: string;
  onChangeNumber: (n: string) => void;
}

export function PhoneCountryField({ countryCode, number, onChangeNumber }: PhoneCountryFieldProps) {
  return (
    <View style={styles.row}>
      <View style={styles.code}>
        <Text style={styles.codeText}>{countryCode}</Text>
      </View>
      <TextInput
        style={styles.input}
        value={number}
        onChangeText={onChangeNumber}
        keyboardType="phone-pad"
        placeholder="Phone number"
        placeholderTextColor={theme.color.foreground.muted}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 8, alignItems: "center", minWidth: 280 },
  code: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    backgroundColor: theme.color.background.paper,
  },
  codeText: { fontSize: 16, fontWeight: "600", color: theme.color.foreground.default },
  input: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: theme.color.foreground.default,
    backgroundColor: theme.color.background.paper,
  },
});
`;
}

function tTimeline() {
  return `import React from "react";
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
`;
}

function tToggleButton() {
  return `import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme";

export interface ToggleButtonProps {
  label: string;
  selected: boolean;
  onToggle: () => void;
}

export function ToggleButton({ label, selected, onToggle }: ToggleButtonProps) {
  return (
    <Pressable style={[styles.btn, selected && styles.on]} onPress={onToggle} accessibilityRole="button" accessibilityState={{ selected }}>
      <Text style={[styles.txt, selected && styles.txtOn]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
  },
  on: { backgroundColor: theme.color.primary.background, borderColor: theme.color.primary.main },
  txt: { fontSize: 14, color: theme.color.foreground.default },
  txtOn: { fontWeight: "600", color: theme.color.primary.main },
});
`;
}

function tTopAppBar() {
  return `import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";
import { IconButton } from "./IconButton";

export interface TopAppBarProps {
  title: string;
  onBack?: () => void;
}

export function TopAppBar({ title, onBack }: TopAppBarProps) {
  return (
    <View style={styles.bar}>
      {onBack ? <IconButton name="arrow-back" onPress={onBack} accessibilityLabel="Back" /> : <View style={{ width: 40 }} />}
      <Text style={styles.title}>{title}</Text>
      <View style={{ width: 40 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: theme.color.background.paper,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
    minWidth: 320,
  },
  title: { fontSize: 18, fontWeight: "700", color: theme.color.foreground.default, flex: 1, textAlign: "center" },
});
`;
}

function tTopNavBar() {
  return `import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme";

export interface TopNavBarProps {
  items: string[];
  activeIndex: number;
  onChange: (i: number) => void;
}

export function TopNavBar({ items, activeIndex, onChange }: TopNavBarProps) {
  return (
    <View style={styles.row}>
      {items.map((t, i) => (
        <Pressable key={t} onPress={() => onChange(i)}>
          <Text style={[styles.item, i === activeIndex && styles.active]}>{t}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 16, paddingVertical: 8, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: theme.color.border.muted },
  item: { fontSize: 16, color: theme.color.foreground.secondary },
  active: { color: theme.color.primary.main, fontWeight: "700" },
});
`;
}

function tToolbar() {
  return `import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme";

export interface ToolbarProps {
  children?: React.ReactNode;
}

export function Toolbar({ children }: ToolbarProps) {
  return <View style={styles.bar}>{children}</View>;
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: theme.color.background.paper,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.color.border.muted,
  },
});
`;
}

function tToast() {
  return `import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

export interface ToastProps {
  message: string;
}

export function Toast({ message }: ToastProps) {
  return (
    <View style={styles.toast}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  toast: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: theme.color.secondary.dark,
    maxWidth: 360,
  },
  text: { color: theme.color.white["100"], fontSize: 14 },
});
`;
}

function tTooltip() {
  return `import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

export interface TooltipProps {
  text: string;
}

export function Tooltip({ text }: TooltipProps) {
  return (
    <View style={styles.bubble} accessibilityLabel={text}>
      <Text style={styles.t}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: theme.color.secondary.dark,
    maxWidth: 240,
  },
  t: { fontSize: 12, color: theme.color.white["100"] },
});
`;
}

function tTreeView() {
  return `import React from "react";
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
`;
}

const generators = {
  Autocomplete: tInput,
  Accordion: tAccordion,
  Avatar: tAvatar,
  Backdrop: tBackdrop,
  Badge: tBadge,
  BottomNavigation: tBottomNav,
  Breadcrumbs: tBreadcrumbs,
  BillActivityListItem: tBillRow,
  StickyActionBar: tStickyBar,
  ButtonGroup: tButtonGroup,
  Card: () => tSurface("Card", 12),
  CardList: tCardList,
  Checkbox: tCheckbox,
  Chip: tChip,
  CreditCard: tCreditCard,
  CreditWarning: tCreditWarning,
  DateTime: tDateTime,
  Dialog: tDialog,
  Divider: tDivider,
  DotsIndicator: tDots,
  FilteredTabs: tFilteredTabs,
  FloatingActionButton: tFab,
  GraphicElements: tGraphic,
  Icon: tIcon,
  IconButton: tIconButton,
  Icons: tIcons,
  InfoBox: tInfoBox,
  InputElements: tInputElements,
  Layout: tLayout,
  Link: tLink,
  List: tList,
  ListItem: tListItem,
  Logo: tLogo,
  Menu: tMenu,
  Modal: tModal,
  Multiline: tMultiline,
  Pagination: tPagination,
  Paper: () => tSurface("Paper", 8),
  PaymentStatusView: tPaymentStatus,
  PaymentOptionSelectField: tPaymentOption,
  Progress: tProgress,
  Radio: tRadio,
  Rating: tRating,
  SelectField: tSelectField,
  SearchBar: tInput,
  SelectButtonField: tSelectButtonField,
  SelectListField: tSelectListField,
  SelectPaymentOptionField: tSelectPayment,
  Skeleton: tSkeleton,
  Sidebar: tSidebar,
  Snackbar: tSnackbar,
  Slider: tSlider,
  Stepper: tStepper,
  Spinner: tSpinner,
  Spacer: tSpacer,
  Switch: tSwitch,
  Table: tTable,
  Tabs: tTabs,
  ResursText: tResursText,
  TextField: tTextField,
  PhoneCountryField: tPhoneCountry,
  Timeline: tTimeline,
  ToggleButton: tToggleButton,
  TopAppBar: tTopAppBar,
  TopNavBar: tTopNavBar,
  Toolbar: tToolbar,
  Toast: tToast,
  Tooltip: tTooltip,
  TreeView: tTreeView,
};

function storyArgs(name) {
  const s = storyTitle(name);
  const figma = FIGMA[name];
  const defaults = {
    Autocomplete: { value: "", onChangeText: () => {}, placeholder: "Search" },
    SearchBar: { value: "", onChangeText: () => {}, placeholder: "Search" },
    Accordion: { title: "Section", children: undefined },
    Avatar: { label: "Ada Lovelace" },
    Backdrop: { visible: true },
    Badge: { label: "3" },
    BottomNavigation: {
      items: [
        { key: "h", label: "Home", icon: "home" },
        { key: "p", label: "Pay", icon: "payment" },
      ],
      activeKey: "h",
      onSelect: () => {},
    },
    Breadcrumbs: { items: ["Home", "Section", "Page"] },
    BillActivityListItem: { title: "Payment", subtitle: "Mar 12", amount: "120 kr" },
    StickyActionBar: { primaryTitle: "Continue", secondaryTitle: "Back" },
    ButtonGroup: { labels: ["One", "Two"] },
    Card: { children: undefined },
    CardList: { children: undefined },
    Checkbox: { checked: true, onToggle: () => {} },
    Chip: { label: "Filter" },
    CreditCard: { lastFour: "4242", holder: "A. Person" },
    CreditWarning: { message: "Credit limit" },
    DateTime: { value: "2025-03-20 14:00" },
    Dialog: { visible: true, onClose: () => {}, title: "Title" },
    Divider: {},
    DotsIndicator: { count: 4, activeIndex: 1 },
    FilteredTabs: { tabs: ["All", "Open"], activeIndex: 0, onChange: () => {} },
    FloatingActionButton: {},
    GraphicElements: { children: undefined },
    Icon: { name: "star" },
    IconButton: { name: "menu", accessibilityLabel: "Menu" },
    Icons: { names: ["home", "star", "settings"] },
    InfoBox: { message: "Information" },
    InputElements: { children: undefined },
    Layout: { children: undefined },
    Link: { children: "Link" },
    List: { children: undefined },
    ListItem: { title: "Item", subtitle: "Detail" },
    Logo: {},
    Menu: { items: ["One", "Two"] },
    Modal: { visible: true, onRequestClose: () => {}, title: "Sheet" },
    Multiline: { value: "Text", onChangeText: () => {} },
    Pagination: { page: 2, pageCount: 5, onChange: () => {} },
    Paper: { children: undefined },
    PaymentStatusView: { status: "paid", label: "Paid" },
    PaymentOptionSelectField: { options: ["Card", "Invoice"], valueIndex: 0, onChange: () => {} },
    Progress: { value: 0.4 },
    Radio: { selected: true, onToggle: () => {} },
    Rating: { value: 3 },
    SelectField: { label: "Country", value: "Sweden", onPress: () => {} },
    SelectButtonField: { options: ["A", "B"], valueIndex: 0, onChange: () => {} },
    SelectListField: { options: ["A", "B"], valueIndex: 0, onChange: () => {} },
    SelectPaymentOptionField: { options: ["Card", "Invoice"], valueIndex: 0, onChange: () => {} },
    Skeleton: {},
    Sidebar: { children: undefined },
    Snackbar: { message: "Saved" },
    Slider: { value: 40 },
    Stepper: { steps: ["One", "Two"], activeIndex: 0 },
    Spinner: {},
    Spacer: { height: 16 },
    Switch: { value: true, onValueChange: () => {} },
    Table: {
      headers: ["A", "B"],
      rows: [
        ["1", "2"],
        ["3", "4"],
      ],
    },
    Tabs: { tabs: ["Tab 1", "Tab 2"], activeIndex: 0, onChange: () => {} },
    ResursText: { children: "Body text", variant: "bodyMedium" },
    TextField: { label: "Name", value: "", onChangeText: () => {} },
    PhoneCountryField: { countryCode: "+46", number: "", onChangeNumber: () => {} },
    Timeline: { items: [{ title: "Start", time: "10:00" }, { title: "Done", time: "11:00" }] },
    ToggleButton: { label: "Toggle", selected: false, onToggle: () => {} },
    TopAppBar: { title: "Title", onBack: () => {} },
    TopNavBar: { items: ["A", "B"], activeIndex: 0, onChange: () => {} },
    Toolbar: { children: undefined },
    Toast: { message: "Done" },
    Tooltip: { text: "Hint" },
    TreeView: { nodes: [{ label: "Root", children: [{ label: "Child" }] }] },
  };
  const base = defaults[name] ?? {};
  return { name, storyName: s, figma, base };
}

function main() {
  fs.mkdirSync(componentsDir, { recursive: true });

  for (const name of Object.keys(FIGMA)) {
    const gen = generators[name];
    if (!gen) throw new Error(`Missing generator for ${name}`);
    writeComponent(name, gen(name));
    const { storyName, figma, base } = storyArgs(name);
    const customStory = `import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { ${name} } from "./${name}";

const meta: Meta<typeof ${name}> = {
  title: "Components/App/${storyName}",
  component: ${name},
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: \`Resurs UI 2.0 — [Figma](${figmaUrl(figma)})\`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ${name}>;

export const Default: Story = {
  args: ${JSON.stringify(base)} as Partial<React.ComponentProps<typeof ${name}>>,
};
`;
    fs.writeFileSync(path.join(componentsDir, `${name}.stories.tsx`), customStory);
  }

  const exports = ["Button", "Alert", "AlertDialog", ...Object.keys(FIGMA)];
  const unique = [...new Set(exports)];
  const indexLines = unique.sort().map((n) => `export { ${n} } from "./${n}";`);
  fs.writeFileSync(path.join(componentsDir, "index.ts"), indexLines.join("\n") + "\n");

  console.log("Wrote", Object.keys(FIGMA).length, "components + stories, components/index.ts");
}

main();
