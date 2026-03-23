import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Logo } from "./Logo";

const meta: Meta<typeof Logo> = {
  title: "Components/App/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=409-85319)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {} as Partial<React.ComponentProps<typeof Logo>>,
};
