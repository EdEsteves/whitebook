import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";

import * as S from './styles'
import SelectedPlanContext from '../../contexts/SelectedPlanContext';

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
  const navigate = useNavigate();
  const { selectedPlanInfo } = useContext(SelectedPlanContext);

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
    navigate('/checkout/orderplaced')
  };

  useEffect(() => {
  }, []);

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Fieldset>
        <S.Input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleInputChange}
          placeholder='0000 0000 0000 0000'
          required={true}
        />
        <S.Label htmlFor="cardNumber">Número do cartão</S.Label>
      </S.Fieldset>
      <S.Fieldset className='double'>
        <div className='validate'>
          <S.Input
            type="text"
            id="expireDate"
            name="expireDate"
            value={formData.expireDate}
            onChange={handleInputChange}
            placeholder='MM/AA'
            required={true}
          />
          <S.Label htmlFor="expireDate">Validade</S.Label>
        </div>
        <div className='cvv'>
          <S.Input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            placeholder='000'
            required={true}
          />
          <S.Label htmlFor="cvv">CVV</S.Label>
        </div>      
      </S.Fieldset>
      <S.Fieldset>
        <S.Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder='Seu nome'
          required={true}
        />
        <S.Label htmlFor="name">Nome impresso no cartão</S.Label>
      </S.Fieldset>
      <S.Fieldset>
        <S.Input
          type="text"
          id="cpf"
          name="cpf"
          value={formData.cpf}
          onChange={handleInputChange}
          placeholder='000.000.000-00'
          required={true}
        />
        <S.Label htmlFor="cpf">CPF</S.Label>
      </S.Fieldset>
      <S.Fieldset>
        <S.Input
          type="text"
          id="cupom"
          name="cupom"
          value={formData.cupom}
          onChange={handleInputChange}
          placeholder='Insira aqui'
          required={true}
        />
        <S.Label htmlFor="cupom">Cupom</S.Label>
      </S.Fieldset>
      <S.Fieldset >
        <S.Label className='select' htmlFor="installments">Número de parcelas</S.Label>
        <S.Select
          id="installments"
          name="installments"
          value={formData.installments}
          onChange={handleinstallmentsChange}
          required={true}
        >
          <option value="">Selecionar</option>
          {new Array(selectedPlanInfo.installments).fill(1).map((fill, index) => (
            <option value={index+1}>{index+1}</option>
          ))}
        </S.Select>
      </S.Fieldset>
      <S.Button type="submit">Finalizar pagamento</S.Button>
    </S.Form>
  );
};

export default Form;