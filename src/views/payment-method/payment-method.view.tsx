import React, { useState } from "react";
import { Header } from "../../ui/components/header";
import { Title } from "../../ui/layout/typografy/title";
import { RadioGroup } from "../../ui/layout/inputs/radio-group";
import { RadioPriceItem } from "../../ui/layout/inputs/radio-price-item";
import { Footer } from "../../ui/components/footer";
import { FlagText } from "../../ui/components/flag-text";
import { PageLayout } from "../../ui/layout/page.layout";
import { firstPrice, portionPrices } from "../../data/prices";
import { useController } from "./controller";
import { Button } from "../../ui/layout/inputs/button";

export const PaymentMethodView: React.FC = () => {
  const controller = useController();

  const { priceItemId, form } = controller;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    controller.submitForm();
  };

  return (
    <PageLayout>
      <Header></Header>

      <Title className="self-center mb-8">João, como você quer pagar?</Title>

      <form onSubmit={onSubmit} className="flex flex-col">
        <RadioGroup label="Pix">
          <RadioPriceItem
            name="price"
            number={firstPrice.number + "x"}
            title={firstPrice.value}
            subtitle={
              <p className="text-primary font-semibold">
                Ganhe <span className="font-extrabold">3%</span> de Cashback
              </p>
            }
            footer={
              <FlagText
                text1="🤑 R$ 300,00"
                text2=" de volta no seu Pix na hora"
              ></FlagText>
            }
            onValueChange={(checked) =>
              checked &&
              form.setValue("priceItemId", firstPrice.number.toString())
            }
          ></RadioPriceItem>
        </RadioGroup>

        <RadioGroup label="Pix Parcelado">
          {portionPrices.map((i) => (
            <RadioPriceItem
              key={i.number}
              name="price"
              number={i.number + "x"}
              title={i.value}
              subtitle={"Total: " + i.total}
              footer={i.footer}
              onValueChange={(checked) =>
                checked && form.setValue("priceItemId", i.number.toString())
              }
            ></RadioPriceItem>
          ))}
        </RadioGroup>

        <Button
          className="self-center mb-5"
          type="submit"
          disabled={priceItemId === null}
        >
          Confirmar
        </Button>
      </form>

      <div className="flex-1"></div>

      <Footer></Footer>
    </PageLayout>
  );
};
