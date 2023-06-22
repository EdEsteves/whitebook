import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";

import * as S from './styles'
import SelectedPlanContext from '../../contexts/SelectedPlanContext';
import FakeLoginContext from '../../contexts/FakeLoginContext';
import OrderContext from '../../contexts/OrderContext'
import { OrderInfo } from '../../hooks/useFetchSubscription';
import useFetchSubscription from '../../hooks/useFetchSubscription';

import { cardMasker, expireDateMasker, cvvMasker, cpfMasker } from "../../utils/InputMask";
import { applyDiscount } from '../../utils/ApplyDiscount';
import { discountInstallments } from '../../utils/DiscountInstallments';

type FormData = {
  [key: string]: string | number;
}

const initialErrorState: FormData = {
  cardNumber: '',
  expireDate: '',
  cvv: '',
  cpf: '',
};
const initialFormState: FormData = {
  cardNumber: '',
  expireDate: '',
  cvv: '',
  name: '',
  cpf: '',
  cupom: '',
  installments: '',
};

type FieldConfig = {
  lenght: number;
  errorMessage: string;
}

const fieldConfig: { [key: string]: FieldConfig } = {
  cardNumber: {
    lenght: 19,
    errorMessage: 'Cartão de crédito inválido',
  },
  expireDate: {
    lenght: 5,
    errorMessage: 'Data inválida',
  },
  cvv: {
    lenght: 3,
    errorMessage: 'CVV inválido',
  },
  cpf: {
    lenght: 14,
    errorMessage: 'CPF inválido',
  },
};


const Form: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>(initialFormState);
  const [errors, setErrors] = useState<FormData>(initialErrorState);
  const [formStatus, setFormStatus] = useState(false);
  const { selectedPlanInfo } = useContext(SelectedPlanContext);
  const { setOrderConfirmation } = useContext(OrderContext);
  const { email } = useContext(FakeLoginContext);
  const { fetchSubscription } = useFetchSubscription()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    const { name } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>, errorMessage: string) => {
    const { name } = event.target;
    if (!formData[name]) {
      setErrors((prevState) => ({ ...prevState, [name]: errorMessage  }));
    } else {
      setErrors((prevState) => ({ ...prevState, [name]: '' }));
    }
  };

  const handleInputBlurLength = (event: React.FocusEvent<HTMLInputElement>, fieldName: string) => {
    const { value } = event.target;
    const { lenght, errorMessage } = fieldConfig[fieldName];
    if (value.length !== lenght) {
      setErrors((prevState) => ({ ...prevState, [fieldName]: errorMessage }));
    } else {
      setErrors((prevState) => ({ ...prevState, [fieldName]: '' }));
    }
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

    const order: OrderInfo = {
      couponCode: formData.cupom,
      creditCardCPF: formData.cpf,
      creditCardCVV: formData.cvv,
      creditCardExpirationDate: formData.expireDate,
      creditCardHolder: formData.name,
      creditCardNumber: formData.cardNumber,
      gateway: selectedPlanInfo.gateway,
      installments: formData.installments,
      offerId: Math.floor(Math.random() * (100000 - 1 + 1)) + 1,
      userId: Math.floor(Math.random() * (100000 - 1 + 1)) + 1,
      id: selectedPlanInfo.id
    }

    fetchSubscription(order).then((r) => {
      const orderConfirmation = {
        planTitle: selectedPlanInfo.title,
        planDescription: selectedPlanInfo.description,
        fullPaidPrice: applyDiscount(selectedPlanInfo.fullPrice, 100*selectedPlanInfo.discountPercentage),
        installmentPrice: `${formData.installments}x ${discountInstallments(selectedPlanInfo.fullPrice, 100*selectedPlanInfo.discountPercentage ,Number(formData.installments))}`,
        email: email,
        cpf: formData.cpf
      }
      setOrderConfirmation(orderConfirmation)

      navigate('/checkout/orderplaced')
    }).catch(() => {
      console.error("Something wen wrong with post!");
    });
  };

  useEffect(() => {
    setFormStatus(Object.values(errors).every((value) => value === null || value === '') && !Object.values(formData).every((value) => value === null || value === ''))
  }, [errors, formData]);

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Fieldset>
        <S.Input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={formData.cardNumber}
          onBlur={(event) => handleInputBlurLength(event, 'cardNumber')}
          onChange={(event) => handleInputChange(event, cardMasker(event.target.value))}
          placeholder='0000 0000 0000 0000'
          required={true}
        />
        <S.Label htmlFor="cardNumber">Número do cartão</S.Label>
        {errors.cardNumber && <S.ErrorMsg>{errors.cardNumber}</S.ErrorMsg>}
      </S.Fieldset>
      <S.Fieldset className='double'>
        <div className='validate'>
          <S.Input
            type="text"
            id="expireDate"
            name="expireDate"
            value={formData.expireDate}
            onBlur={(event) => handleInputBlurLength(event, 'expireDate')}
            onChange={(event) => handleInputChange(event, expireDateMasker(event.target.value))}
            placeholder='MM/AA'
            required={true}
          />
          <S.Label htmlFor="expireDate">Validade</S.Label>
          {errors.expireDate && <S.ErrorMsg>{errors.expireDate}</S.ErrorMsg>}
        </div>
        <div className='cvv'>
          <S.Input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onBlur={(event) => handleInputBlurLength(event, 'cvv')}
            onChange={(event) => handleInputChange(event, cvvMasker(event.target.value))}
            placeholder='000'
            required={true}
          />
          <S.Label htmlFor="cvv">CVV</S.Label>
          {errors.cvv && <S.ErrorMsg>{errors.cvv}</S.ErrorMsg>}
        </div>      
      </S.Fieldset>
      <S.Fieldset>
        <S.Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onBlur={(event) => handleInputBlur(event, 'O campo nome é obrigatório')}
          onChange={(event) => handleInputChange(event, event.target.value)}
          placeholder='Seu nome'
          required={true}
        />
        <S.Label htmlFor="name">Nome impresso no cartão</S.Label>
        {errors.name && <S.ErrorMsg>{errors.name}</S.ErrorMsg>}
      </S.Fieldset>
      <S.Fieldset>
        <S.Input
          type="text"
          id="cpf"
          name="cpf"
          value={formData.cpf}
          onBlur={(event) => handleInputBlurLength(event, 'cpf')}
          onChange={(event) => handleInputChange(event, cpfMasker(event.target.value))}
          placeholder='000.000.000-00'
          required={true}
        />
        <S.Label htmlFor="cpf">CPF</S.Label>
        {errors.cpf && <S.ErrorMsg>{errors.cpf}</S.ErrorMsg>}
      </S.Fieldset>
      <S.Fieldset>
        <S.Input
          type="text"
          id="cupom"
          name="cupom"
          value={formData.cupom}
          onChange={(event) => handleInputChange(event, event.target.value)}
          placeholder='Insira aqui'
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
            <option key={index} value={index+1}>{index+1}</option>
          ))}
        </S.Select>
      </S.Fieldset>
      <S.Button disabled={!formStatus} type="submit">Finalizar pagamento</S.Button>
    </S.Form>
  );
};

export default Form;