import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { DateTime } from "./DateTime";

const meta: Meta<typeof DateTime> = {
  title: "Components/App/Date / Time",
  component: DateTime,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=442-27697)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DateTime>;

export const Default: Story = {
  args: {"value":"2025-03-20 14:00"} as Partial<React.ComponentProps<typeof DateTime>>,
};
