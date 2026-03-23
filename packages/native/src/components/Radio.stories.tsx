import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Components/App/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=336-22774)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {"selected":true} as Partial<React.ComponentProps<typeof Radio>>,
};
