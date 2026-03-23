import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Rating } from "./Rating";

const meta: Meta<typeof Rating> = {
  title: "Components/App/Rating",
  component: Rating,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=475-32799)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {"value":3} as Partial<React.ComponentProps<typeof Rating>>,
};
