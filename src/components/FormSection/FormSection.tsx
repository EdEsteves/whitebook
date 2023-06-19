import Form from '../Form';
import PaymentMethodsList from '../PaymentMethodsList';
import * as S from './styles'

const FormSection = () => {
  return (
    <S.FormSection>

      <S.FormSectionTitle>Estamos quase lá!</S.FormSectionTitle>

      <S.FormSectionText>Insira seus dados de pagamento abaixo:</S.FormSectionText>

      <PaymentMethodsList />

      <Form />
    </S.FormSection>
  )
};

export default FormSection;