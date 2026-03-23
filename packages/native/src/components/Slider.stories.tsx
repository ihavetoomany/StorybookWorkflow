import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
  title: "Components/App/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=216-9506)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {"value":40} as Partial<React.ComponentProps<typeof Slider>>,
};
