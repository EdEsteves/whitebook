

import { useContext } from 'react';

import OrderContext from '../../contexts/OrderContext';
import FakeLoginContext from '../../contexts/FakeLoginContext';

import { ReactComponent as Star } from '../../assets/icon-star.svg';
import { ReactComponent as Success } from '../../assets/icon-success.svg';
import Icon from '../Icon';

import * as S from './styles'

const OrderConfirmation = () => {
  const { orderConfirmation } = useContext(OrderContext);
  const { setIsLogged, setEmail } = useContext(FakeLoginContext);

  const handleClick = () => {
    setIsLogged(false)
    setEmail('');
    localStorage.removeItem("fakelogin");
  }

  return (
    <S.OrderConfirmationContainer>
      
      <Icon svg={<Success />} />

      <S.OrderConfirmationTitle>Parabéns!</S.OrderConfirmationTitle>
      
      <S.OrderConfirmationText>Sua assinatura foi realizada<br/>com sucesso.</S.OrderConfirmationText>
      
      <S.OrderConfirmationCard>
        <S.OrderConfirmationCardSection>
          <Icon svg={<Star />} />
          <S.OrderConfirmationCardTitle>{orderConfirmation.planTitle}<span>|</span>{orderConfirmation.planDescription}</S.OrderConfirmationCardTitle>
          <S.OrderConfirmationCardPrice>{orderConfirmation.fullPaidPrice}<span>|</span>{orderConfirmation.installmentPrice}</S.OrderConfirmationCardPrice>
        </S.OrderConfirmationCardSection>
        <S.OrderConfirmationCardLabel>E-mail</S.OrderConfirmationCardLabel>
        <S.OrderConfirmationCardValue>{orderConfirmation.email}</S.OrderConfirmationCardValue>
        <S.OrderConfirmationCardLabel>CPF</S.OrderConfirmationCardLabel>
        <S.OrderConfirmationCardValue>{orderConfirmation.cpf}</S.OrderConfirmationCardValue>
      </S.OrderConfirmationCard>

      <S.OrderConfirmationRedirect href={'/checkout'}>Gerenciar assinatura</S.OrderConfirmationRedirect>

      <S.OrderConfirmationButton onClick={handleClick}>IR PARA A HOME</S.OrderConfirmationButton>

    </S.OrderConfirmationContainer>
  )
};

export default OrderConfirmation;