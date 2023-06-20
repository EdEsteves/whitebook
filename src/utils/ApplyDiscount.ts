import { formatMoney } from "./FormatMoney";

export const applyDiscount = (amount: number, discountPercentage: number): string => {
    const discountAmount = amount * (discountPercentage / 100);
    const discountedPrice = amount - discountAmount;
  
    return formatMoney(discountedPrice);
  }