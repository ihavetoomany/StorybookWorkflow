import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { SelectButtonField } from "./SelectButtonField";

const meta: Meta<typeof SelectButtonField> = {
  title: "Components/App/SelectButtonField",
  component: SelectButtonField,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=1556-50756)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SelectButtonField>;

export const Default: Story = {
  args: {"options":["A","B"],"valueIndex":0} as Partial<React.ComponentProps<typeof SelectButtonField>>,
};
