import React from "react";
import Project from "./Project";

import { PROJECTS } from "../../data";
import Section from "../../Components/Section";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Projects = ({ id }) => {
	return (
		<Section>
			<div className="bg-indigoP px-4" id={id}>
				<div className="md:container md:m-auto p-3 md:p-5 grid grid-row-2 gap-10 ">
					<div className="flex justify-between items-center">
						<h1 className="text-3xl font-bold text-white ">
							Projects
						</h1>
						<Link
							to="/projects"
							className="justify-self-center flex gap-2 items-center text-white font-bold text-base"
						>
							<p>View All Projects</p>
							<FaArrowRight />
						</Link>
					</div>

					<div className="flex gap-4 md:gap-8 overflow-auto p-2 sm:p-5 md:p-8">
						{PROJECTS.map((project) => (
							<Project key={project.id} project={project} />
						))}
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Projects;
