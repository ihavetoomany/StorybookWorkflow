import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Icons } from "./Icons";

const meta: Meta<typeof Icons> = {
  title: "Components/App/Icons",
  component: Icons,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=122-7839)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icons>;

export const Default: Story = {
  args: {"names":["home","star","settings"]} as Partial<React.ComponentProps<typeof Icons>>,
};
