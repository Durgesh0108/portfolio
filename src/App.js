import "./App.css";

// import Navbar from "./Components/Navbar/Navbar";
// import Header from "./PortfolioContainer/Home/Header/Header";
// import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Certifications from "./PortfolioContainer/CertificatesAndCourses/Certifications";
import CourseDetailPage from "./PortfolioContainer/CertificatesAndCourses/CourseDetailPage";
import Projects from "./PortfolioContainer/Projects/Projects";
import ProjectDetailsPage from "./PortfolioContainer/Projects/ProjectDetailsPage";

const router = createBrowserRouter([
	{
		path: "/",
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "courses",
				children: [
					{
						index: true,
						element: <Certifications />,
					},
					{
						path: ":slug", // dynamic path parameter
						element: <CourseDetailPage />,
					},
				],
			},
			{
				path: "projects",
				children: [
					{
						index: true,
						element: <Projects />,
					},
					{
						path: ":slug", // dynamic path parameter
						element: <ProjectDetailsPage />,
					},
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
