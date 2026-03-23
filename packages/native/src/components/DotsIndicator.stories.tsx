import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { DotsIndicator } from "./DotsIndicator";

const meta: Meta<typeof DotsIndicator> = {
  title: "Components/App/Dots Indicator",
  component: DotsIndicator,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=1590-3688)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DotsIndicator>;

export const Default: Story = {
  args: {"count":4,"activeIndex":1} as Partial<React.ComponentProps<typeof DotsIndicator>>,
};
