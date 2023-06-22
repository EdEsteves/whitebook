import { discountInstallments } from './DiscountInstallments';

describe('discountInstallments', () => {
  it('should calculate the discounted installment price and format it correctly', () => {
    const amount = 1000;
    const discountPercentage = 10;
    const installments = 3;

    const formattedInstallmentPrice = `R$\xa0300,00`;

    const result = discountInstallments(amount, discountPercentage, installments);

    expect(result).toBe(formattedInstallmentPrice);
  });

  it('should handle zero amount and return formatted installment price as 0', () => {
    const amount = 0;
    const discountPercentage = 10;
    const installments = 3;
    
    const formattedInstallmentPrice = `R$\xa00,00`;

    const result = discountInstallments(amount, discountPercentage, installments);

    expect(result).toBe(formattedInstallmentPrice);
  });
});