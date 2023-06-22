import { useContext } from 'react';

import PlansListContext from '../../contexts/PlansListContext';
import SelectedPlanContext from '../../contexts/SelectedPlanContext';

import PlanCard from '../PlanCard';

import * as S from './styles'

const PlansList = () => {
  const { plansList } = useContext(PlansListContext);
  const { selectedPlanId } = useContext(SelectedPlanContext);

  return (
    <S.PlansList>
      {plansList.map((plan, index) => <PlanCard planInfo={plan} key={index} selected={plan.id === selectedPlanId} />)}
    </S.PlansList>
  )
};

export default PlansList;