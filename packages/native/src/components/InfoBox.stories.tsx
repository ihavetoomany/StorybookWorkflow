import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { InfoBox } from "./InfoBox";

const meta: Meta<typeof InfoBox> = {
  title: "Components/App/Info Box",
  component: InfoBox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=3401-8578)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InfoBox>;

export const Default: Story = {
  args: {"message":"Information"} as Partial<React.ComponentProps<typeof InfoBox>>,
};
