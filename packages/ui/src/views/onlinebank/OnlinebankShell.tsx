import React from "react";
import { cn } from "../../lib/utils";

export interface OnlinebankShellProps {
  className?: string;
  /** Active nav item key */
  activeNav?: "fakturor" | "konton" | "upptack" | "mitt-resurs";
  /** Called when user clicks a nav item (for interactive prototypes) */
  onNavChange?: (key: "fakturor" | "konton" | "upptack" | "mitt-resurs") => void;
  /** User display name in header */
  userName?: string;
  children?: React.ReactNode;
  /** Optional sidebar content (right column) */
  sidebar?: React.ReactNode;
}

const NAV_ITEMS = [
  { key: "fakturor", label: "Fakturor" },
  { key: "konton", label: "Konton" },
  { key: "upptack", label: "Upptäck" },
  { key: "mitt-resurs", label: "Mitt Resurs" },
] as const;

export function OnlinebankShell({
  className,
  activeNav = "fakturor",
  onNavChange,
  userName = "Användare",
  children,
  sidebar,
}: OnlinebankShellProps) {
  return (
    <div className={cn("min-h-screen bg-background flex flex-col", className)}>
      {/* Top navigation */}
      <header className="w-full border-b border-border bg-background">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-10">
            <span className="text-xl font-bold text-foreground">Resurs</span>
            <nav className="flex items-center gap-1" aria-label="Huvudnavigation">
              {NAV_ITEMS.map(({ key, label }) => {
                const isActive = activeNav === key;
                const handleClick = (e: React.MouseEvent) => {
                  if (onNavChange) {
                    e.preventDefault();
                    onNavChange(key);
                  }
                };
                return (
                  <a
                    key={key}
                    href="#"
                    onClick={handleClick}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-foreground text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </a>
                );
              })}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-foreground">{userName}</span>
            <a href="#" className="text-sm text-foreground hover:underline inline-flex items-center gap-1">
              Logga ut
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main content + sidebar */}
      <div className="mx-auto flex w-full max-w-7xl flex-1 gap-8 px-4 py-6">
        <main className="min-w-0 flex-1">{children}</main>
        {sidebar && (
          <aside className="hidden w-80 shrink-0 flex-col gap-4 lg:flex">
            {sidebar}
          </aside>
        )}
      </div>
    </div>
  );
}
