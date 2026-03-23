import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Backdrop } from "./Backdrop";

const meta: Meta<typeof Backdrop> = {
  title: "Components/App/Backdrop",
  component: Backdrop,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=503-38172)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Backdrop>;

export const Default: Story = {
  args: {"visible":true} as Partial<React.ComponentProps<typeof Backdrop>>,
};
