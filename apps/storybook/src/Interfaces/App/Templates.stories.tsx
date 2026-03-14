import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AppShell, type AppTab } from "@resurs-handoff/native";

const meta: Meta<typeof AppShell> = {
  title: "Interfaces/App/Starter templates",
  component: AppShell,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Mobile app shell with bottom tab bar: Fakturor, Konton, Upptäck, Mitt Resurs. React Native for Web; same components as the native app.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof AppShell>;

const labels: Record<AppTab, string> = {
  fakturor: "Fakturor",
  konton: "Konton",
  upptack: "Upptäck",
  "mitt-resurs": "Mitt Resurs",
};

/** Placeholder content (DOM) so the story file doesn't import react-native directly */
function PlaceholderContent({ activeTab }: { activeTab: AppTab }) {
  return (
    <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", padding: 24 }}>
      <span style={{ fontSize: 18, color: "#71717a" }}>{labels[activeTab]} – innehåll kommer här</span>
    </div>
  );
}

export const Default: Story = {
  args: {},
  render: function DefaultRender() {
    const [activeTab, setActiveTab] = useState<AppTab>("konton");
    return (
      <div style={{ height: "100vh", minHeight: 500, display: "flex" }}>
        <AppShell activeTab={activeTab} onTabChange={setActiveTab}>
          <PlaceholderContent activeTab={activeTab} />
        </AppShell>
      </div>
    );
  },
};
