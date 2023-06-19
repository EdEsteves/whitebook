import * as S from './styles'

import mastercard from '../../assets/payment/mastercard.svg'
import dinnersclub from '../../assets/payment/dinnersclub.svg'
import americanexpress from '../../assets/payment/americanexpress.svg'
import visa from '../../assets/payment/visa.svg'
import elo from '../../assets/payment/elo.svg'
import iugu from '../../assets/payment/iugu.svg'


const PaymentMethodsList = () => {
  return (
    <S.PaymentMethodsContainer>
      
      <S.PaymentMethodsList>

        <S.PaymentMethodsListItem>
          <S.PaymentMethodsImage src={mastercard} />
        </S.PaymentMethodsListItem>
        
        <S.PaymentMethodsListItem>
          <S.PaymentMethodsImage src={dinnersclub} />
        </S.PaymentMethodsListItem>

        <S.PaymentMethodsListItem>
          <S.PaymentMethodsImage src={americanexpress} />
        </S.PaymentMethodsListItem>

        <S.PaymentMethodsListItem>
          <S.PaymentMethodsImage src={visa} />
        </S.PaymentMethodsListItem>

        <S.PaymentMethodsListItem>
          <S.PaymentMethodsImage src={elo} />
        </S.PaymentMethodsListItem>

      </S.PaymentMethodsList>

      <S.PaymentMethodsImage src={iugu} />

    </S.PaymentMethodsContainer>
  )
};

export default PaymentMethodsList;