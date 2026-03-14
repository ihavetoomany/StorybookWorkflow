import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Atoms/Logo",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Resurs logo from Resurs UI 2.0. Source: [Figma – Resurs UI 2.0 (node 6997-14265)](https://www.figma.com/design/DFy3VmnixeA0hD2W78qPGS/Resurs-UI-2.0?node-id=6997-14265). Replace `public/brand/logo.svg` with the exported asset from Figma to use the official logo.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const logoUrl = "/brand/logo.svg";

export const Default: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="mb-2 text-sm font-medium text-muted-foreground">Logo (default)</h2>
        <img
          src={logoUrl}
          alt="Resurs logo"
          className="h-8 w-auto"
          style={{ maxWidth: 200 }}
        />
      </div>
    </div>
  ),
};

export const OnLight: Story = {
  render: () => (
    <div className="space-y-6 rounded-lg border border-border bg-background p-6">
      <h2 className="text-sm font-medium text-muted-foreground">On light background</h2>
      <img src={logoUrl} alt="Resurs logo" className="h-8 w-auto" style={{ maxWidth: 200 }} />
    </div>
  ),
};

export const OnDark: Story = {
  render: () => (
    <div className="space-y-6 rounded-lg bg-neutral-900 p-6">
      <h2 className="text-sm font-medium text-neutral-400">On dark background</h2>
      <img
        src={logoUrl}
        alt="Resurs logo"
        className="h-8 w-auto opacity-90"
        style={{ maxWidth: 200, filter: "brightness(0) invert(1)" }}
      />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-8">
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground">Height 24px</p>
        <img src={logoUrl} alt="Resurs logo" className="h-6 w-auto" />
      </div>
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground">Height 32px</p>
        <img src={logoUrl} alt="Resurs logo" className="h-8 w-auto" />
      </div>
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground">Height 40px</p>
        <img src={logoUrl} alt="Resurs logo" className="h-10 w-auto" />
      </div>
    </div>
  ),
};
