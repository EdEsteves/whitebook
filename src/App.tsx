import { useEffect, useContext } from "react";

import useFetchPlans from './hooks/useFetchPlans';
import { findLowestPriorityObject } from './utils/ReducerByPriority'
import SelectedPlanContext from './contexts/SelectedPlanContext';

import Router from './router';


function App() {
	const { fetchPlansList } = useFetchPlans();
  const { setSelectedPlanId, setSelectedPlanInfo } = useContext(SelectedPlanContext);

	useEffect(() => {
    fetchPlansList().then((r) => {
      const result = findLowestPriorityObject(r)

      if(result) {
        setSelectedPlanId(result.id)
        setSelectedPlanInfo(result)
      }

    }).catch(() => {
      console.error("Something wen wrong with request!");
    });
  });
  
  return (
    <>
      {/* <Header backPath={'/'} /> */}
      <Router />
    </>
  );
}

export default App;
