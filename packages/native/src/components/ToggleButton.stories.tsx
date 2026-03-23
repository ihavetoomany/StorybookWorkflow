import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { ToggleButton } from "./ToggleButton";

const meta: Meta<typeof ToggleButton> = {
  title: "Components/App/Toggle Button",
  component: ToggleButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=559-41201)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const Default: Story = {
  args: {"label":"Toggle","selected":false} as Partial<React.ComponentProps<typeof ToggleButton>>,
};
