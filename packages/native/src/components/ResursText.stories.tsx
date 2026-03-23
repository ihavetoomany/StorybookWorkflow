import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { ResursText } from "./ResursText";

const meta: Meta<typeof ResursText> = {
  title: "Components/App/Text",
  component: ResursText,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=6367-10697)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ResursText>;

export const Default: Story = {
  args: {"children":"Body text","variant":"bodyMedium"} as Partial<React.ComponentProps<typeof ResursText>>,
};
