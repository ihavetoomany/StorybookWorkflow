import * as React from "react";
import { cn } from "../lib/utils";

export interface OverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  /** When true, the overlay is visible */
  open?: boolean;
  /** Called when the backdrop is clicked (e.g. to close) */
  onClose?: () => void;
  /** Content to render in the overlay panel */
  children?: React.ReactNode;
}

const Overlay = React.forwardRef<HTMLDivElement, OverlayProps>(
  ({ className, open = false, onClose, children, ...props }, ref) => {
    if (!open) return null;
    return (
      <div
        ref={ref}
        className={cn("fixed inset-0 z-50 flex items-center justify-center", className)}
        role="dialog"
        aria-modal="true"
        {...props}
      >
        <div
          className="absolute inset-0 bg-black/50 transition-opacity"
          onClick={onClose}
          onKeyDown={(e) => e.key === "Escape" && onClose?.()}
          aria-hidden
        />
        <div className="relative z-10 rounded-lg border border-border bg-background p-6 shadow-lg max-w-md w-full mx-4">
          {children}
        </div>
      </div>
    );
  }
);
Overlay.displayName = "Overlay";

export { Overlay };
