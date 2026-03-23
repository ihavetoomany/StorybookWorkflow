import React from "react";
import { Alert } from "./Alert";

export interface CreditWarningProps {
  message: string;
}

export function CreditWarning({ message }: CreditWarningProps) {
  return <Alert severity="warning" message={message} />;
}
