import React from "react";
import Section from "../../Components/Section";

const AboutMe = ({ id }) => {
	return (
		<Section>
			<div className="bg-indigoP p-5" id={id}>
				<div className="flex flex-col items-center gap-16 lg:container lg:m-auto">
					<div className="text-white justify-items-center">
						<h2 className="text-3xl font-semibold">About Me</h2>
					</div>
					<div className="h-[650px] p-3 flex flex-col items-center gap-5 bg-lightIndigo rounded-xl md:flex md:flex-row md:justify-between md:h-[550px] md:items-center">
						<div className="profile-picture m-0 ">
							<div className="profile-picture-background"></div>
						</div>
						<div className="box-content h-[350px] overflow-y-scroll text-indigoP font-medium  xl:w-8/12 md:w-7/12 md:h-[480px]">
							<p className="text-justify m-2">
								As a passionate and driven individual with a
								background in Web development. Seeking to
								leverage my skills and experience to contribute
								to the success of a company.
							</p>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default AboutMe;
