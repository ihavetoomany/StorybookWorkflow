import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { SelectPaymentOptionField } from "./SelectPaymentOptionField";

const meta: Meta<typeof SelectPaymentOptionField> = {
  title: "Components/App/SelectPaymentOptionField",
  component: SelectPaymentOptionField,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=6263-102)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SelectPaymentOptionField>;

export const Default: Story = {
  args: {"options":["Card","Invoice"],"valueIndex":0} as Partial<React.ComponentProps<typeof SelectPaymentOptionField>>,
};
