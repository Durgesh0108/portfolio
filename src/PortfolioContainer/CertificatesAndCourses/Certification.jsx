import React from "react";
import Card from "../../Components/Card/Card";
import "./Index.css";

const Certification = ({ key, certification }) => {
	return (
		<Card key={key} className="bg-white md:pb-3">
			<div className="flex flex-col justify-between h-full gap-4 w-[170px] sm:w-[280px] md:w-[420px]">
				<div className="flex flex-col gap-4 ">
					<div className="overlay-demo">
						<img
							src={`/img/${certification.image}`}
							alt={certification.courseName}
							className="image rounded-lg "
						/>
						{/* <img src={`/img/${project.image}`} alt={project.name} className='image rounded-lg w-[450px] h-[230px]' /> */}
						<div className="middle">
							<figcaption className="text font-semibold text-sm md:text-2xl">
								{certification.courseName}
							</figcaption>
						</div>
					</div>
					<div className="px-4 md:px-3 hidden md:block">
						<p className="font-semibold text-base sm:text-xl md:text-2xl py-2 tracking-wide">
							{certification.courseName}
						</p>
						<p className="text-xs md:text-lg opacity-70 text-justify">
							{certification.description}
						</p>
					</div>
				</div>
				<div className="md:flex md:flex-col gap-4 justify-self-end text-white font-semibold text-xs md:text-base md:px-2 hidden">
					<hr />
					{certification.completed ? (
						<div className="flex justify-evenly">
							<a href={Certification.liveLink}>
								<button className="p-2 px-3 md:px-5 bg-orangeP rounded-2xl hover:text-white">
									Go Live
								</button>
							</a>
							<a href={Certification.githubLink}>
								<button className="p-2 px-3 md:px-5 bg-orangeP rounded-2xl hover:text-white">
									Github
								</button>
							</a>
						</div>
					) : (
						<div className="flex justify-center">
							<a href={"/"}>
								<button className="p-2 px-3 md:px-5 bg-orangeP rounded-2xl hover:text-white">
									In Progress...
								</button>
							</a>
						</div>
					)}
				</div>
			</div>
		</Card>
	);
};

export default Certification;
