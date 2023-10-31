import React, { useState } from 'react'
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from '../../../utilities/commonUtils'
import ScrollService from '../../../utilities/ScrollService'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import './Header.css'

import 'flowbite';
import './../../../Components/Navbar/Navbar.css'

export default function Header()
{
    const [ selectedScreen, setSelectedScreen ] = useState(0)
    const [ showHeadingOptions, setShowHeadingoptions ] = useState(false)

    const updateCurrentScreen = (currentScreen) =>
    {
        if (!currentScreen || !currentScreen.screenInView)
            return
        let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView)
        if (screenIndex < 0)
            return
    }

    let currentScreenSubscription = ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen)

    const getHeaderOptions = () =>
    {
        return (
            TOTAL_SCREENS.map((screen, i) => (
                <div key={screen.screen_name} className={`cursor-pointer ${getHeaderOptionsClass(i)}`} onClick={() => switchScreen(i, screen)}>
                    <span>{screen.screen_name}</span>
                </div>
            ))
        )
    }


    const getHeaderOptionsClass = (index) =>
    {
        let classes = 'header-option ';
        if (index < TOTAL_SCREENS.length - 1)
            classes += "header-options-seperator"

        if (selectedScreen === index)
            classes += "selected-header-option";
        return
    }

    const switchScreen = (index, screen) =>
    {
        let screenComponent = document.getElementById(screen.screen_name);
        if (!screenComponent) return;

        screenComponent.scrollIntoView({ behavior: "smooth" });
        setSelectedScreen(index);
        setShowHeadingoptions(false)
    }
    return (
        <div className="fixed w-screen z-20" >
            <nav className="bg-orangeP dark:bg-gray-900 px-10" >
                <div className="max-w-screen-xl py-2 flex flex-wrap items-center justify-between mx-auto text-white ">
                    <div href="#profile" className="flex gap-5">
                        <div className='h-20 w-20'>
                            <div className="profile-picture-logo"></div>
                        </div>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Durgesh</span>
                    </div>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium gap-3 flex flex-col p-2 text-base xmd:text-xl md:p-0 rounded-lg md:flex-row md:gap-6 xl:gap-18 lg:gap-10 xmd:gap-2 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {getHeaderOptions()}
                            {/* <li>
                                <a href="#Profile" className="block py-2 px-2  rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">Profile</a>
                            </li>
                            <li>
                                <a href="#About Me" className="block py-2 px-2  rounded md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Me</a>
                            </li>
                            <li>
                                <a href="#Resume" className="block py-2 px-2  rounded md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Resume</a>
                            </li>
                            <li>
                                <a href="#Projects" className="block py-2 px-2 rounded md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
                            </li>
                            <li>
                                <a href="#Certifications" className="block py-2 px-2 rounded md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Certifications</a>
                            </li>
                            <li>
                                <a href="#contactMe" className="block py-2 px-2 rounded md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Me</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </ nav>
        </div>
    )
}
