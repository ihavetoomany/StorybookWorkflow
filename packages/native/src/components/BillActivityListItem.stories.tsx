import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { BillActivityListItem } from "./BillActivityListItem";

const meta: Meta<typeof BillActivityListItem> = {
  title: "Components/App/Bill Activity List Item",
  component: BillActivityListItem,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=8314-13496)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BillActivityListItem>;

export const Default: Story = {
  args: {"title":"Payment","subtitle":"Mar 12","amount":"120 kr"} as Partial<React.ComponentProps<typeof BillActivityListItem>>,
};
