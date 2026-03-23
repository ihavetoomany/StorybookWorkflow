import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Paper } from "./Paper";

const meta: Meta<typeof Paper> = {
  title: "Components/App/Paper",
  component: Paper,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=577-44632)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Paper>;

export const Default: Story = {
  args: {} as Partial<React.ComponentProps<typeof Paper>>,
};
