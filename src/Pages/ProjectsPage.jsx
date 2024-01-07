import React from "react";

import { PROJECTS } from "../data";
import Section from "../Components/Section";
import Project from "../PortfolioContainer/Projects/Project";
import { BasicNavbar } from "../Components/BasicNavbar";

export const ProjectsPage = () => {
	return (
		<div className="bg-indigoP w-screen h-screen overflow-auto">
			<BasicNavbar />
			<Section>
				<div className="md:container md:m-auto p-3 md:p-5 grid grid-row-2 gap-10 top-28 relative max-w-7xl px-24">
					<div className="flex justify-center items-center">
						<h1 className="text-3xl font-bold text-white place-self-center">
							Projects
						</h1>
					</div>

					<div className="grid grid-cols-3 gap-12">
						{PROJECTS.map((project) => (
							<Project key={project.id} project={project} />
						))}
					</div>
				</div>
			</Section>
		</div>
	);
};
