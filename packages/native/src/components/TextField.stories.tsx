import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "Components/App/Text Field",
  component: TextField,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=353-19696)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {"label":"Name","value":""} as Partial<React.ComponentProps<typeof TextField>>,
};
