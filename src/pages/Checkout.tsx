import { useContext } from "react";

import SelectedPlanContext from "../contexts/SelectedPlanContext";

import Header from "../components/Header";
import FormSection from "../components/FormSection";
import PlansSection from "../components/PlansSection";

const Checkout = () => {
	const { selectedPlanInfo } = useContext(SelectedPlanContext);

	console.log('checkout selected plan >>', selectedPlanInfo)

	return (
		<>
			<Header backPath={'/'} />
			<div className='container'>
				<FormSection />
				<PlansSection />
			</div>
		</>
	)
}

export default Checkout;