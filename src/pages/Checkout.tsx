import { useState, useEffect, useContext } from "react";

import useFetchPlans, { PlansList } from '../hooks/useFetchPlans'

const Checkout = () => {
	const [plansList, setPlansList] = useState<PlansList>([]);

	const { fetchPlansList } = useFetchPlans();


	useEffect(() => {
    fetchPlansList().then((res) => {
      setPlansList(res);
    });
  }, []);

	return (
		<span>Teste checkout</span>
	)
}

export default Checkout;