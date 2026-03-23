import React from "react";
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
