import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			<span>Teste Home</span>
			<Link to={"/checkout"}>Checkout</Link>
		</>
	)
}

export default Home;