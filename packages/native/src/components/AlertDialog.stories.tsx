import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { AlertDialog } from "./AlertDialog";
import { Button } from "./Button";
import { figmaPageNodeId, figmaPageUrl } from "../figma/ui20Pages";

const meta: Meta<typeof AlertDialog> = {
  title: "Components/App/AlertDialog",
  component: AlertDialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](${figmaPageUrl(figmaPageNodeId.AlertDialog)})`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Info: Story = {
  args: {
    visible: true,
    title: "Heads up",
    description: "This action will update your preferences for this device.",
    state: "info",
    primaryLabel: "Continue",
    secondaryLabel: "Cancel",
  },
};

export const Interactive: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);
    return (
      <View style={{ gap: 12, padding: 16 }}>
        <Button title="Open dialog" onPress={() => setOpen(true)} />
        <AlertDialog
          visible={open}
          onRequestClose={() => setOpen(false)}
          title="Confirm"
          description="Are you sure you want to continue?"
          state="warning"
          primaryLabel="Yes"
          secondaryLabel="No"
        />
      </View>
    );
  },
};

export const SmallScreen: Story = {
  args: {
    visible: true,
    title: "Narrow layout",
    description: "Actions stack vertically on small screens.",
    state: "success",
    smallScreen: true,
    primaryLabel: "OK",
    secondaryLabel: "Back",
  },
};
