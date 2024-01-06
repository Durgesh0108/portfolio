import React from "react";

import PortfolioContainer from "../PortfolioContainer/PortfolioContainer";
import Header from "../PortfolioContainer/Home/Header/Header";

const Home = () => {
	return (
		<div className="App flex flex-col gap-10 overflow-y-auto scroll-smooth h-screen bg-indigoP">
			{/* <Navbar /> */}
			<Header />
			<PortfolioContainer />
		</div>
	);
};

export default Home;
