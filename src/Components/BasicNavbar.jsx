import React from "react";
import { Link } from "react-router-dom";
import { PiCertificateBold } from "react-icons/pi";
import { GoProjectRoadmap } from "react-icons/go";
import { MdContacts } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export const BasicNavbar = () => {
	return (
		<div className="fixed w-screen z-20 bottom-0 md:top-0">
			<nav className="bg-orangeP dark:bg-gray-900 px-10">
				<div className="max-w-screen-xl py-2 flex flex-wrap items-center justify-between mx-auto text-white ">
					<div className="w-full" id="navbar-default">
						<ul className="font-medium flex justify-around p-2 text-xl md:p-0 rounded-lg xl:gap-18 lg:gap-10 xmd:gap-2 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li>
								<Link
									to="/"
									className="block py-2 px-2  rounded md:bg-transparent md:p-0 dark:text-white"
								>
									<span className="hidden md:block">
										Profile
									</span>
									<CgProfile className="block md:hidden" />
								</Link>
							</li>

							<li>
								<Link
									to="/projects"
									className="block py-2 px-2 rounded md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
								>
									<span className="hidden md:block">
										Projects
									</span>

									<GoProjectRoadmap className="block md:hidden" />
								</Link>
							</li>
							<li>
								<Link
									to="/courses"
									className="block py-2 px-2 rounded md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
								>
									<span className="hidden md:block">
										Courses
									</span>

									<PiCertificateBold className="block md:hidden" />
								</Link>
							</li>
							<li>
								<Link
									to="/contact"
									className="block py-2 px-2 rounded md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
								>
									<span className="hidden md:block">
										Contact Me
									</span>

									<MdContacts className="block md:hidden" />
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
