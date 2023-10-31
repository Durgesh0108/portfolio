import "./App.css";
// import Navbar from "./Components/Navbar/Navbar";
import Header from "./PortfolioContainer/Home/Header/Header";
import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";

function App() {
	return (
		<div className="App flex flex-col gap-10 overflow-y-auto scroll-smooth h-screen bg-indigoP">
			{/* <Navbar /> */}
			<Header />
			<PortfolioContainer />
		</div>
	);
}

export default App;
