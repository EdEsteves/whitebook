import { formatMoney } from "./FormatMoney";

export const discountInstallments = (amount: number, discountPercentage: number, installments: number): string => {
    const discountAmount = amount * (discountPercentage / 100);
    const discountedPrice = amount - discountAmount;
    const installmentPrice = discountedPrice / installments;

    return formatMoney(installmentPrice);
}