import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { ButtonGroup } from "./ButtonGroup";

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/App/Button Group",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=642-48410)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  args: {"labels":["One","Two"]} as Partial<React.ComponentProps<typeof ButtonGroup>>,
};
