import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { SelectField } from "./SelectField";

const meta: Meta<typeof SelectField> = {
  title: "Components/App/Select Field",
  component: SelectField,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=302-13604)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SelectField>;

export const Default: Story = {
  args: {"label":"Country","value":"Sweden"} as Partial<React.ComponentProps<typeof SelectField>>,
};
