import { useEffect, useContext } from "react";

import useFetchPlans from './hooks/useFetchPlans';
import { findLowestPriorityObject } from './utils/ReducerByPriority'
import SelectedPlanContext from './contexts/SelectedPlanContext';
import PlansListContext from './contexts/PlansListContext';

import Router from './router';


function App() {
	const { fetchPlansList } = useFetchPlans();
  const { setSelectedPlanId, setSelectedPlanInfo } = useContext(SelectedPlanContext);
  const { setPlansList } = useContext(PlansListContext);

	useEffect(() => {
    fetchPlansList().then((r) => {
      const result = findLowestPriorityObject(r)

      if(result) {
        setSelectedPlanId(result.id)
        setSelectedPlanInfo(result)
        setPlansList(r)
      }

    }).catch(() => {
      console.error("Something wen wrong with request!");
    });
  }, []);
  
  return (
    <>
      <Router />
    </>
  );
}

export default App;
