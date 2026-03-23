import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Alert } from "./Alert";
import { figmaPageNodeId, figmaPageUrl } from "../figma/ui20Pages";

const meta: Meta<typeof Alert> = {
  title: "Components/App/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](${figmaPageUrl(figmaPageNodeId.Alert)})`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Error: Story = {
  args: { message: "Something went wrong.", severity: "error" },
};

export const Warning: Story = {
  args: { message: "Please review before continuing.", severity: "warning" },
};

export const Info: Story = {
  args: { message: "You can change this in settings.", severity: "info" },
};

export const Success: Story = {
  args: { message: "Your changes were saved.", severity: "success" },
};

export const AllSeverities: Story = {
  render: () => (
    <View style={{ gap: 16, padding: 16, width: 360 }}>
      <Alert message="Error message" severity="error" />
      <Alert message="Warning message" severity="warning" />
      <Alert message="Info message" severity="info" />
      <Alert message="Success message" severity="success" />
    </View>
  ),
};
