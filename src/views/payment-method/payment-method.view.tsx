import React from "react";
import { Header } from "../../ui/components/header";
import { Title } from "../../ui/layout/typografy/title";
import { RadioGroup } from "../../ui/layout/inputs/radio-group";
import { RadioPriceItem } from "../../ui/layout/inputs/radio-price-item";
import { Footer } from "../../ui/components/footer";
import { FlagLabelSvg } from "../../assets/icons/flag-label.svg";
import { FlagText } from "../../ui/components/flag-text";
import { PageLayout } from "../../ui/layout/page.layout";

export const PaymentMethodView: React.FC = () => {
  const data = [
    {
      number: 2,
      title: "R$ 15.300,00",
      subtitle: "Total: R$ 30.620,00",
    },
    {
      number: 3,
      title: "R$ 10.196,66",
      subtitle: "Total: R$ 30.620,00",
    },
    {
      number: 4,
      title: "R$ 7.725,00",
      subtitle: "Total: R$ 30.900,00",
      footer: (
        <FlagText
          text1=" -3% de juros:"
          text2="Melhor opção de parcelamento"
        ></FlagText>
      ),
    },
    {
      number: 5,
      title: "R$ 6.300,00",
      subtitle: "Total: R$ 31.500,00",
    },
    {
      number: 6,
      title: "R$ 5.283,33",
      subtitle: "Total: R$ 31.699,98",
    },
    {
      number: 7,
      title: "R$ 4.542,85",
      subtitle: "Total: R$ 31.800,00",
    },
  ];

  return (
    <PageLayout>
      <Header></Header>

      <Title className="self-center mb-8">João, como você quer pagar?</Title>

      <form>
        <RadioGroup label="Pix">
          <RadioPriceItem
            name="price"
            number={"1x"}
            title={"R$ 30.500,00"}
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
          ></RadioPriceItem>
        </RadioGroup>

        <RadioGroup label="Pix Parcelado">
          {data.map((i) => (
            <RadioPriceItem
              key={i.number}
              name="price"
              number={i.number + "x"}
              title={i.title}
              subtitle={i.subtitle}
              footer={i.footer}
            ></RadioPriceItem>
          ))}
        </RadioGroup>
      </form>

      <div className="flex-1"></div>

      <Footer></Footer>
    </PageLayout>
  );
};
