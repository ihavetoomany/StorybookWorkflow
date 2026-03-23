import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/App/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=90-3533)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {"text":"Hint"} as Partial<React.ComponentProps<typeof Tooltip>>,
};
