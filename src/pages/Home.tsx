import { Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
	return (
		<>
			<Header />
			<span>Teste Home</span>
			<Link to={'/checkout'}>Go to Checkout</Link>
		</>
	)
}

export default Home;