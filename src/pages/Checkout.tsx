import { useContext } from "react";

import SelectedPlanContext from "../contexts/SelectedPlanContext";

import { Link } from "react-router-dom";

const Checkout = () => {
	const { selectedPlanInfo } = useContext(SelectedPlanContext);

	console.log('checkout selected plan >>', selectedPlanInfo)

	return (
		<>
			<Link to={"/"}>Home</Link>
			<span>Teste checkout</span>
			<Link to={"/checkout/orderplaced"}>OrderPlaced</Link>
		</>
	)
}

export default Checkout;