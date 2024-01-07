import React from "react";
import { Link } from "react-router-dom";

export const BasicNavbar = () => {
	return (
		<div className="fixed w-screen z-20">
			<nav className="bg-orangeP dark:bg-gray-900 px-10">
				<div className="max-w-screen-xl py-2 flex flex-wrap items-center justify-between mx-auto text-white ">
					<div
						className="hidden w-full md:block md:w-auto"
						id="navbar-default"
					>
						<ul className="font-medium flex flex-col p-2 text-xl md:p-0 rounded-lg md:flex-row xl:gap-18 lg:gap-10 xmd:gap-2 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li>
								<Link
									to="/"
									className="block py-2 px-2  rounded md:bg-transparent md:p-0 dark:text-white"
								>
									Profile
								</Link>
							</li>

							<li>
								<Link
									to="/projects"
									className="block py-2 px-2 rounded md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
								>
									Projects
								</Link>
							</li>
							<li>
								<Link
									to="/courses"
									className="block py-2 px-2 rounded md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
								>
									Courses
								</Link>
							</li>
							<li>
								<Link
									to="/contact"
									className="block py-2 px-2 rounded md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
								>
									Contact Me
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
