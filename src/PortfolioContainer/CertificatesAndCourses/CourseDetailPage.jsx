import React from "react";
import { Link, useParams } from "react-router-dom";
import { CERTIFICATION_COURSES } from "../../data";
import Card from "../../Components/Card/Card";
import { FaArrowLeft } from "react-icons/fa";

// import { BasicNavbar } from "../../Components/BasicNavbar";

const CourseDetailPage = () => {
	const { slug } = useParams();
	const course = CERTIFICATION_COURSES.find((course) => course.slug === slug);
	console.log(course.certificates);
	return (
		<div className="bg-indigoP h-screen overflow-auto">
			{/* <BasicNavbar /> */}
			<div className="py-12 text-white font-medium text-lg max-w-7xl m-auto flex flex-col gap-12">
				<Link
					to="/courses"
					className="text-2xl text-white font-bold hover:text-inherit flex gap-4 items-center"
				>
					<FaArrowLeft />
					All Courses
				</Link>
				<div className="grid grid-cols-2 gap-12 h-[550px] ">
					<div className="flex flex-col gap-8 ">
						<div>
							<h1 className="text-4xl font-bold">
								{course.courseName}
							</h1>
							<p>{course.description.header}</p>
							<Link className="my-4">
								<p className="font-bold underline text-white underline-offset-4">
									{course.Platform} - {course.instructor}
								</p>
							</Link>
						</div>
						<div>
							{course.certificates.length > 0 ? (
								<ul className="flex flex-col gap-4">
									{course.certificates.map((certificate) => (
										<li>
											<img
												src={`/pdf/${certificate.image}`}
												alt=""
												className="w-full h-[320px]"
											/>
										</li>
									))}
								</ul>
							) : (
								<p className="text-white font-medium text-xl">
									Course Still In Progress. Certificate will
									be Available Soon...
								</p>
							)}
						</div>
					</div>
					<div className="flex flex-col gap-8 h-full overflow-auto px-4 pb-4">
						<img
							src={`/img/${course.image}`}
							alt=""
							className="w-full h-[250px] rounded-xl"
						/>
						{course.description.learning.length > 0 && (
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
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseDetailPage;
