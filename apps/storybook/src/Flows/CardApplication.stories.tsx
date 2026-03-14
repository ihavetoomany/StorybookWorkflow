import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../../../packages/ui/src/components/ui/card";
import { Button } from "../../../../packages/ui/src/components/ui/button";
import { cn } from "../../../../packages/ui/src/lib/utils";

const meta: Meta = {
  title: "Flows/Card Application",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Sample multi-step card application flow: personal details → card selection → review. Fully mocked for handoff and prototypes.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const STEPS = [
  { id: 1, name: "Personal details" },
  { id: 2, name: "Card selection" },
  { id: 3, name: "Review" },
] as const;

function CardApplicationFlow() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    personalNumber: "",
    cardType: "credit" as "credit" | "debit",
  });

  return (
    <div className="w-full max-w-lg space-y-6">
      <div className="flex gap-2">
        {STEPS.map((s) => (
          <div
            key={s.id}
            className={cn(
              "flex-1 rounded py-2 text-center text-sm font-medium",
              step === s.id
                ? "bg-primary text-primary-foreground"
                : step > s.id
                  ? "bg-primary/80 text-primary-foreground"
                  : "bg-muted text-muted-foreground"
            )}
          >
            {s.id}. {s.name}
          </div>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{STEPS[step - 1].name}</CardTitle>
          <CardDescription>
            Step {step} of {STEPS.length} in the card application
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {step === 1 && (
            <>
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Personal number</label>
                <input
                  type="text"
                  placeholder="YYYYMMDD-XXXX"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={form.personalNumber}
                  onChange={(e) => setForm((f) => ({ ...f, personalNumber: e.target.value }))}
                />
              </div>
            </>
          )}
          {step === 2 && (
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Choose your card type</p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, cardType: "credit" }))}
                  className={cn(
                    "flex-1 rounded-lg border p-4 text-left text-sm font-medium transition-colors",
                    form.cardType === "credit"
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border bg-muted/50 text-muted-foreground hover:bg-muted"
                  )}
                >
                  Credit card
                </button>
                <button
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, cardType: "debit" }))}
                  className={cn(
                    "flex-1 rounded-lg border p-4 text-left text-sm font-medium transition-colors",
                    form.cardType === "debit"
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border bg-muted/50 text-muted-foreground hover:bg-muted"
                  )}
                >
                  Debit card
                </button>
              </div>
            </div>
          )}
          {step === 3 && (
            <dl className="space-y-2 text-sm">
              <div>
                <dt className="text-muted-foreground">Name</dt>
                <dd className="font-medium">{form.name || "—"}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Personal number</dt>
                <dd className="font-medium">{form.personalNumber || "—"}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Card type</dt>
                <dd className="font-medium capitalize">{form.cardType}</dd>
              </div>
            </dl>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => setStep((s) => Math.max(1, s - 1))} disabled={step === 1}>
            Back
          </Button>
          {step < STEPS.length ? (
            <Button onClick={() => setStep((s) => s + 1)}>Next</Button>
          ) : (
            <Button>Submit application</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}

export const Default: Story = {
  render: () => <CardApplicationFlow />,
};
