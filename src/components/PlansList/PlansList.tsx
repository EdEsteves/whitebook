import { useContext, useEffect } from "react";

import PlansListContext from "../../contexts/PlansListContext";

import PlanCard from '../PlanCard';

import * as S from './styles'

const PlansList = () => {
  const { plansList } = useContext(PlansListContext);

	useEffect(() => {
    console.log('Lista de planos', plansList)
  });

  return (
    <>
      <S.PlansList>
        {plansList.map(() => <PlanCard />)}
      </S.PlansList>
   </>
  )
};

export default PlansList;