import Profile from "./../PortfolioContainer/Home/Profile";
import AboutMe from "./../PortfolioContainer/AboutMe/aboutMe";
import Resume from "./../PortfolioContainer/Resume/resume";
import Projects from "./../PortfolioContainer/Projects/Projects";
import Certifications from "./../PortfolioContainer/CertificatesAndCourses/Certifications";
import Education from "../PortfolioContainer/Resume/Components/Education";
import Skills from "../PortfolioContainer/Resume/Components/Skills";
import PersonalSkills from "../PortfolioContainer/Resume/Components/PeronalSkills";
import Activities from "../PortfolioContainer/Resume/Components/Activities";
import ContactMe from "../PortfolioContainer/ContactMe/contactMe";

export const TOTAL_SCREENS = [
	{
		screen_name: "Profile",
		component: Profile,
	},
	{
		screen_name: "About Me",
		component: AboutMe,
	},
	{
		screen_name: "Resume",
		component: Resume,
	},
	{
		screen_name: "Projects",
		component: Projects,
	},
	{
		screen_name: "Certifications",
		component: Certifications,
	},
	{
		screen_name: "Contact Me",
		component: ContactMe
	}
];

export const RESUME_SCREEN = [
	{
		screen_name: "Education",
		component: Education,
	},
	{
		screen_name: "Skills",
		component: Skills,
	},
	{
		screen_name: "Perosnal Skills",
		component: PersonalSkills,
	},
	{
		screen_name: "Activities",
		component: Activities,
	},
];



export const GET_RESUME_SCREEN_INDEX = (screen_name) => {
	if (!screen_name) return -1;
	for (let i = 0; i < RESUME_SCREEN.lenght; i++) {
		if (RESUME_SCREEN[i].screen_name === screen_name) return i;
	}
	return -1;
};

export const GET_SCREEN_INDEX = (screen_name) => {
	if (!screen_name) return -1;
	for (let i = 0; i < TOTAL_SCREENS.lenght; i++) {
		if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
	}
	return -1;
};
