import Header from "../components/Header";
import OrderConfirmation from "../components/OrderConfirmation";

const Orderplaced = () => {
	return (
		<>
			<Header logout={true} />
			<div className="container">
				<OrderConfirmation />
			</div>
		</>
	)
}

export default Orderplaced;