import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "react-native";
import { Accordion } from "./Accordion";
import theme from "../theme";

const meta: Meta<typeof Accordion> = {
  title: "Components/App/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Resurs UI 2.0 — [Figma](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=869-86254)`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const sampleBody = (
  <Text style={{ fontSize: 14, lineHeight: 20, color: theme.color.foreground.secondary }}>
    Supporting text for this section. Align spacing and type with the Accordion page in Figma.
  </Text>
);

export const Default: Story = {
  render: (args) => <Accordion {...args}>{sampleBody}</Accordion>,
  args: {
    title: "Section title",
    defaultExpanded: false,
  },
};

export const Expanded: Story = {
  render: (args) => <Accordion {...args}>{sampleBody}</Accordion>,
  args: {
    title: "Open by default",
    defaultExpanded: true,
  },
};
