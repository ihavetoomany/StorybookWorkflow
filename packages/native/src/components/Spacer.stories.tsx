import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Spacer } from "./Spacer";

const meta: Meta<typeof Spacer> = {
  title: "Components/App/Spacer",
  component: Spacer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=569-53957)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spacer>;

export const Default: Story = {
  args: {"height":16} as Partial<React.ComponentProps<typeof Spacer>>,
};
