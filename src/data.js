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
		slug: "spectra-glasses",
		name: "Spectra Glasses",
		description:
			"A Full Stack Web Application for Glasses website built with NodeJS, Express, MongoDB, JWT.",
		image: "spectra.jpg",
		liveLink: "https://spectra-cc0ec8926925.herokuapp.com/",
		githubLink: "https://github.com/Durgesh0108/Spectra_Glasses",
		languages: [
			{
				name: "Node JS",
				symbol: <BiLogoNodejs />,
			},
			{
				name: "Express JS",
				symbol: <SiExpress />,
			},
			{
				name: "Mongo DB",
				symbol: <BiLogoMongodb />,
			},
			{
				name: "Tailwind CSS",
				symbol: <BiLogoTailwindCss />,
			},
		],
	},
	{
		id: 2,
		slug: "yelpcamp",
		name: "Yelp Camp",
		description:
			"Full stack web application for campground reviews and photos using NodeJS, Express, MongoDB, EJS, PassportJS, Cloudinary",
		image: "yelpcamp.jpg",
		liveLink: "https://yelpcamp-71bdc977fe4a.herokuapp.com/",
		githubLink: "https://github.com/Durgesh0108/Yelpcamp",
		languages: [
			{
				name: "Node JS",
				symbol: <BiLogoNodejs />,
			},
			{
				name: "Express JS",
				symbol: <SiExpress />,
			},
			{
				name: "Mongo DB",
				symbol: <BiLogoMongodb />,
			},
			{
				name: "Tailwind CSS",
				symbol: <BiLogoTailwindCss />,
			},
		],
	},
	{
		id: 3,
		slug: "car-website",
		name: "Car Website",
		description: "Built a frontend of Car website using React.",
		image: "cars.jpg",
		liveLink: "https://stazi.vercel.app/cars",
		githubLink: "https://github.com/Durgesh0108/Stazi",
		languages: [
			{
				name: "React",
				symbol: <BiLogoReact />,
			},
			{
				name: "Tailwind CSS",
				symbol: <BiLogoTailwindCss />,
			},
		],
	},
	{
		id: 4,
		slug: "property-selling-website",
		name: "Property Selling Website",
		description:
			"Built a frontend of property selling website using React.",
		image: "property.jpg",
		liveLink: "https://stazi-assignment-2-two.vercel.app/property",
		githubLink: "https://github.com/Durgesh0108/Stazi_assignment_2",
		languages: [
			{
				name: "React",
				symbol: <BiLogoReact />,
			},
			{
				name: "Tailwind CSS",
				symbol: <BiLogoTailwindCss />,
			},
		],
	},
	{
		id: 5,
		slug: "food-website",
		name: "Food Website",
		description: "Built a frontend of food Website using React.",
		image: "food.jpg",
		liveLink: "https://food-application-mu.vercel.app/",
		githubLink: "https://github.com/Durgesh0108/Food_application",
		languages: [
			{
				name: "React",
				symbol: <BiLogoReact />,
			},
			{
				name: "Tailwind CSS",
				symbol: <BiLogoTailwindCss />,
			},
		],
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
		skillname: "Bootstrap",
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
		slug: "the-web-developer-bootcamp-2023",
		courseName: "The Web Developer Bootcamp 2023",
		instructor: "Colt Steele",
		Platform: "Udemy",
		completionDate: "Sept 2023",
		certificates: [
			{
				id: 1,
				name: "Web Developer",
				pdf: "Web_Developer_Colt_Steele.pdf",
				image: "Web_Developer_Colt_Steele.png",
			},
		],
		description: {
			header: "Full stack web application for campground reviews and photos using NodeJS, Express, MongoDB, EJS, PassportJS, Cloudinary",
			learning: [
				{
					point: "The ins and outs of HTML5, CSS3, and Modern JavaScript for 2021",
				},
				{
					point: "Make REAL web applications using cutting-edge technologies",
				},
				{
					point: "Create responsive, accessible, and beautiful layouts",
				},
				{
					point: "Recognize and prevent common security exploits like SQL-Injection & XSS",
				},
				{
					point: "Continue to learn and grow as a developer, long after the course ends",
				},
				{
					point: "Create a blog application from scratch using Node, Express, and MongoDB.",
				},
				{
					point: "Create a complicated yelp-like application from scratch",
				},
				{
					point: "Deploy your applications and work with cloud databases",
				},
				{
					point: "Create static HTML and CSS portfolio sites and landing pages",
				},
				{
					point: "Think like a developer. Become an expert at Googling code questions!",
				},
				{ point: "Create complex HTML forms with validations" },
				{ point: "Implement full authentication from scratch!" },
				{
					point: "Use CSS Frameworks including Bootstrap 5, Semantic UI, and Bulma",
				},
				{ point: "Implement responsive navbars on websites" },
				{
					point: "Use JavaScript variables, conditionals, loops, functions, arrays, and objects",
				},
				{
					point: "Write Javascript functions, and understand scope and higher order functions",
				},
				{ point: "Master the 'weird' parts of JavaScript" },
				{ point: "Create full-stack web applications from scratch" },
				{ point: "Manipulate the DOM with vanilla JS" },
				{ point: "Write JavaScript based browser games" },
				{ point: "Use Postman to monitor and test APIs" },
				{ point: "Use NodeJS to write server-side JavaScript" },
				{
					point: "Write complex web apps with multiple models and data associations",
				},
				{
					point: "Write a REAL application using everything in the course",
				},
				{
					point: "Use Express and MongoDB to create full-stack JS applications",
				},
				{
					point: "Use common JS data structures like Arrays and Objects",
				},
				{ point: "Master the command line interface" },
				{ point: "Use NPM to install all sorts of useful packages" },
				{ point: "Understand the ins and outs of HTTP requests" },
				{ point: "Create your own Node modules" },
				{
					point: "Make a beautiful, responsive photographer's portfolio page",
				},
				{
					point: "Create a beautiful, responsive landing page for a startup",
				},
				{ point: "Implement user authentication" },
				{ point: "Create a beautiful animated todo list application" },
				{ point: "Create single page applications with AJAX" },
				{
					point: "Master the entire modern back-end stack: Node, Express, MongoDB and Mongoose (MongoDB JS driver)",
				},
				{
					point: "Build a complete, beautiful & real-world application from start to finish (API and server-side rendered website)",
				},
				{
					point: "Build a fast, scalable, feature-rich RESTful API (includes filters, sorts, pagination, and much more)",
				},
				{
					point: "Learn how Node really works behind the scenes: event loop, blocking vs non-blocking code, streams, modules, etc.",
				},
				{ point: "CRUD operations with MongoDB and Mongoose" },
				{
					point: "Deep dive into mongoose (including all advanced features)",
				},
				{
					point: "How to work with data in NoSQL databases (including geospatial data)",
				},
				{
					point: "Advanced authentication and authorization (including password reset)",
				},
				{
					point: "Security: encryption, sanitization, rate limiting, etc.",
				},
				{ point: "Server-side website rendering with Pug templates" },
				{ point: "Credit card payments with Stripe" },
				{ point: "Sending emails & uploading files" },
				{
					point: "Deploy the final application to production (including a Git crash-course)",
				},
				{
					point: "Downloadable videos, code and design assets for projects",
				},
			],
		},
		image: "udemy_web_development.png",
		completed: true,
	},
	{
		id: 2,
		slug: "react-the-complete-guide-2023",
		courseName: "React - The Complete Guide 2023",
		instructor: "Maximilian Schwarzmüller",
		Platform: "Udemy",
		completionDate: "Dec 2023",
		certificates: [
			{
				id: 1,
				name: "React Crash Course",
				pdf: "",
				image: "React_Maximillian.png",
			},
		],
		description: {
			header: "Full stack web application for campground reviews and photos using NodeJS, Express, MongoDB, EJS, PassportJS, Cloudinary",
			learning: [
				{
					point: "Learn React from the ground up and finish the course as an advanced React developer",
				},
				{
					point: "Build multiple high-quality demo apps, including a fullstack app built with NextJS",
				},
				{
					point: "Join more than 750,000 students in this course & more than 2,500,000 students I taught across all my courses",
				},
				{
					point: "Build multiple demo projects & explore realistic examples",
				},
				{
					point: "Follow along locally or in a cloud development environment",
				},
				{ point: "Learn all about React Hooks and React Components" },
				{
					point: "Manage complex state efficiently with React's Context API & React Redux",
				},
				{
					point: "Build standalone React apps & applications connected to a backend via HTTP",
				},
				{
					point: "Learn about routing & route-related data fetching with React Router",
				},
				{ point: "Implement user authentication in React apps" },
				{ point: "Build fullstack React apps with NextJS" },
				{ point: "Get started with React Unit Testing" },
			],
		},
		image: "react.png",
		completed: true,
	},
	{
		id: 3,
		slug: "nodejs-express-mongodb-bootcamp",
		courseName: "Node Js, Express, MongoDb & More: The Complete Bootcamp",
		instructor: "Jonas Schmedtmann",
		Platform: "Udemy",
		completionDate: "March 2023",
		certificates: [
			{
				id: 1,
				name: "Web Developer",
				pdf: "Node_Js_Jonas_Schmedtmann.pdf",
				image: "Node_Js_Jonas_Schmedtmann.png",
			},
		],
		description: {
			header: "Full stack web application for campground reviews and photos using NodeJS, Express, MongoDB, EJS, PassportJS, Cloudinary",
			learning: [
				{
					point: "Master the entire modern back-end stack: Node, Express, MongoDB and Mongoose (MongoDB JS driver)",
				},
				{
					point: "Build a complete, beautiful & real-world application from start to finish (API and server-side rendered website)",
				},
				{
					point: "Build a fast, scalable, feature-rich RESTful API (includes filters, sorts, pagination, and much more)",
				},
				{
					point: "Learn how Node really works behind the scenes: event loop, blocking vs non-blocking code, streams, modules, etc.",
				},
				{ point: "CRUD operations with MongoDB and Mongoose" },
				{
					point: "Deep dive into mongoose (including all advanced features)",
				},
				{
					point: "How to work with data in NoSQL databases (including geospatial data)",
				},
				{
					point: "Advanced authentication and authorization (including password reset)",
				},
				{
					point: "Security: encryption, sanitization, rate limiting, etc.",
				},
				{ point: "Server-side website rendering with Pug templates" },
				{ point: "Credit card payments with Stripe" },
				{ point: "Sending emails & uploading files" },
				{
					point: "Deploy the final application to production (including a Git crash-course)",
				},
				{
					point: "Downloadable videos, code and design assets for projects",
				},
			],
		},
		image: "udemy_nodejs.png",
		completed: true,
	},
	{
		id: 4,
		slug: "the-ultimate-mysql-bootcamp",
		courseName: "The Ultimate MySQL Bootcamp",
		instructor: "Colt Steele",
		Platform: "Udemy",
		completionDate: "Dec 2023",
		certificates: [
			{
				id: 1,
				name: "MySql Bootcamp",
				pdf: "",
				image: "MySql_Colt_Steele.png",
			},
		],
		description: {
			header: "Full stack web application for campground reviews and photos using NodeJS, Express, MongoDB, EJS, PassportJS, Cloudinary",
			learning: [
				{
					point: "Create your own database or interact with existing databases",
				},
				{
					point: "Write complex SQL join queries across multiple tables",
				},
				{
					point: "Master MySQL 8 Window Functions (LEAD, LAG, RANK, etc.)",
				},
				{
					point: "Model real-world data and generate reports using SQL",
				},
				{
					point: "Answer company performance or sales questions using data",
				},
				{ point: "Learns the ins and out of MySQL 8.x syntax" },
			],
		},
		image: "mysql.png",
		completed: true,
	},
	{
		id: 5,
		slug: "internshala-web-development",
		courseName: "Internshala Web Development",
		instructor: "Internshala",
		Platform: "Internshala",
		completionDate: "Sept 2023",
		certificates: [
			{
				id: 1,
				name: "Internshala Web Developement",
				pdf: "Web_Internshala.pdf",
				image: "Web_Internshala.png",
			},
			{
				id: 2,
				name: "N.S.D.C Web Developement",
				pdf: "Web_NSDC.pdf",
				image: "Web_NSDC.png",
			},
		],
		description: {
			header: "Full stack web application for campground reviews and photos using NodeJS, Express, MongoDB, EJS, PassportJS, Cloudinary",
			learning: [],
		},
		image: "internshala_Web_development.png",
		completed: true,
	},
	{
		id: 6,
		slug: "the-git-&-github-bootcamp",
		courseName: "The Git & Github Bootcamp",
		instructor: "Colt Steele",
		Platform: "Udemy",
		completionDate: "",
		certificates: [],
		description: {
			header: "Full stack web application for campground reviews and photos using NodeJS, Express, MongoDB, EJS, PassportJS, Cloudinary",
			learning: [
				{ point: "Understand how Git works behind the scenes" },
				{
					point: "Explain the difference Git objects: trees, blobs, commits, and annotated tags",
				},
				{
					point: "Master the essential Git workflow: adding & committing",
				},
				{ point: "Work with Git branches" },
				{ point: "Perform Git merges and resolve merge conflicts" },
				{ point: "Use Git diff to reveal changes over time" },
				{ point: "Master Git stashing" },
				{
					point: "Undo changes using git restore, git revert, and git reset",
				},
				{ point: "Work with local and remote repositories" },
				{
					point: "Master collaboration workflows: pull requests, 'fork & clone', etc.",
				},
				{
					point: "Squash, clean up, and rewrite history using interactive rebase",
				},
				{
					point: "Retrieve 'lost' work using git reflogs",
				},
				{ point: "Write custom and powerful Git aliases" },
				{ point: "Mark releases and versions using Git tags" },
				{ point: "Host static websites using Github Pages" },
				{ point: "Create markdown READMEs" },
				{ point: "Share code and snippets using Github Gists" },
			],
		},
		image: "github.png",
		completed: false,
	},
	{
		id: 7,
		slug: "100-days-of-python-bootcamp",
		courseName:
			"100 Days of Code: The Complete Python Pro Bootcamp for 2023",
		instructor: "Dr. Angela Yu",
		Platform: "Udemy",
		completionDate: "",
		certificates: [],
		description: {
			header: "Full stack web application for campground reviews and photos using NodeJS, Express, MongoDB, EJS, PassportJS, Cloudinary",
			learning: [
				{
					point: "You will master the Python programming language by building 100 unique projects over 100 days.",
				},
				{
					point: "You will learn automation, game, app and web development, data science and machine learning all using Python.",
				},
				{
					point: "You will be able to program in Python professionally",
				},
				{
					point: "You will learn Selenium, Beautiful Soup, Request, Flask, Pandas, NumPy, Scikit Learn, Plotly, and Matplotlib.",
				},
				{
					point: "Create a portfolio of 100 Python projects to apply for developer jobs",
				},
				{
					point: "Be able to build fully fledged websites and web apps with Python",
				},
				{
					point: "Be able to use Python for data science and machine learning",
				},
				{
					point: "Build games like Blackjack, Pong and Snake using Python",
				},
				{ point: "Build GUIs and Desktop applications with Python" },
			],
		},
		image: "100_days_of_python.png",
		completed: false,
	},
	{
		id: 8,
		slug: "php-for-beginners",
		courseName: "PHP for Beginners",
		instructor: "Edwin Diaz",
		Platform: "Udemy",
		completionDate: "",
		certificates: [],
		description: {
			header: "Full stack web application for campground reviews and photos using NodeJS, Express, MongoDB, EJS, PassportJS, Cloudinary",
			learning: [
				{
					point: "You will learn to create a (CMS) Content Management System like WordPress, Drupal or Joomla",
				},
				{ point: "You will learn how to use Databases" },
				{ point: "You will learn MySQL" },
				{ point: "Object Oriented Programming" },
				{
					point: "You will learn how to launch your application online",
				},
				{ point: "How to use forms to submit data to databases" },
				{
					point: "How to use AJAX to submit data to the server without refreshing the page",
				},
				{ point: "You will learn about PHP security" },
				{ point: "You will learn about sessions" },
				{ point: "Password hashing" },
				{ point: "Email sending" },
				{
					point: "You will learn to use composer (PHP package manager)",
				},
				{
					point: "You will learn to create clean URL's and remove the .php from files",
				},
				{
					point: "You will learn to use bootstrap by getting experience from the project",
				},
				{ point: "You will learn to debug your code" },
				{ point: "You will learn to create pagination" },
				{ point: "You will code refactoring" },
				{ point: "You will learn to debug (fix your code)" },
				{
					point: "You will learn to use an API to bring data from a database to a graphical interface",
				},
				{
					point: "There is so much more and my hands are just tired of typing :)",
				},
			],
		},
		image: "php.png",
		completed: false,
	},
	{
		id: 9,
		slug: "python-django-bootcamp",
		courseName: "Python Django - Full Stack Web Developer Bootcamp",
		instructor: "Jose Portilla",
		Platform: "Udemy",
		completionDate: "",
		certificates: [],
		description: {
			header: "Full stack web application for campground reviews and photos using NodeJS, Express, MongoDB, EJS, PassportJS, Cloudinary",
			learning: [
				{
					point: "Create a fully functional web site using the Full-Stack with Django 1.11",
				},
				{ point: "Learn how to use HTML to create website content" },
				{ point: "Use CSS to create beautifully styled sites" },
				{
					point: "Learn how to take advantage of Bootstrap to quickly style sites",
				},
				{
					point: "Use Javascript to interact with sites on the Front-End",
				},
				{
					point: "Learn how to use jQuery to quickly work with the DOM",
				},
				{ point: "Understand HTTP requests" },
				{ point: "Create fantastic landing pages" },
				{
					point: "Learn the power of Python to code out your web applications",
				},
				{ point: "Use Django as a back end for the websites" },
				{
					point: "Implement a full Models-Views-Templates structure for your site",
				},
			],
		},
		image: "python_django.png",
		completed: false,
	},
];
