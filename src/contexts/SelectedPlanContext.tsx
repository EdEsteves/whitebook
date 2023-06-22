import React, { createContext, useState } from "react";

import { Plan } from "../hooks/useFetchPlans";
type Props = {
  children: React.ReactNode;
}

type SelectedPlan = {
  selectedPlanId: number;
  setSelectedPlanId: (value: number) => void;
  selectedPlanInfo: Plan
  setSelectedPlanInfo: (value: Plan) => void;
};

const SelectedPlanContext = createContext<SelectedPlan>({
  selectedPlanId: 0,
  setSelectedPlanId: () => {},
  selectedPlanInfo: {
    id: 0,
    storeId: "",
    title: "",
    description: "",
    caption: "",
    fullPrice: 0,
    discountAmmount: 0,
    discountPercentage: 0,
    periodLabel: "",
    period: "",
    discountCouponCode: null,
    order: 0,
    priority: 0,
    gateway: "",
    splittable: false,
    installments: 0,
    acceptsCoupon: false
  },
  setSelectedPlanInfo: () => {},
});

export const SelectedPlanProvider: React.FC<Props> = ({ children }) => {
  const [selectedPlanId, setSelectedPlanId] = useState(0);
  const [selectedPlanInfo, setSelectedPlanInfo] = useState<Plan>({
    id: 0,
    storeId: "",
    title: "",
    description: "",
    caption: "",
    fullPrice: 0,
    discountAmmount: 0,
    discountPercentage: 0,
    periodLabel: "",
    period: "",
    discountCouponCode: null,
    order: 0,
    priority: 0,
    gateway: "",
    splittable: false,
    installments: 0,
    acceptsCoupon: false
  });

  return (
    <SelectedPlanContext.Provider
      value={{
        selectedPlanId,
        setSelectedPlanId,
        selectedPlanInfo,
        setSelectedPlanInfo
      }}
    >
      {children}
    </SelectedPlanContext.Provider>
  );
};

export default SelectedPlanContext;