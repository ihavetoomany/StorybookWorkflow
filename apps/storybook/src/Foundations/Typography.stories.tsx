import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Foundations/Typography",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Resurs UI 2.0 type styles (Inter). Synced from Figma typography frame node 6260:3001.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const typeStyles = [
  "headlineXLarge",
  "headlineLarge",
  "headlineMedium",
  "headlineSmall",
  "headlineXSmall",
  "labelLarge",
  "labelMedium",
  "labelSmall",
  "labelXSmall",
  "bodyLarge",
  "bodyMedium",
  "bodySmall",
  "bodyXSmall",
] as const;

export const TypeStyles: Story = {
  render: () => (
    <div className="space-y-8" style={{ fontFamily: "var(--resurs-font-family-sans)" }}>
      <h2 className="text-lg font-semibold" style={{ color: "var(--resurs-color-foreground-secondary)" }}>
        Type styles (Resurs UI 2.0)
      </h2>
      <div className="flex flex-col gap-6">
        {typeStyles.map((style) => {
          const prefix = "--resurs-type-styles-" + style.replace(/([A-Z])/g, "-$1").toLowerCase();
          return (
            <div key={style} className="border-b border-neutral-200 pb-4">
              <p className="mb-1 text-sm" style={{ color: "var(--resurs-color-foreground-secondary)" }}>
                {style}
              </p>
              <p
                style={{
                  fontSize: `var(${prefix}-font-size)`,
                  fontWeight: `var(${prefix}-font-weight)`,
                  lineHeight: `var(${prefix}-line-height)`,
                  letterSpacing: `var(${prefix}-letter-spacing)`,
                  color: "var(--resurs-color-foreground-default)",
                }}
              >
                The quick brown fox jumps over the lazy dog. 0123456789
              </p>
            </div>
          );
        })}
      </div>
    </div>
  ),
};

export const FontFamily: Story = {
  render: () => (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold" style={{ color: "var(--resurs-color-foreground-default)" }}>
        Web font
      </h2>
      <p style={{ fontFamily: "var(--resurs-font-family-sans)", fontSize: "var(--resurs-font-size-body-medium)" }}>
        Inter — used for all UI text in Resurs UI 2.0.
      </p>
      <p className="text-sm" style={{ color: "var(--resurs-color-foreground-secondary)" }}>
        CSS: <code>var(--resurs-font-family-sans)</code> / <code>var(--resurs-font-family-web-font)</code>
      </p>
    </div>
  ),
};
