import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/App/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=513-36867)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {"page":2,"pageCount":5} as Partial<React.ComponentProps<typeof Pagination>>,
};
