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
		id: 6,
		personalskillname: "Problem Solving",
		percentagename: "90%",
	},
];

export const CERTIFICATION_COURSES = [
	{
		id: 1,
		courseName: "The Web Developer Bootcamp 2023",
		instructor: "Colt Steele",
		Platform: "Udemy",
		completionDate: "Sept 2023",
		certificates: [
			{
				id: 1,
				name: "Web Developer",
				certificate: "Web_Developer_Colt_Steele.pdf",
			},
		],
		description:
			"Full stack web application for campground reviews and photos using NodeJS, Express, MongoDB, EJS, PassportJS, Cloudinary",
		image: "udemy_web_development.png",
		completed: true,
	},
	{
		id: 2,
		courseName: "Node Js, Express, MongoDb & More: The Complete Bootcamp",
		instructor: "Jonas Schmedtmann",
		Platform: "Udemy",
		completionDate: "March 2023",
		certificates: [
			{
				id: 1,
				name: "Web Developer",
				certificate: "Node_Js_Jonas_Schmedtmann.pdf",
			},
		],
		description:
			"Full stack web application for campground reviews and photos using NodeJS, Express, MongoDB, EJS, PassportJS, Cloudinary",
		image: "udemy_nodejs.png",
		completed: true,
	},
	{
		id: 3,
		courseName: "Internshala Web Development",
		instructor: "Internshala",
		Platform: "Internshala",
		completionDate: "Sept 2023",
		certificates: [
			{
				id: 1,
				name: "Internshala Web Developement",
				certificate: "Web_Internshala.pdf",
			},
			{
				id: 2,
				name: "N.S.D.C Web Developement",
				certificate: "Web_NSDC.pdf",
			},
		],
		description:
			"Full stack web application for campground reviews and photos using NodeJS, Express, MongoDB, EJS, PassportJS, Cloudinary",
		image: "internshala_Web_development.png",
		completed: true,
	},
	{
		id: 4,
		courseName:
			"100 Days of Code: The Complete Python Pro Bootcamp for 2023",
		instructor: "Dr. Angela Yu",
		Platform: "Udemy",
		completionDate: "",
		certificates: [],
		description:
			"Full stack web application for campground reviews and photos using NodeJS, Express, MongoDB, EJS, PassportJS, Cloudinary",
		image: "100_days_of_python.png",
		completed: false,
	},
	{
		id: 5,
		courseName: "React - The Complete Guide 2023",
		instructor: "Maximilian Schwarzmüller",
		Platform: "Udemy",
		completionDate: "",
		certificates: [],
		description:
			"Full stack web application for campground reviews and photos using NodeJS, Express, MongoDB, EJS, PassportJS, Cloudinary",
		image: "react.png",
		completed: false,
	},
	{
		id: 6,
		courseName: "The Git & Github Bootcamp",
		instructor: "Colt Steele",
		Platform: "Udemy",
		completionDate: "",
		certificates: [],
		description:
			"Full stack web application for campground reviews and photos using NodeJS, Express, MongoDB, EJS, PassportJS, Cloudinary",
		image: "github.png",
		completed: false,
	},
	{
		id: 7,
		courseName: "PHP for Beginners",
		instructor: "Edwin Diaz",
		Platform: "Udemy",
		completionDate: "",
		certificates: [],
		description:
			"Full stack web application for campground reviews and photos using NodeJS, Express, MongoDB, EJS, PassportJS, Cloudinary",
		image: "php.png",
		completed: false,
	},
	{
		id: 8,
		courseName: "Python Django - Full Stack Web Developer Bootcamp",
		instructor: "Jose Portilla",
		Platform: "Udemy",
		completionDate: "",
		certificates: [],
		description:
			"Full stack web application for campground reviews and photos using NodeJS, Express, MongoDB, EJS, PassportJS, Cloudinary",
		image: "python_django.png",
		completed: false,
	},
	{
		id: 9,
		courseName: "The Ultimate MySQL Bootcamp",
		instructor: "Colt Steele",
		Platform: "Udemy",
		completionDate: "",
		certificates: [],
		description:
			"Full stack web application for campground reviews and photos using NodeJS, Express, MongoDB, EJS, PassportJS, Cloudinary",
		image: "mysql.png",
		completed: false,
	},
];
