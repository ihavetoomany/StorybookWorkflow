import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Progress } from "./Progress";

const meta: Meta<typeof Progress> = {
  title: "Components/App/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=443-31438)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {"value":0.4} as Partial<React.ComponentProps<typeof Progress>>,
};
