import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { OnlinebankShell } from "../../../../../packages/ui/src/views/onlinebank/OnlinebankShell";

const meta: Meta<typeof OnlinebankShell> = {
  title: "Interfaces/Onlinebank Web/Starter templates",
  component: OnlinebankShell,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Basic framework for the online bank (web): top navigation, main content area, optional right sidebar. Fully mocked for handoff and prototypes.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof OnlinebankShell>;

/** Placeholder content per section for the interactive Starter templates story */
const MainOnlyContent = ({
  activeNav,
}: {
  activeNav: "fakturor" | "konton" | "upptack" | "mitt-resurs";
}) => {
  const content: Record<string, React.ReactNode> = {
    fakturor: (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Fakturor</h1>
        <p className="text-muted-foreground">Översikt över dina fakturor. Här visas totalbelopp, förfallna och pågående.</p>
        <section className="space-y-2 rounded-lg border border-border bg-background p-4">
          <h2 className="text-lg font-semibold text-foreground">Förfaller i mars</h2>
          <p className="text-sm text-muted-foreground">[Lista med fakturor]</p>
        </section>
      </div>
    ),
    konton: (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Konton</h1>
        <p className="text-muted-foreground">Dina konton och saldon. Endast huvudinnehåll, ingen sidopanel.</p>
        <section className="rounded-lg border border-border bg-background p-4">
          <p className="text-sm text-muted-foreground">[Kontolista]</p>
        </section>
      </div>
    ),
    upptack: (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Upptäck</h1>
        <p className="text-muted-foreground">Utforska tjänster och erbjudanden.</p>
        <section className="rounded-lg border border-border bg-background p-4">
          <p className="text-sm text-muted-foreground">[Innehåll Upptäck]</p>
        </section>
      </div>
    ),
    "mitt-resurs": (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Mitt Resurs</h1>
        <p className="text-muted-foreground">Inställningar och din profil.</p>
        <section className="rounded-lg border border-border bg-background p-4">
          <p className="text-sm text-muted-foreground">[Profil och inställningar]</p>
        </section>
      </div>
    ),
  };
  return <>{content[activeNav]}</>;
};

export const Default: Story = {
  args: {
    userName: "Användare",
  },
  render: (args) => {
    const [activeNav, setActiveNav] = useState<"fakturor" | "konton" | "upptack" | "mitt-resurs">("konton");
    return (
      <OnlinebankShell
        {...args}
        activeNav={activeNav}
        onNavChange={setActiveNav}
      >
        <MainOnlyContent activeNav={activeNav} />
      </OnlinebankShell>
    );
  },
};
