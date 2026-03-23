import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { PhoneCountryField } from "./PhoneCountryField";

const meta: Meta<typeof PhoneCountryField> = {
  title: "Components/App/PhoneCountryField",
  component: PhoneCountryField,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=6309-13848)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PhoneCountryField>;

export const Default: Story = {
  args: {"countryCode":"+46","number":""} as Partial<React.ComponentProps<typeof PhoneCountryField>>,
};
