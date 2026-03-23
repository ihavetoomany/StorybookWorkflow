import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Components/App/Icon Button",
  component: IconButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=171-14128)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {"name":"menu","accessibilityLabel":"Menu"} as Partial<React.ComponentProps<typeof IconButton>>,
};
