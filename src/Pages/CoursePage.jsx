import React from "react";
import { CERTIFICATION_COURSES } from "../data";
import Certification from "../PortfolioContainer/CertificatesAndCourses/Certification";
import Section from "../Components/Section";
import { BasicNavbar } from "../Components/BasicNavbar";

export const CoursePage = () => {
	return (
		<div className="bg-indigoP w-screen h-screen overflow-auto">
			<BasicNavbar />
			<Section>
				<div className="md:container md:m-auto p-3 md:p-5 grid grid-row-2 gap-10 top-28 relative max-w-7xl px-24">
					<div className="flex justify-center items-center">
						<h1 className="text-3xl font-bold text-white place-self-center">
							Courses
						</h1>
					</div>

					<div className="grid grid-cols-3 gap-12">
						{CERTIFICATION_COURSES.map((certification) => (
							<Certification
								key={certification.id}
								certification={certification}
							/>
						))}
					</div>
				</div>
			</Section>
		</div>
	);
};
