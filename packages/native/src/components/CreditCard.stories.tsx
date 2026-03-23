import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { CreditCard } from "./CreditCard";

const meta: Meta<typeof CreditCard> = {
  title: "Components/App/Credit card",
  component: CreditCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=1775-95722)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CreditCard>;

export const Default: Story = {
  args: {"lastFour":"4242","holder":"A. Person"} as Partial<React.ComponentProps<typeof CreditCard>>,
};
