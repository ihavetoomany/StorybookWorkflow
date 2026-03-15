import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Experiments/Placeholder",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Use the Experiments section for work-in-progress or experimental stories.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <p style={{ color: "var(--resurs-color-foreground-secondary, #71717a)", fontSize: 14 }}>
      Add experiment stories here.
    </p>
  ),
};
