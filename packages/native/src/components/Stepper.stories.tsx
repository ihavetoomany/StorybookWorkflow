import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Stepper } from "./Stepper";

const meta: Meta<typeof Stepper> = {
  title: "Components/App/Stepper",
  component: Stepper,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=117-3421)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  args: {"steps":["One","Two"],"activeIndex":0} as Partial<React.ComponentProps<typeof Stepper>>,
};
