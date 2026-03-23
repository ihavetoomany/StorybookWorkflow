import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/App/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=1321-100135)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {"visible":true,"title":"Sheet"} as Partial<React.ComponentProps<typeof Modal>>,
};
