import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { data } from "../../data/prices";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { createPaymentSchema } from "../../schemas/create-payment.schema";
import React from "react";

export interface CreatePaymentFormData {
  name: string;
  cpf: string;
  creditCard: {
    cardNumber: string;
    cvv: string;
    expirationDate: string;
    numberInstallments: string;
  };
}

export function useController() {
  const { state } = useLocation();

  const priceItemId = state?.priceItemId;
  const [open, setOpen] = React.useState(false);

  const priceItem = useMemo(
    () => data.find((d) => d.number.toString() === priceItemId),
    [priceItemId]
  );

  const form = useForm<CreatePaymentFormData>({
    defaultValues: {
      name: "",
      cpf: "",
      creditCard: {
        expirationDate: "",
        cvv: "",
        cardNumber: "",
        numberInstallments: String(priceItemId),
      },
    },
    resolver: joiResolver(createPaymentSchema),
  });

  const handleValidSubmit = (data: CreatePaymentFormData) => {
    setOpen(true);
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    form.handleSubmit(
      (data) => handleValidSubmit(data),
      (inv) => console.log({ inv })
    )();
  };

  return { priceItem, submitForm, form, open };
}
