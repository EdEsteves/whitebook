import Header from "../components/Header";
import FakeLogin from "../components/FakeLogin";

const Home = () => {
	return (
		<>
			<Header />
			<div className="container">
				<FakeLogin />
			</div>
		</>
	)
}

export default Home;