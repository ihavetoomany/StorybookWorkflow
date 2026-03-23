import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Multiline } from "./Multiline";

const meta: Meta<typeof Multiline> = {
  title: "Components/App/Multiline",
  component: Multiline,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=557-41252)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Multiline>;

export const Default: Story = {
  args: {"value":"Text"} as Partial<React.ComponentProps<typeof Multiline>>,
};
