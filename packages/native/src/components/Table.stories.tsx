import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Table } from "./Table";

const meta: Meta<typeof Table> = {
  title: "Components/App/Table",
  component: Table,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=697-54904)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {"headers":["A","B"],"rows":[["1","2"],["3","4"]]} as Partial<React.ComponentProps<typeof Table>>,
};
