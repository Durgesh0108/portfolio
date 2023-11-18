// import Typical from 'react-typical'

import { AiFillInstagram } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import "./Profile.css";
import { FaGithub } from "react-icons/fa";
import ScrollService from '../../utilities/ScrollService';
// import Navbar from './../../Components/Navbar/Navbar'
// import Footer from './Footer/Footer'

const Profile = ({ id }) =>
{

    // const scrollService = ScrollService();
    return (
		<>
			{/* <Navbar /> */}
			<div className="home-container relative top-32 mb-32" id={id}>
				<div className="profile-container">
					<div className="profile-parent">
						<div className="profile-details">
							<div className="colz">
								<div className="colz-icons">
									<a
										href="https://www.instagram.com/_durgesh.1510_/"
										className="text-2xl hover:scale-125"
									>
										<i>
											<AiFillInstagram></AiFillInstagram>
										</i>
									</a>
									<a
										href="https://www.linkedin.com/in/durgesh-prajapati-96486a246/"
										className="text-2xl hover:scale-125"
									>
										<i>
											<BsLinkedin></BsLinkedin>
										</i>
									</a>
									<a
										href="https://github.com/Durgesh0108"
										className="text-2xl hover:scale-125"
									>
										<i>
											<FaGithub></FaGithub>
										</i>
									</a>
									{/* <a
										href="https://mail.google.com/mail/?view=cm&fs=1&to=prajapatidurgesh1518@gmail.com"
										className="text-2xl hover:scale-125"
									>
										<i>
											<AiFillInstagram></AiFillInstagram>
										</i>
									</a>
									<a
										href="https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&cc=someone@ola.example&bcc=someone.else@example.com&su=SUBJECT&body=BODY"
										target="_blank"
									>
										Mail Us
									</a> */}
								</div>
							</div>
							<div className="profile-details-name">
								<span className="primary-text">
									Hello, I'm{" "}
									<span className="highlighted-text">
										Durgesh
									</span>
								</span>
							</div>
							<div className="profile-details-role">
								<span className="primary-text">
									<h1>
										Web Developer
										{/* <Typical
                                            loop={Infinity}
                                            steps={[
                                                "Web Developer",
                                                1000,
                                                "Full Stack Developer",
                                                1000,
                                                "MERN Developer",
                                                1000
                                            ]}
                                        /> */}
									</h1>
									<span className="profile-role-tagline">
										Knack of building application with front
										and back end operations
									</span>
								</span>
							</div>
							<div className="profile-options xs:z-10">
								<button
									className="btn primary-btn"
									onClick={() =>
										ScrollService.scrollHandler.scrollToHireMe()
									}
								>
									Hire me
								</button>
								<a
									href="/pdf/Durgesh.pdf"
									download="Durgesh_Resume.pdf"
								>
									<button className="btn highlighted-btn">
										Get Resume
									</button>
								</a>
							</div>
						</div>
						<div className="profile-picture">
							<div className="profile-picture-background"></div>
						</div>
					</div>
				</div>
				{/* <Footer></Footer> */}
			</div>
		</>
	);
}

export default Profile
