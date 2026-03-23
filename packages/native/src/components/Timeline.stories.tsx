import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Timeline } from "./Timeline";

const meta: Meta<typeof Timeline> = {
  title: "Components/App/Timeline",
  component: Timeline,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=792-82363)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  args: {"items":[{"title":"Start","time":"10:00"},{"title":"Done","time":"11:00"}]} as Partial<React.ComponentProps<typeof Timeline>>,
};
