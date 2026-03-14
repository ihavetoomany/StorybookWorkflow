import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Foundations/Colors",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Resurs color tokens. Align with Resurs UI 2.0 (Figma) and marketing Visual Guidelines.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const scale = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

const Swatch = ({
  varName,
  label,
  lightTextFrom = 500,
}: {
  varName: string;
  label: string;
  lightTextFrom?: number;
}) => (
  <div
    className="h-14 w-20 rounded border border-neutral-300 flex flex-col items-center justify-center text-xs"
    style={{
      backgroundColor: `var(${varName})`,
      color: Number(label) >= lightTextFrom ? "#fff" : "#171717",
    }}
  >
    {label}
  </div>
);

export const Primary: Story = {
  render: () => (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Primary (Resurs Green)</h2>
      <div className="flex flex-wrap gap-2">
        {scale.map((n) => (
          <Swatch key={n} varName={`--resurs-color-primary-${n}`} label={String(n)} lightTextFrom={600} />
        ))}
      </div>
    </div>
  ),
};

export const Neutral: Story = {
  render: () => (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Neutral (Gray)</h2>
      <div className="flex flex-wrap gap-2">
        {scale.map((n) => (
          <Swatch key={n} varName={`--resurs-color-neutral-${n}`} label={String(n)} lightTextFrom={500} />
        ))}
      </div>
    </div>
  ),
};

export const ResursGreen: Story = {
  render: () => (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Resurs Green (brand)</h2>
      <div className="flex flex-wrap gap-2">
        {scale.map((n) => (
          <Swatch key={n} varName={`--resurs-color-resurs-green-${n}`} label={String(n)} lightTextFrom={600} />
        ))}
      </div>
    </div>
  ),
};

export const ResursMint: Story = {
  render: () => (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Resurs Mint</h2>
      <div className="flex flex-wrap gap-2">
        {scale.map((n) => (
          <Swatch key={n} varName={`--resurs-color-resurs-mint-${n}`} label={String(n)} lightTextFrom={600} />
        ))}
      </div>
    </div>
  ),
};

export const ResursSand: Story = {
  render: () => (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Resurs Sand</h2>
      <div className="flex flex-wrap gap-2">
        {scale.map((n) => (
          <Swatch key={n} varName={`--resurs-color-resurs-sand-${n}`} label={String(n)} lightTextFrom={600} />
        ))}
      </div>
    </div>
  ),
};

export const ResursNight: Story = {
  render: () => (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Resurs Night</h2>
      <div className="flex flex-wrap gap-2">
        {scale.map((n) => (
          <Swatch key={n} varName={`--resurs-color-resurs-night-${n}`} label={String(n)} lightTextFrom={500} />
        ))}
      </div>
    </div>
  ),
};

export const AccentPalettes: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Accent (Red, Amber, Lime, Cyan)</h2>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {["red", "amber", "lime", "cyan"].map((palette) => (
          <div key={palette} className="space-y-2">
            <p className="text-sm font-medium capitalize">{palette}</p>
            <div className="flex flex-wrap gap-1">
              {scale.map((n) => (
                <Swatch
                  key={n}
                  varName={`--resurs-color-${palette}-${n}`}
                  label={String(n)}
                  lightTextFrom={600}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const BrandSpot: Story = {
  render: () => (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Brand spot (Resurs Greige, Yellow, Dusk)</h2>
      <div className="flex flex-wrap gap-4">
        <div className="space-y-2">
          <p className="text-sm font-medium">Resurs Greige 200</p>
          <div className="h-16 w-32 rounded border" style={{ backgroundColor: "var(--resurs-color-resurs-greige-200)" }} />
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">Resurs Yellow 200</p>
          <div className="h-16 w-32 rounded border border-neutral-300" style={{ backgroundColor: "var(--resurs-color-resurs-yellow-200)" }} />
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">Resurs Dusk 800</p>
          <div className="h-16 w-32 rounded border" style={{ backgroundColor: "var(--resurs-color-resurs-dusk-800)", color: "#fff" }}>
            Dusk 800
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Semantic: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Semantic (Error, Success, Warning, Info)</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {["error", "success", "warning", "info"].map((sem) => (
          <div key={sem} className="space-y-2">
            <p className="text-sm font-medium capitalize">{sem}</p>
            <div
              className="h-20 rounded p-2 text-sm text-white"
              style={{
                backgroundColor: `var(--resurs-color-semantic-${sem}-main)`,
              }}
            >
              Main
            </div>
            <div
              className="h-12 rounded p-2 text-xs"
              style={{
                backgroundColor: `var(--resurs-color-semantic-${sem}-background)`,
                color: "var(--resurs-color-foreground-default)",
              }}
            >
              Background
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
