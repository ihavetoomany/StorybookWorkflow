import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Snackbar } from "./Snackbar";

const meta: Meta<typeof Snackbar> = {
  title: "Components/App/Snackbar",
  component: Snackbar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=171-8411)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Snackbar>;

export const Default: Story = {
  args: {"message":"Saved"} as Partial<React.ComponentProps<typeof Snackbar>>,
};
