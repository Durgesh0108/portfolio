import React from "react";
import Card from "../../Components/Card/Card";
import "./Index.css";
import { FaGithub } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

// import { Tilt } from 'react-tilt'

// const defaultOptions = {
//     reverse: false,  // reverse the tilt direction
//     max: 30,     // max tilt rotation (degrees)
//     perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
//     scale: 1.08,    // 2 = 200%, 1.5 = 150%, etc..
//     speed: 1000,   // Speed of the enter/exit transition
//     transition: true,   // Set a transition on enter/exit.
//     axis: null,   // What axis should be disabled. Can be X or Y.
//     reset: true,    // If the tilt effect has to be reset on exit.
//     easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
// }

const Project = ({ key, project }) => {
	return (
		// <Tilt options={defaultOptions} className="h-full">
		//     <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
		<Card key={key} className="bg-white md:pb-3 h-full">
			<div className="flex flex-col justify-between h-full gap-4 w-[170px] sm:w-[280px] md:w-[420px]">
				<div className="flex flex-col gap-4 ">
					<div className="overlay-demo">
                        <div className="links absolute flex w-full justify-between p-4 text-4xl">
							<FaArrowRight />
							<FaGithub />
						</div>
						<img
							src={`/img/${project.image}`}
							alt={project.name}
							className="image rounded-lg"
						/>
						{/* <img src={`/img/${project.image}`} alt={project.name} className='image rounded-lg w-[450px] h-[230px]' /> */}
						<div className="middle">
							<figcaption className="text font-semibold text-sm md:text-2xl">
								{project.name}
							</figcaption>
						</div>
					</div>
					<div className="px-4 md:px-3 hidden md:block">
						<p className="font-semibold text-base sm:text-xl md:text-2xl py-2">
							{project.name}
						</p>
						<p className="text-xs md:text-lg opacity-70 text-justify">
							{project.description}
						</p>
					</div>
				</div>
				<div className="md:flex md:flex-col gap-4 text-white font-semibold text-xs md:text-base md:px-2 hidden">
					<hr />
					<div className="flex justify-evenly">
						<a
							href={project.liveLink}
							target="_blank"
							rel="noreferrer"
						>
							<button className="p-2 px-3 md:px-5 bg-orangeP rounded-2xl hover:text-white hover:scale-110 ">
								Go Live
							</button>
						</a>
						<a
							href={project.githubLink}
							target="_blank"
							rel="noreferrer"
						>
							<button className="p-2 px-3 md:px-5 bg-orangeP rounded-2xl hover:text-white hover:scale-110">
								Github
							</button>
						</a>
					</div>
				</div>
			</div>
		</Card>
		// </Tilt>
	);
};

export default Project;
