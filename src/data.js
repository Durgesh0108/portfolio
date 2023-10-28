import {
	BiLogoHtml5,
	BiLogoCss3,
	BiLogoJavascript,
	BiLogoNodejs,
	BiLogoMongodb,
	BiLogoPython,
	BiLogoReact,
	BiLogoTailwindCss,
} from "react-icons/bi";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiExpress, SiMysql } from "react-icons/si";

export const PROJECTS = [
	{
		id: 1,
		name: "Spectra Glasses",
		description:
			"A Full Stack Web Application for Glasses website built with NodeJS, Express, MongoDB, JWT.",
		image: "/spectra.jpg",
		liveLink: "https://spectra-cc0ec8926925.herokuapp.com/",
		githubLink: "https://github.com/Durgesh0108/Spectra_Glasses",
		languages: ["HTML", "CSS", "JS", "Node JS", "Express JS", "Mongo DB"],
	},
	{
		id: 2,
		name: "Yelp Camp",
		description:
			"Full stack web application for campground reviews and photos using NodeJS, Express, MongoDB, EJS, PassportJS, Cloudinary",
		image: "/yelpcamp.jpg",
		liveLink: "https://yelpcamp-71bdc977fe4a.herokuapp.com/",
		githubLink: "https://github.com/Durgesh0108/Yelpcamp",
		languages: ["HTML", "CSS", "JS", "Node JS", "Express JS", "Mongo DB"],
	},
	{
		id: 3,
		name: "Car Website",
		description: "Built a frontend of Car website using React.",
		image: "/cars.jpg",
		liveLink: "https://stazi.vercel.app/cars",
		githubLink: "https://github.com/Durgesh0108/Stazi",
		languages: ["React"],
	},
	{
		id: 4,
		name: "Property Selling Website",
		description:
			"Built a frontend of property selling website using React.",
		image: "/property.jpg",
		liveLink: "https://stazi-assignment-2-two.vercel.app/property",
		githubLink: "https://github.com/Durgesh0108/Stazi_assignment_2",
		languages: ["React"],
	},
	{
		id: 5,
		name: "Food Website",
		description: "Built a frontend of food Website using React.",
		image: "/food.jpg",
		liveLink: "https://food-application-mu.vercel.app/",
		githubLink: "https://github.com/Durgesh0108/Food_application",
		languages: ["React"],
	},
];

export const EDUCATION = [
	{
		id: 1,
		degree: "B.Sc.Computer Science",
		passingYear: 2023,
		collegeName: "Patkar Varde College",
		CollegeLocation: "Goregaon(W) - Mumbai",
		grade: "9.2 CGPA",
	},
	{
		id: 2,
		degree: "H.S.C",
		passingYear: 2020,
		collegeName: "Rizvi College of Art, Commerce and Science",
		CollegeLocation: "Bandra(W) - Mumbai",
		grade: "66.00 %",
	},
	{
		id: 3,
		degree: "S.S.C",
		passingYear: 2018,
		collegeName: "S.V.N. English School",
		CollegeLocation: "Kandivali(W) - Mumbai",
		grade: "83.80 %",
	},
];

export const SKILLS = [
	{
		id: 1,
		skillname: "HTML5",
		skillpercentage: 90,
		logo: <BiLogoHtml5 />,
		color: "pink-400",
	},
	{
		id: 2,
		skillname: "CSS",
		skillpercentage: 80,
		logo: <BiLogoCss3 />,
		color: "blue-500",
	},
	{
		id: 3,
		skillname: "Javascript",
		skillpercentage: 70,
		logo: <BiLogoJavascript />,
		color: "yellow-300",
	},
	{
		id: 4,
		skillname: "Node Js",
		skillpercentage: 70,
		logo: <BiLogoNodejs />,
		color: "lime-400",
	},
	{
		id: 5,
		skillname: "Express Js",
		skillpercentage: 80,
		logo: <SiExpress />,
		color: "yellow-400",
	},
	{
		id: 6,
		skillname: "MongoDB",
		skillpercentage: 70,
		logo: <BiLogoMongodb />,
		color: "green-400",
	},
	{
		id: 7,
		skillname: "MySql",
		skillpercentage: 60,
		logo: <SiMysql />,
		color: "pink-400",
	},
	{
		id: 8,
		skillname: "Python",
		skillpercentage: 60,
		logo: <BiLogoPython />,
		color: "yellow-300",
	},
	{
		id: 9,
		skillname: "React",
		skillpercentage: 60,
		logo: <BiLogoReact />,
		color: "blue-500",
	},
	{
		id: 10,
		skillname: "Tailwind CSS",
		skillpercentage: 70,
		logo: <BiLogoTailwindCss />,
		color: "teal-500",
	},
	{
		id: 11,
		skillname: "Bootstarp",
		skillpercentage: 60,
		logo: <BsFillBootstrapFill />,
		color: "indigo-500",
	},
];

export const ACTIVITIES = [
	{
		id: 1,
		activityname:
			"ISR Activities(Social Work, Tree Plantation, Teaching Students, Awareness Drives)",
	},
	{
		id: 2,
		activityname: "Runner Up in Halla Bol(Debate Competition)",
	},
	{
		id: 3,
		activityname: "Participated in MUN(Model United Nation)",
	},
	{
		id: 4,
		activityname:
			"Worked for Hospitality Department in College Confab Event",
	},
];

export const PERSONALSKILLS = [
	{
		id: 1,
		personalskillname: "Leadership",
		percentagename: "80%",
	},
	{
		id: 2,
		personalskillname: "Teamwork",
		percentagename: "90%",
	},
	{
		id: 3,
		personalskillname: "Time Management",
		percentagename: "70%",
	},
	{
		id: 4,
		personalskillname: "Communication Skills",
		percentagename: "85%",
	},
	{
		id: 5,
		personalskillname: "Public Speaking",
		percentagename: "80%",
	},
	{
		id: 2,
		personalskillname: "Problem Solving",
		percentagename: "90%",
	},
];
