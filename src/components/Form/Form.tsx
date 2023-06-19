import React, { useState, useEffect } from 'react';

import * as S from './styles'

interface FormData {
  cardNumber: string;
  expireDate: string;
  cvv: string;
  name: string;
  cpf: string;
  cupom: string;
  installments: number;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    cardNumber: '',
    expireDate: '',
    cvv: '',
    name: '',
    cpf: '',
    cupom: '',
    installments: 1,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleinstallmentsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  useEffect(() => {
  }, []);

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Fieldset>
        <S.Label htmlFor="cardNumber">Número do cartão</S.Label>
        <S.Input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleInputChange}
        />
      </S.Fieldset>
      <S.Fieldset>
        <div>
          <S.Label htmlFor="expireDate">Validade</S.Label>
          <S.Input
            type="text"
            id="expireDate"
            name="expireDate"
            value={formData.expireDate}
            onChange={handleInputChange}
            />
        </div>
        <div>
          <S.Label htmlFor="cvv">CVV</S.Label>
          <S.Input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            />
        </div>      
      </S.Fieldset>
      <S.Fieldset>
        <S.Label htmlFor="name">Nome impresso no cartão</S.Label>
        <S.Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </S.Fieldset>
      <S.Fieldset>
        <S.Label htmlFor="cpf">CPF</S.Label>
        <S.Input
          type="text"
          id="cpf"
          name="cpf"
          value={formData.cpf}
          onChange={handleInputChange}
        />
      </S.Fieldset>
      <S.Fieldset>
        <S.Label htmlFor="cupom">Cupom</S.Label>
        <S.Input
          type="text"
          id="cupom"
          name="cupom"
          value={formData.cupom}
          onChange={handleInputChange}
        />
      </S.Fieldset>
      <S.Fieldset>
        <S.Label htmlFor="installments">Número de parcelas</S.Label>
        <S.Select
          id="installments"
          name="installments"
          value={formData.installments}
          onChange={handleinstallmentsChange}
        >
          <option value="">installments an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </S.Select>
      </S.Fieldset>
      <button type="submit">Submit</button>
    </S.Form>
  );
};

export default Form;