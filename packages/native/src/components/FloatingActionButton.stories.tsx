import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { FloatingActionButton } from "./FloatingActionButton";

const meta: Meta<typeof FloatingActionButton> = {
  title: "Components/App/Floating Action Button",
  component: FloatingActionButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=504-36349)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FloatingActionButton>;

export const Default: Story = {
  args: {} as Partial<React.ComponentProps<typeof FloatingActionButton>>,
};
