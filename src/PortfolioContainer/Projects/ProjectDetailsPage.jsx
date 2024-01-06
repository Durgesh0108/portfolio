import React from "react";
import { Link, useParams } from "react-router-dom";
import { PROJECTS } from "../../data";
import Header from "../Home/Header/Header";
import Card from "../../Components/Card/Card";


const ProjectDetailsPage = async () => {
	const { slug } = useParams();
    const project = PROJECTS.find((course) => course.slug === slug);
    
	// console.log(course.certificates);
	return (
		<div className="bg-indigoP h-screen overflow-auto">
			<Header />
			<div className="relative top-32 text-white font-medium text-lg max-w-7xl m-auto flex flex-col gap-10">
				<div className="grid grid-cols-2 gap-12 ">
					<div className="flex flex-col gap-8 ">
						<div>
							<h1 className="text-4xl font-bold">
								{project.name}
							</h1>
							<p>{project.description}</p>
						</div>
						<div className="flex flex-col gap-3">
							<h1 className="text-2xl font-bold">Technologies</h1>
							<ul className="grid grid-cols-2 gap-4">
								{project.languages.map((language) => (
									<li>
										<Card className="bg-purple-600 p-4 text-2xl flex items-center gap-4 hover:bg-purple-700 hover:scale-105">
											<span className="">
												{language.symbol}
											</span>
											<span>{language.name}</span>
										</Card>
									</li>
								))}
							</ul>
						</div>
						<div className="flex flex-col gap-4">
							<h1 className="text-2xl font-bold">Visit</h1>
							<div className="flex gap-4">
								<a
									href={project.liveLink}
									target="_blank"
									rel="noreferrer"
								>
									<button className="p-2 px-3 md:px-5 border-2 border-purple-500 rounded-full hover:text-white hover:scale-110 hover:bg-orangeP">
										Go Live
									</button>
								</a>
								<Link
									to={`${project.githubLink}`}
									target="_blank"
									rel="noreferrer"
								>
									<button className="p-2 px-3 md:px-5 border-2 border-purple-500 rounded-full hover:text-white hover:scale-110 hover:bg-orangeP">
										Source Code
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-8 h-full overflow-auto px-4 pb-4">
						<img
							src={`/img/${project.slug}/${project.image}`}
							alt=""
							className="w-full h-[250px] rounded-xl"
						/>
						{/* {course.description.learning.length > 0 && (
							<Card className="bg-purple-400 text-black p-4 flex flex-col items-center gap-4">
								<h1 className="text-white font-bold text-2xl">
									Learnings
								</h1>
								<ul className="flex flex-col gap-4 list-disc px-2">
									{course.description.learning.map(
										(point) => (
											<Card className="text-sm bg-purple-700 p-2">
												{point.point}
											</Card>
										)
									)}
								</ul>
							</Card>
						)} */}
					</div>
				</div>
				<div>
					<h1 className="text-2xl font-bold">Screenshots</h1>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetailsPage;
