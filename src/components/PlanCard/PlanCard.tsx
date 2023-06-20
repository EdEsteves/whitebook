import { useContext } from "react";

import SelectedPlanContext from "../../contexts/SelectedPlanContext";

import * as S from './styles'

import { Plan } from '../../hooks/useFetchPlans';
import { formatMoney } from "../../utils/FormatMoney";
import { applyDiscount } from "../../utils/ApplyDiscount";
import { discountInstallments } from "../../utils/DiscountInstallments";

type PlanProps = {
  planInfo: Plan;
  selected: boolean
}

const PlanCard: React.FC<PlanProps> = ({ planInfo, selected}) => {
  const { setSelectedPlanId, setSelectedPlanInfo } = useContext(SelectedPlanContext);

  const handlePlanClick = () => {
    setSelectedPlanId(planInfo.id)
    setSelectedPlanInfo(planInfo)
  };

  console.log('Plan Info >>', planInfo)


  return (
    <S.PlanCard onClick={handlePlanClick}>

      <S.PlanCardLabel>
        <S.PlanCardTitle>{planInfo.title}</S.PlanCardTitle>

        {planInfo.description ? (
         <>
          <span className='pipe'>|</span>
          <S.PlanCardDescription>{planInfo.description}</S.PlanCardDescription>
         </>
        ) : null}
      </S.PlanCardLabel>

      <S.PlanCardPrice>
        {planInfo.discountAmmount ? (
          <>
            <S.PlanCardFullPrice>De {formatMoney(planInfo.fullPrice)}</S.PlanCardFullPrice>
            <span className='pipe'>|</span>
            <S.PlanCardDiscountedPrice>Por {applyDiscount(planInfo.fullPrice, 100*planInfo.discountPercentage)}</S.PlanCardDiscountedPrice>
          </>
        ) : (
          <S.PlanCardFullPrice>{formatMoney(planInfo.fullPrice)}</S.PlanCardFullPrice>
        )}

        {planInfo.discountPercentage ? (
          <S.PlanCardDiscountFlag>-{100*planInfo.discountPercentage}%</S.PlanCardDiscountFlag>
        ) : null}
        
      </S.PlanCardPrice>
      
      {planInfo.installments > 1 ? (
        <S.PlanCardInstallments>
          <S.PlanCardInstallment>{planInfo.installments}x de {discountInstallments(planInfo.fullPrice, 100*planInfo.discountPercentage ,planInfo.installments)}/mês</S.PlanCardInstallment>
        </S.PlanCardInstallments>
      ) : null}

      <S.PlanCardSelector className={selected ? 'selected' : ''} />
    </S.PlanCard>
  )
};

export default PlanCard;