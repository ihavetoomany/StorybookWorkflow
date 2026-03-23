import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Components/App/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=125-6073)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {} as Partial<React.ComponentProps<typeof Divider>>,
};
