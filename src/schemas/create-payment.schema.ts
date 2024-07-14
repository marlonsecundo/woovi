import joi from "joi";
import { CreatePaymentFormData } from "../views/installment-credit/controller";

function isValidCPF(cpf: string) {
  // Remove any non-numeric characters
  cpf = cpf.replace(/\D/g, "");

  // Check if the CPF has 11 digits
  if (cpf.length !== 11) return false;

  // Check if all digits are the same
  if (/^(\d)\1*$/.test(cpf)) return false;

  const calculateDigit = (cpf: string, factor: number) => {
    let total = 0;
    for (let i = 0; i < cpf.length; i++) {
      total += parseInt(cpf[i]) * factor--;
    }
    const remainder = total % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  // Validate first check digit
  const firstDigit = calculateDigit(cpf.slice(0, 9), 10);
  if (firstDigit !== parseInt(cpf[9])) return false;

  // Validate second check digit
  const secondDigit = calculateDigit(cpf.slice(0, 10), 11);
  if (secondDigit !== parseInt(cpf[10])) return false;

  return true;
}

function isValidExpirationDate(value: string): boolean {
  const [month, year] = value.split("/");
  const currentYear = new Date().getFullYear() % 100; // Get last two digits of current year
  const parsedYear = parseInt(year, 10);
  const parsedMonth = parseInt(month, 10);

  // Validating against common credit card expiration date rules
  return parsedMonth >= 1 && parsedMonth <= 12 && parsedYear >= currentYear;
}

export const createPaymentSchema = joi.object<CreatePaymentFormData>({
  cpf: joi
    .string()
    .required()
    .custom((value, helpers) => {
      if (!isValidCPF(value)) {
        return helpers.message("Must be a valid CPF" as any);
      }
      return value;
    }),
  name: joi.string().required().min(5),
  creditCard: joi.object<CreatePaymentFormData["creditCard"]>({
    cvv: joi.string().required(),
    expirationDate: joi
      .string()
      .required()
      .pattern(/^\d{2}\/\d{2}$/)
      .required()
      .messages({
        "string.pattern.base": "Expiration date must be in the format dd/yy",
      })
      .custom((value, helpers) => {
        if (!isValidExpirationDate(value)) {
          return helpers.message(
            "Expiration date must be a valid date in dd/yy format" as any
          );
        }
        return value;
      }),
    numberInstallments: joi.string().required(),
    cardNumber: joi.string().required(),
  }),
});
