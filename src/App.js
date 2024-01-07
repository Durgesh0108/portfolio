import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import CourseDetailPage from "./PortfolioContainer/CertificatesAndCourses/CourseDetailPage";
import ProjectDetailsPage from "./PortfolioContainer/Projects/ProjectDetailsPage";
import { ProjectsPage } from "./Pages/ProjectsPage";
import { CoursePage } from "./Pages/CoursePage";

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
						element: <CoursePage />,
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
						element: <ProjectsPage />,
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
