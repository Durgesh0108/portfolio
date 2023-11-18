import React, { useState } from "react";
import Card from "../../Components/Card/Card";
import { FaRegUser } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const ContactMe = ({ id }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [bool, setBool] = useState(false);

	const nameHandler = (evt) => {
		console.log(name);
		setName(evt.target.value);
	};

	const emailHandler = (evt) => {
		console.log(email);
		setEmail(evt.target.value);
	};
	const messageHandler = (evt) => {
		console.log(message);
		setMessage(evt.target.value);
	};

	const formSubmitHandler = async (evt) => {
		console.log("Form Submitted from frontend");
		evt.preventDefault();
		try {
			let data = {
				name,
				email,
				message,
			};
			setBool(true);
			const res = await axios.post("/contact", data);
			if (
				name.trim().length === 0 ||
				email.trim().length === 0 ||
				message.trim().length === 0
			) {
				console.log(res.data.msg);
				toast.error(res.data.msg);
				setBool(false);
			} else if (res.status === 200) {
				toast.success(res.data.msg);
				setBool(true);
			}
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	const submitText = bool ? "Sending" : "Send";
	return (
		<Card>
			<div className="bg-indigoP " id={id}>
				<div className="md:container md:m-auto p-5 grid grid-row-2 gap-16 ">
					<div className="justify-self-center">
						<h1 className="text-3xl font-bold text-white ">
							Contact Me
						</h1>
					</div>
					<div className="bg-white rounded-xl p-4">
						<form
							action="/contact"
							method="post"
							onSubmit={formSubmitHandler}
						>
							<div className="flex flex-col gap-4">
								<div>
									<label
										for="name"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Your Name
									</label>
									<div className="relative">
										<div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
											{/* <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                            </svg> */}
											<FaRegUser />
										</div>
										<input
											type="text"
											id="name"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="User Name"
											onChange={nameHandler}
											value={name}
										/>
									</div>
								</div>
								<div>
									<label
										for="email-address-icon"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Your Email
									</label>
									<div className="relative">
										<div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
											<svg
												className="w-4 h-4 text-gray-500 dark:text-gray-400"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 20 16"
											>
												<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
												<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
											</svg>
										</div>
										<input
											type="text"
											id="email-address-icon"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="name@gmail.com"
											onChange={emailHandler}
											value={email}
										/>
									</div>
								</div>
								<div>
									<label
										for="message"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Your message
									</label>
									<textarea
										id="message"
										rows="4"
										className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Leave a message..."
										onChange={messageHandler}
										value={message}
									></textarea>
								</div>
								<div>
									<button
										type="submit"
										className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
									>
										{submitText}
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Card>
	);
};

export default ContactMe;
