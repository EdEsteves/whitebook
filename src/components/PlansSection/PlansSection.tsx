// import { useContext } from "react";
import { useContext, useEffect } from "react";

import PlansListContext from "../../contexts/PlansListContext";

import * as S from './styles'

const PlansSection = () => {
  const { plansList } = useContext(PlansListContext);

	useEffect(() => {
    console.log('Lista de planos', plansList)
  });

  return (
    <S.PlansSection>
      <S.PlansSectionTitle>Confira o seu plano:</S.PlansSectionTitle>
    </S.PlansSection>
  )
};

export default PlansSection;