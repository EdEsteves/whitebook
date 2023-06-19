import { useContext } from "react";

import SelectedPlanContext from "../contexts/SelectedPlanContext";
import Header from "../components/Header";

const Checkout = () => {
	const { selectedPlanInfo } = useContext(SelectedPlanContext);

	console.log('checkout selected plan >>', selectedPlanInfo)

	return (
		<>
			<Header backPath={'/'} />
			<span>Teste checkout</span>
		</>
	)
}

export default Checkout;