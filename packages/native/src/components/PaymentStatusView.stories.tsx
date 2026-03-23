import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { PaymentStatusView } from "./PaymentStatusView";

const meta: Meta<typeof PaymentStatusView> = {
  title: "Components/App/PaymentStatusView",
  component: PaymentStatusView,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=4194-294)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PaymentStatusView>;

export const Default: Story = {
  args: {"status":"paid","label":"Paid"} as Partial<React.ComponentProps<typeof PaymentStatusView>>,
};
