import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Toast } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/App/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=6575-1104)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {"message":"Done"} as Partial<React.ComponentProps<typeof Toast>>,
};
