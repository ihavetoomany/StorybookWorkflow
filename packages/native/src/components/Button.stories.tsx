import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Button } from "./Button";
import { figmaPageNodeId, figmaPageUrl } from "../figma/ui20Pages";

const meta: Meta<typeof Button> = {
  title: "Components/App/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](${figmaPageUrl(figmaPageNodeId.Button)})`,
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "secondary"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { title: "Button", variant: "default" },
};

export const Outline: Story = {
  args: { title: "Outline", variant: "outline" },
};

export const Secondary: Story = {
  args: { title: "Secondary", variant: "secondary" },
};

export const Disabled: Story = {
  args: { title: "Disabled", variant: "default", disabled: true },
};

export const Variants: Story = {
  render: () => (
    <View style={{ gap: 12, padding: 16 }}>
      <Button title="Default" variant="default" />
      <Button title="Outline" variant="outline" />
      <Button title="Secondary" variant="secondary" />
    </View>
  ),
};
