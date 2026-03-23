import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { CreditWarning } from "./CreditWarning";

const meta: Meta<typeof CreditWarning> = {
  title: "Components/App/Credit warning",
  component: CreditWarning,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=7497-23845)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CreditWarning>;

export const Default: Story = {
  args: {"message":"Credit limit"} as Partial<React.ComponentProps<typeof CreditWarning>>,
};
