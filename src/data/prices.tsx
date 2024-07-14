import { FlagText } from "../ui/components/flag-text";

export interface PriceItem {
  number: number;
  value: string;
  total: string;
  onlyPix?: boolean;
  footer?: React.ReactNode;
}

export const data: PriceItem[] = [
  {
    number: 1,
    value: "R$ 30.500,00",
    total: "R$ 30.500,00",
    onlyPix: true,
  },
  {
    number: 2,
    value: "R$ 15.300,00",
    total: "R$ 30.620,00",
  },
  {
    number: 3,
    value: "R$ 10.196,66",
    total: "R$ 30.620,00",
  },
  {
    number: 4,
    value: "R$ 7.725,00",
    total: "R$ 30.900,00",
    footer: (
      <FlagText
        text1=" -3% de juros:"
        text2="Melhor opção de parcelamento"
      ></FlagText>
    ),
  },
  {
    number: 5,
    value: "R$ 6.300,00",
    total: "R$ 31.500,00",
  },
  {
    number: 6,
    value: "R$ 5.283,33",
    total: "R$ 31.699,98",
  },
  {
    number: 7,
    value: "R$ 4.542,85",
    total: "R$ 31.800,00",
  },
];

export const firstPrice = data[0];
export const portionPrices = data.slice(1);
