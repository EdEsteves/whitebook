import React, { createContext, useState } from "react";

import { PlansList } from "../hooks/useFetchPlans";

type Props = {
  children: React.ReactNode;
}

type SelectedPlan = {
  plansList: PlansList;
  setPlansList: (value: PlansList) => void;
};

const PlansListContext = createContext<SelectedPlan>({
  plansList: [],
  setPlansList: () => {},
});

export const PlansListProvider: React.FC<Props> = ({ children }) => {
  const [plansList, setPlansList] = useState<PlansList>([]);

  return (
    <PlansListContext.Provider
      value={{
        plansList,
        setPlansList
      }}
    >
      {children}
    </PlansListContext.Provider>
  );
};

export default PlansListContext;