import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Overlay } from "./Overlay";
import { Button } from "../components/ui/button";

const meta: Meta<typeof Overlay> = {
  title: "Modules/Overlay",
  component: Overlay,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Simple overlay module: backdrop with centered content panel. Use for modals, confirmations, or focused content.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Overlay>;

export const Default: Story = {
  render: function DefaultOverlay() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open overlay</Button>
        <Overlay open={open} onClose={() => setOpen(false)}>
          <h2 className="text-lg font-semibold text-foreground mb-2">Overlay title</h2>
          <p className="text-sm text-muted-foreground mb-4">
            This is a simple overlay module. Click outside or close to dismiss.
          </p>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </Overlay>
      </>
    );
  },
};

export const Open: Story = {
  args: {
    open: true,
    onClose: () => {},
    children: (
      <>
        <h2 className="text-lg font-semibold text-foreground mb-2">Static example</h2>
        <p className="text-sm text-muted-foreground">Overlay content without toggle.</p>
      </>
    ),
  },
};
