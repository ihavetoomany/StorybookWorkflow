import React from "react";
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
