import React from "react";
import { Link, useParams } from "react-router-dom";
import { PROJECTS } from "../../data";
// import Header from "../Home/Header/Header";
import Card from "../../Components/Card/Card";
import { BasicNavbar } from "../../Components/BasicNavbar";

const ProjectDetailsPage = () => {
	const { slug } = useParams();
	const project = PROJECTS.find((project) => project.slug === slug);

	console.log(project.name);
	return (
		<div className=" bg-indigoP h-screen overflow-auto">
			{/* <BasicNavbar /> */}
			<div className="relative top-32 text-white font-medium text-lg max-w-7xl m-auto flex flex-col gap-10">
				<div className="grid grid-cols-2 gap-12 ">
					<div className="flex flex-col gap-8 ">
						<div className="flex flex-col gap-2">
							<h1 className="text-4xl font-bold ">
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
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<h1>Learnings and Features:</h1>
					<div className="flex gap-10 h-[400px] overflow-auto p-4">
						{project.learnings.length > 0 && (
							<Card className="w-1/2 bg-purple-400 text-black p-4 flex flex-col gap-4 overflow-auto ">
								<h1 className="text-white font-bold text-2xl place-self-center">
									Learnings
								</h1>
								<ul className="flex flex-col gap-4 list-disc px-2">
									{project.learnings.map((learning) => (
										<Card className="text-sm bg-purple-700 p-2">
											{learning.learning}
										</Card>
									))}
								</ul>
							</Card>
						)}

						{project.features.length > 0 && (
							<Card className="w-1/2 bg-purple-400 text-black p-4 flex flex-col gap-4 overflow-auto">
								<h1 className="text-white font-bold text-2xl place-self-center">
									Features
								</h1>
								<ul className="flex flex-col gap-4 list-disc px-2">
									{project.features.map((feature) => (
										<Card className="text-sm bg-purple-700 p-2">
											{feature.feature}
										</Card>
									))}
								</ul>
							</Card>
						)}
					</div>
				</div>

				<div className="">
					<h1 className="text-2xl font-bold">Screenshots</h1>
					<ul className="grid grid-cols-3 gap-4 py-8">
						{project.screenShots.map((screenshot) => (
							<li>
								<img
									src={`/img/${project.slug}/${screenshot.screenshot}`}
									alt=""
									className="rounded-xl"
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetailsPage;
