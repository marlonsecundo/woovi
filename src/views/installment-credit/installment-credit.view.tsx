import React from "react";
import { PageLayout } from "../../ui/layout/page.layout";
import { Header } from "../../ui/components/header";
import { Title } from "../../ui/layout/typografy/title";
import { Footer } from "../../ui/components/footer";
import { Input } from "../../ui/layout/inputs/input";
import { Select } from "../../ui/layout/inputs/select";
import { Option } from "../../ui/layout/inputs/option";
import { Button } from "../../ui/layout/inputs/button";
import { Divider } from "../../ui/layout/divider";
import { Accordion } from "../../ui/layout/data-display/accordion";
import { PriceItemInfo } from "../../ui/components/price-item-info";
import { Navigate, useNavigate } from "react-router-dom";
import { useController } from "./controller";
import { Controller } from "react-hook-form";
import { formatCPF, formatCVV, formatDate } from "../../utils/formatter.utils";
import { data } from "../../data/prices";
import { Dialog, DialogFooter, DialogHeader } from "@material-tailwind/react";

export const InstallmentCreditView: React.FC = () => {
  const controller = useController();
  const navigate = useNavigate();

  const { priceItem, form } = controller;

  if (priceItem === undefined) return <Navigate to={"/"} replace></Navigate>;

  return (
    <PageLayout>
      <Header></Header>

      <Title className="text-center px-20 mb-5">
        João, pague o restante em 1x no cartão
      </Title>

      <form className="flex flex-col gap-3" onSubmit={controller.submitForm}>
        <Controller
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <Input
              type="text"
              onChange={(e) => field.onChange(e.target.value)}
              value={field.value}
              label="Nome completo"
              error={fieldState.error?.message}
            ></Input>
          )}
        ></Controller>

        <Controller
          control={form.control}
          name="cpf"
          render={({ field, fieldState }) => (
            <Input
              placeholder="000.000.000-00"
              type="text"
              onChange={(e) => field.onChange(formatCPF(e.target.value))}
              value={field.value}
              label="CPF"
              error={fieldState.error?.message}
            ></Input>
          )}
        ></Controller>

        <Controller
          control={form.control}
          name="creditCard.cardNumber"
          render={({ field, fieldState }) => (
            <Input
              type="text"
              onChange={(e) =>
                field.onChange(e.target.value.replace(/\D/g, ""))
              }
              value={field.value}
              label="Número do cartão"
              error={fieldState.error?.message}
            ></Input>
          )}
        ></Controller>

        <div className="flex gap-3 flex-col xxs:flex-row">
          <Controller
            control={form.control}
            name="creditCard.expirationDate"
            render={({ field, fieldState }) => (
              <Input
                placeholder="00/00"
                type="text"
                label="Vencimento"
                value={field.value}
                onChange={(e) => field.onChange(formatDate(e.target.value))}
                error={fieldState.error?.message}
              ></Input>
            )}
          ></Controller>

          <Controller
            control={form.control}
            name="creditCard.cvv"
            render={({ field, fieldState }) => (
              <Input
                type="text"
                label="CVV"
                value={field.value}
                onChange={(e) => field.onChange(formatCVV(e.target.value))}
                error={fieldState.error?.message}
              ></Input>
            )}
          ></Controller>
        </div>

        <Controller
          control={form.control}
          name="creditCard.numberInstallments"
          render={({ field, fieldState }) => (
            <Select
              label="Parcelas"
              onChange={(e) => field.onChange(e)}
              error={fieldState.error?.message}
              value={field.value}
            >
              {data.map((i) => (
                <Option key={i.number} value={i.number.toString()}>
                  {i.number}x de R$ {i.value}
                </Option>
              ))}
            </Select>
          )}
        ></Controller>

        <Button className="w-full" type="submit">
          Pagar
        </Button>
      </form>

      <div className="font-nunito text-base font-semibold self-center mt-5">
        <p className="text-base-300">Prazo de pagamento:</p>
        <p className="font-extrabold text-base-content">15/12/2021 - 08:17</p>
      </div>

      <PriceItemInfo priceItem={priceItem}></PriceItemInfo>

      <Divider className="mb-5 mt-3"></Divider>

      <div className="font-nunito text-base-content font-semibold flex justify-between items-center">
        <p className="text-sm">CET: 0,5%</p>
        <p className="text-lg">Total: R$ 30.600,00</p>
      </div>

      <Divider className="mb-1 mt-3"></Divider>

      <Accordion
        headerText="Como funciona?"
        bodyText="We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're
constantly trying to express ourselves and actualize our dreams."
      ></Accordion>

      <Divider className="mb-5 mt-1"></Divider>

      <div className="flex flex-col font-nunito text-sm font-semibold text-base-400 items-center mb-10">
        <p>Identificador:</p>
        <p className="font-extrabold text-base-content">
          2c1b951f356c4680b13ba1c9fc889c47
        </p>
      </div>
      <Footer></Footer>

      <Dialog open={controller.open} handler={() => {}}>
        <DialogHeader className="font-nunito">
          Pagamento realizado com sucesso!
        </DialogHeader>

        <DialogFooter>
          <Button onClick={() => navigate("/")}>
            <span>Confirmar</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </PageLayout>
  );
};
