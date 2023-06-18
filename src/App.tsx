import { useState, useEffect, useContext } from "react";

import useFetchPlans, { PlansList } from './hooks/useFetchPlans';

import './App.css';

import Router from './router';

function App() {
  const [plansList, setPlansList] = useState<PlansList>([]);

	const { fetchPlansList } = useFetchPlans();


	useEffect(() => {
    fetchPlansList().then((res) => {
      setPlansList(res);
    }).catch(() => {
      console.error("Something wen wrong with request!");
    });
  }, []);

  
  if(!plansList.length) return null
  
  console.log('plansList >>', plansList)
  
  return (
    <Router />
  );
}

export default App;
