import { applyDiscount } from './ApplyDiscount';

describe('applyDiscount', () => {
  it('should calculate the discounted price and format it correctly', () => {
    const amount = 1000;
    const discountPercentage = 10;

    const formattedDiscountedPrice = `R$\xa0900,00`;

    const result = applyDiscount(amount, discountPercentage);

    expect(result).toBe(formattedDiscountedPrice);
  });

  it('should handle zero amount and return formatted discounted price as 0', () => {
    const amount = 0;
    const discountPercentage = 10;

    const formattedDiscountedPrice = `R$\xa00,00`;

    const result = applyDiscount(amount, discountPercentage);

    expect(result).toBe(formattedDiscountedPrice);
  });
});