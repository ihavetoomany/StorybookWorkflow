import React from "react";
import { PaymentOptionSelectField } from "./PaymentOptionSelectField";

export type SelectPaymentOptionFieldProps = import("./PaymentOptionSelectField").PaymentOptionSelectFieldProps;

export function SelectPaymentOptionField(props: SelectPaymentOptionFieldProps) {
  return <PaymentOptionSelectField {...props} />;
}
