import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components (App)/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "React Native Button (rendered via react-native-web in Storybook). Same component as in the App interface.",
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
  args: {
    title: "Button",
    variant: "default",
  },
};

export const Outline: Story = {
  args: {
    title: "Outline",
    variant: "outline",
  },
};

export const Secondary: Story = {
  args: {
    title: "Secondary",
    variant: "secondary",
  },
};

export const Disabled: Story = {
  args: {
    title: "Disabled",
    variant: "default",
    disabled: true,
  },
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
