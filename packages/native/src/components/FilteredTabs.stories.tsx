import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { FilteredTabs } from "./FilteredTabs";

const meta: Meta<typeof FilteredTabs> = {
  title: "Components/App/FilteredTabs",
  component: FilteredTabs,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=2703-82659)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FilteredTabs>;

export const Default: Story = {
  args: {"tabs":["All","Open"],"activeIndex":0} as Partial<React.ComponentProps<typeof FilteredTabs>>,
};
