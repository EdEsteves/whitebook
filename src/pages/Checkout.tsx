import { useContext } from "react";

import SelectedPlanContext from "../contexts/SelectedPlanContext";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Checkout = () => {
	const { selectedPlanInfo } = useContext(SelectedPlanContext);

	console.log('checkout selected plan >>', selectedPlanInfo)

	return (
		<>
			<Header backPath={'/'} />
			<span>Teste checkout</span>
			<Link to={'/checkout'}>Go to OrderPlaced</Link>
		</>
	)
}

export default Checkout;