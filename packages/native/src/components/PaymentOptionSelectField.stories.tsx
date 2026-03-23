import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { PaymentOptionSelectField } from "./PaymentOptionSelectField";

const meta: Meta<typeof PaymentOptionSelectField> = {
  title: "Components/App/PaymentOptionSelectField",
  component: PaymentOptionSelectField,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=7186-152)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PaymentOptionSelectField>;

export const Default: Story = {
  args: {"options":["Card","Invoice"],"valueIndex":0} as Partial<React.ComponentProps<typeof PaymentOptionSelectField>>,
};
