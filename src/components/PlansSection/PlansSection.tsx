import { useContext, useEffect } from "react";

import PlansListContext from "../../contexts/PlansListContext";

import * as S from './styles'

const PlansSection = () => {
  const { plansList } = useContext(PlansListContext);

	// useEffect(() => {
  // }, [plansList]);

  if(!plansList.length) return null

  return (
    <S.PlansSection>
      <S.PlansSectionTitle>Confira o seu plano:</S.PlansSectionTitle>
    </S.PlansSection>
  )
};

export default PlansSection;