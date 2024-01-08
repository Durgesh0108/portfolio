import React from "react";
import { CERTIFICATION_COURSES } from "../data";
import Section from "../Components/Section";
// import { BasicNavbar } from "../Components/BasicNavbar";
import { Link } from "react-router-dom";
import Card from "../Components/Card/Card";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export const CoursePage = () => {
	return (
		<div className="bg-indigoP w-screen h-full overflow-auto py-12">
			{/* <BasicNavbar /> */}
			<Section className="flex flex-col gap-4">
				<div className="flex justify-between">
					<Link
						to="/"
						className="text-2xl text-white font-bold hover:text-inherit flex gap-4 items-center"
					>
						<FaArrowLeft />
						Back To Profile
					</Link>
					<Link
						to="/projects"
						className="text-2xl text-white font-bold hover:text-inherit flex gap-4 items-center"
					>
						All Projects
						<FaArrowRight/>
					</Link>
				</div>
				<div className="grid grid-row-2 gap-10 ">
					<div className="flex justify-center items-center">
						<h1 className="text-3xl font-bold text-white place-self-center">
							Courses
						</h1>
					</div>

					<div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
						{CERTIFICATION_COURSES.map((certification) => (
							<Link
								to={`/courses/${certification.slug}`}
								key={certification.id}
								className="hover:no-underline hover:text-black"
							>
								<Card className="bg-white md:pb-3 h-full">
									{/* <Card className="bg-purple-700 text-white md:pb-3 h-full"></Card> */}
									<div className="flex flex-col justify-between h-full gap-4 ">
										<div className="grid md:grid-cols-1 grid-cols-2 gap-4 ">
											<div className="overlay-demo w-1/2 md:w-full">
												<img
													src={`/img/${certification.image}`}
													alt={
														certification.courseName
													}
													className="image rounded-lg "
												/>
												{/* <img src={`/img/${project.image}`} alt={project.name} className='image rounded-lg w-[450px] h-[230px]' /> */}
												<div className="middle">
													<figcaption className="text font-semibold text-sm md:text-2xl">
														{
															certification.courseName
														}
													</figcaption>
												</div>
											</div>
											<div className="px-4 md:px-3 md:block">
												<p className="font-semibold text-lg md:text-2xl py-2 tracking-wide">
													{certification.courseName}
												</p>
												{/* <div className="w-1/2"> */}
												{/* <p className="text-xs md:text-lg opacity-70 text-justify overflow-hidden text-ellipsis"> */}
												<p className="text-xs md:text-lg opacity-70 text-justify md:block hidden">
													{
														certification
															.description.header
													}
												</p>
												{/* </div> */}
											</div>
										</div>
										<div className="md:flex md:flex-col gap-4 justify-self-end text-white font-semibold text-xs md:text-base md:px-2 hidden">
											<hr />
											{certification.completed ? (
												<div className="flex justify-evenly">
													<Link
														to={`/courses/${certification.slug}`}
													>
														<button className="p-2 px-3 md:px-5 bg-orangeP rounded-2xl hover:text-white">
															View Details
														</button>
													</Link>
													{/* <a href={Certification.githubLink}>
									<button className="p-2 px-3 md:px-5 bg-orangeP rounded-2xl hover:text-white">
										Github
									</button>
								</a> */}
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
							</Link>
						))}
					</div>
				</div>
			</Section>
		</div>
	);
};
