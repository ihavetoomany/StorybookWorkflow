import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Components/App/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=95-3419)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {"name":"star"} as Partial<React.ComponentProps<typeof Icon>>,
};
