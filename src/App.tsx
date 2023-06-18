import { useEffect, useContext } from "react";

import useFetchPlans from './hooks/useFetchPlans';
import { findLowestPriorityObject } from './utils/ReducerByPriority'

import SelectedPlanContext from "./contexts/SelectedPlanContext";
import Router from './router';


function App() {
	const { fetchPlansList } = useFetchPlans();
  const { setSelectedPlanId, setSelectedPlanInfo } = useContext(SelectedPlanContext);

	useEffect(() => {
    fetchPlansList().then((res) => {
      const result = findLowestPriorityObject(res)

      setSelectedPlanId(result.id)
      setSelectedPlanInfo(result)
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
