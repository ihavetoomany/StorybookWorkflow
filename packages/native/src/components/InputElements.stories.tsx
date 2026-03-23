import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { InputElements } from "./InputElements";

const meta: Meta<typeof InputElements> = {
  title: "Components/App/Input Elements",
  component: InputElements,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=301-11923)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputElements>;

export const Default: Story = {
  args: {} as Partial<React.ComponentProps<typeof InputElements>>,
};
