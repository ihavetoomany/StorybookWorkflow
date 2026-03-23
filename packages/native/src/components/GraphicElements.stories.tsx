import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { GraphicElements } from "./GraphicElements";

const meta: Meta<typeof GraphicElements> = {
  title: "Components/App/Graphic elements",
  component: GraphicElements,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=1798-664)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof GraphicElements>;

export const Default: Story = {
  args: {} as Partial<React.ComponentProps<typeof GraphicElements>>,
};
