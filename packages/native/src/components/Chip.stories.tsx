import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Chip } from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Components/App/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=55-15217)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {"label":"Filter"} as Partial<React.ComponentProps<typeof Chip>>,
};
