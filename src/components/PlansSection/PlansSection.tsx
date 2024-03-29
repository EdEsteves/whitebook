import { useContext } from 'react';

import PlansListContext from '../../contexts/PlansListContext';
import FakeLoginContext from '../../contexts/FakeLoginContext';

import PlansList from '../PlansList/';
import Icon from '../Icon';
import { ReactComponent as IconHelp } from '../../assets/icon-help.svg';

import * as S from './styles'
import Spinner from '../Spinner/Spinner';

const PlansSection = () => {
  const { plansList } = useContext(PlansListContext);
  const { email } = useContext(FakeLoginContext);

  return (
    <S.PlansSection>
      <S.PlansSectionTitle>Confira o seu plano:</S.PlansSectionTitle>
      <S.PlansSectionUser>{email}</S.PlansSectionUser>
      {plansList.length ? (
        <>
          <PlansList />
          <S.PlansSectionHelpTooltip>
            <S.PlansSectionText>Sobre a cobrança</S.PlansSectionText>
            <Icon svg={<IconHelp />} />
            <S.PlansSectionHelpTooltipText>Tooltip Text</S.PlansSectionHelpTooltipText>
          </S.PlansSectionHelpTooltip>
        </>
      ) : <Spinner color={'#191847'} />}

    </S.PlansSection>
  )
};

export default PlansSection;