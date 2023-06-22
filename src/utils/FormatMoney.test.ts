import { formatMoney } from './FormatMoney';

describe('formatMoney', () => {
  it('should format the amount in BRL currency', () => {
    const amount = 1234.56;
    const formattedAmount = formatMoney(amount);
    expect(formattedAmount).toBe('R$\xa01.234,56');
  });

  it('should handle negative amounts correctly', () => {
    const negativeAmount = -5678.9;
    const formattedNegativeAmount = formatMoney(negativeAmount);
    expect(formattedNegativeAmount).toBe('-R$\xa05.678,90');
  });

  it('should handle zero amount correctly', () => {
    const zeroAmount = 0;
    const formattedZeroAmount = formatMoney(zeroAmount);
    expect(formattedZeroAmount).toBe('R$\xa00,00');
  });
});