import Profile from "./PortfolioContainer/Home/Profile";
import "./App.css";
import AboutMe from "./PortfolioContainer/AboutMe/aboutMe";
import Resume from "./PortfolioContainer/Resume/resume";
import Navbar from "./Components/Navbar/Navbar";

function App() {
	return (
		<div className="App flex flex-col gap-10 overflow-y-auto scroll-smooth h-screen bg-indigoP">
			<Navbar />
			<Profile id="profile" />
			<AboutMe id="aboutMe" />
			<Resume id="resume" />
		</div>
	);
}

export default App;
