import Header from "../components/Header";
import FormSection from "../components/FormSection";
import PlansSection from "../components/PlansSection";

const Checkout = () => {
	return (
		<>
			<Header logout={true} />
			<div className='container'>
				<FormSection />
				<PlansSection />
			</div>
		</>
	)
}

export default Checkout;