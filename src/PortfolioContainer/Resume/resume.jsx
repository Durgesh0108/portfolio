import React, { useState } from "react";
import {
	RESUME_SCREEN,
	GET_RESUME_SCREEN_INDEX,
} from "./../../utilities/commonUtils";
import ScrollService from "./../../utilities/ScrollService";

import "./resume.module.css";

import { EDUCATION, PERSONALSKILLS, SKILLS, ACTIVITIES } from "./../../data";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import PersonalSkills from "./Components/PeronalSkills";
import Activities from "./Components/Activities";
import Section from "../../Components/Section";

const Resume = ({ id }) => {
	const [selectedScreen, setSelectedScreen] = useState(0);
	const [showHeadingOptions, setShowHeadingoptions] = useState(false);

	const updateCurrentScreen = (currentScreen) => {
		if (!currentScreen || !currentScreen.screenInView) return;
		let screenIndex = GET_RESUME_SCREEN_INDEX(currentScreen.screenInView);
		if (screenIndex < 0) return;
	};

	let currentScreenSubscription =
		ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen);

	const getHeaderOptions = () => {
		return RESUME_SCREEN.map((screen, i) => (
			<div
				key={screen.screen_name}
				className={`list-group-item list-group-item-action bg-orangeP text-white hover:bg-orange-400 cursor-pointer ${getHeaderOptionsClass(
					i
				)}`}
				onClick={() => switchScreen(i, screen)}
			>
				<span>{screen.screen_name}</span>
			</div>
		));
	};

	const getHeaderOptionsClass = (index) => {
		let classes = "header-option ";
		if (index < RESUME_SCREEN.length - 1)
			classes += "header-options-seperator";

		if (selectedScreen === index) classes += "selected-header-option";
		return;
	};

	const switchScreen = (index, screen) => {
		let screenComponent = document.getElementById(screen.screen_name);
		if (!screenComponent) return;

		screenComponent.scrollIntoView({ behavior: "smooth" });
		setSelectedScreen(index);
		setShowHeadingoptions(false);
	};
	return (
		<>
			<Section>
				<div className="bg-indigoP">
					<span id={id}></span>
					<div className="md:container md:m-auto p-5 grid grid-row-2 gap-16 ">
						<div className="justify-self-center">
							<h1 className="text-3xl font-bold text-white ">
								Resume
							</h1>
						</div>
						<div className="bg-white rounded-xl grid md:grid-cols-8 h-[600px] grid-cols-1">
							<div
								id="list-example"
								className="resume-group grid grid-cols-2 h-full sm:grid-cols-4 md:h-auto md:grid md:grid-cols-1 text-center text-white font-semibold text-xl col-span-2 rounded-xl "
							>
								{getHeaderOptions()}
							</div>
							<div
								data-bs-spy="scroll"
								data-bs-target="#list-example"
								data-bs-offset="0"
								className="scrollspy-example md:container md:m-auto p-4 grid grid-col-1 gap-16 col-span-6 h-[420px] md:h-[550px] scroll-smooth overflow-y-auto py-4"
								tabindex="0"
							>
								<Education EDUCATION={EDUCATION} />
								<Skills SKILLS={SKILLS} />
								<PersonalSkills
									PERSONALSKILLS={PERSONALSKILLS}
								/>
								<Activities ACTIVITIES={ACTIVITIES} />
							</div>
						</div>
					</div>
				</div>
			</Section>
		</>
	);
};

export default Resume;
