import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { StickyActionBar } from "./StickyActionBar";

const meta: Meta<typeof StickyActionBar> = {
  title: "Components/App/Sticky Action Bar",
  component: StickyActionBar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=7217-2252)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StickyActionBar>;

export const Default: Story = {
  args: {"primaryTitle":"Continue","secondaryTitle":"Back"} as Partial<React.ComponentProps<typeof StickyActionBar>>,
};
