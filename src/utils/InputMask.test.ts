import {
    cardMasker,
    expireDateMasker,
    cvvMasker,
    cpfMasker,
  } from './InputMask';
  
  describe('Card Masking Functions', () => {
    describe('cardMasker', () => {
      it('should mask the credit card number', () => {
        const creditCardNumber = '1234567890123456';
        const maskedNumber = cardMasker(creditCardNumber);
        expect(maskedNumber).toBe('1234 5678 9012 3456');
      });
  
      it('should handle invalid input and return an empty string', () => {
        const invalidCreditCardNumber = 'ABCD';
        const maskedNumber = cardMasker(invalidCreditCardNumber);
        expect(maskedNumber).toBe('');
      });
    });
  
    describe('expireDateMasker', () => {
      it('should mask the expiration date', () => {
        const expirationDate = '1225';
        const maskedDate = expireDateMasker(expirationDate);
        expect(maskedDate).toBe('12/25');
      });
  
      it('should handle invalid input and return an empty string', () => {
        const invalidExpirationDate = 'ABC';
        const maskedDate = expireDateMasker(invalidExpirationDate);
        expect(maskedDate).toBe('');
      });
    });
  
    describe('cvvMasker', () => {
      it('should mask the CVV number', () => {
        const cvv = '123';
        const maskedCvv = cvvMasker(cvv);
        expect(maskedCvv).toBe('123');
      });
  
      it('should handle invalid input and return an empty string', () => {
        const invalidCvv = 'XYZ';
        const maskedCvv = cvvMasker(invalidCvv);
        expect(maskedCvv).toBe('');
      });
    });
  
    describe('cpfMasker', () => {
      it('should mask the CPF number', () => {
        const cpf = '12345678900';
        const maskedCpf = cpfMasker(cpf);
        expect(maskedCpf).toBe('123.456.789-00');
      });
  
      it('should handle invalid input and return an empty string', () => {
        const invalidCpf = 'ABC';
        const maskedCpf = cpfMasker(invalidCpf);
        expect(maskedCpf).toBe('');
      });
    });
  });