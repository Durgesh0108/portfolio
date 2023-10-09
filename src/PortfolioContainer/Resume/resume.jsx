import React from 'react'
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoNodejs, BiLogoMongodb, BiLogoPython, BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { SiExpress, SiMysql } from 'react-icons/si'

const EDUCATION = [
    {
        id: 1,
        degree: "B.Sc.Computer Science",
        passingYear: 2023,
        collegeName: "Patkar Varde College",
        CollegeLocation: "Goregaon(W) - Mumbai",
        grade: "9.2 CGPA"
    },
    {
        id: 2,
        degree: "H.S.C",
        passingYear: 2020,
        collegeName: "Rizvi College of Art, Commerce and Science",
        CollegeLocation: "Bandra(W) - Mumbai",
        grade: "66.00 %"
    },
    {
        id: 1,
        degree: "S.S.C",
        passingYear: 2018,
        collegeName: "S.V.N. English School",
        CollegeLocation: "Kandivali(W) - Mumbai",
        grade: "83.80 %"
    },
]

const SKILLS = [
    {
        id: 1,
        skillname: "HTML5",
        skillpercentage: 90,
        logo: <BiLogoHtml5 />,
        // color: "#f57118"
        color: "orange-500"
    },
    {
        id: 2,
        skillname: "CSS",
        skillpercentage: 80,
        logo: <BiLogoCss3 />,
        color: "blue-500"
    },
    {
        id: 3,
        skillname: "Javascript",
        skillpercentage: 70,
        logo: <BiLogoJavascript />,
        color: "yellow-300"
    },
    {
        id: 4,
        skillname: "Node Js",
        skillpercentage: 70,
        logo: <BiLogoNodejs />,
        color: "lime-400"
    },
    {
        id: 5,
        skillname: "Express Js",
        skillpercentage: 80,
        logo: <SiExpress />,
        color: "yellow-400"
    },
    {
        id: 6,
        skillname: "MongoDB",
        skillpercentage: 70,
        logo: <BiLogoMongodb />,
        color: "green-400"
    },
    {
        id: 7,
        skillname: "MySql",
        skillpercentage: 60,
        logo: <SiMysql />,
        color: "orange-500"
    },
    {
        id: 8,
        skillname: "Python",
        skillpercentage: 60,
        logo: <BiLogoPython />,
        color: "yellow-300"
    },
    {
        id: 9,
        skillname: "React",
        skillpercentage: 60,
        logo: <BiLogoReact />,
        color: "sky-500"
    },
    {
        id: 10,
        skillname: "Tailwind CSS",
        skillpercentage: 70,
        logo: <BiLogoTailwindCss />,
        color: "teal-500"
    },
    {
        id: 11,
        skillname: "Bootstarp",
        skillpercentage: 60,
        logo: <BsFillBootstrapFill />,
        color: "indigo-500"
    },

]

const Resume = ({ id }) =>
{
    return (
        <>
            <div className="bg-indigoP bg-" id={id}>
                <div className='md:container md:m-auto p-5 grid grid-row-2 gap-16 '>
                    <div className='justify-self-center'>
                        <h1 className='text-3xl font-bold text-white '>Resume</h1>
                    </div>
                    <div className='bg-white rounded-xl grid md:grid-cols-8 h-[600px] grid-cols-1'>

                        <div id="list-example" className="list-group grid grid-cols-2 h-fit sm:grid-cols-4 md:h-auto md:grid md:grid-cols-1 text-center text-white font-semibold text-xl col-span-2 ">
                            <a className="list-group-item list-group-item-action bg-orangeP text-white hover:bg-orange-300 " href="#education">Education</a>
                            <a className="list-group-item list-group-item-action bg-orangeP text-white hover:bg-orange-300" href="#skills">Skills</a>
                            <a className="list-group-item list-group-item-action bg-orangeP text-white hover:bg-orange-300" href="#list-item-3">Item 3</a>
                            <a className="list-group-item list-group-item-action bg-orangeP text-white hover:bg-orange-300" href="#list-item-4">Item 4</a>
                        </div>
                        <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example container m-auto p-4 col-span-6 h-[450px] md:h-[550px] scroll-smooth overflow-y-auto" tabindex="0">
                            <div className="flex flex-col" id="education">
                                <h1 className='font-bold text-2xl my-3 self-center'>Education</h1>
                                <div className=''>
                                    {EDUCATION.map((edu) =>
                                    (
                                        <div key={edu.id} className='my-4 bg-lightIndigo p-3 rounded-xl font-semibold'>
                                            <h2>{edu.degree} - {edu.grade}</h2>
                                            <p>From: {edu.collegeName}</p>
                                            <p>Passed Out: {edu.passingYear}</p>
                                            <p>{edu.CollegeLocation}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col " id="skills">
                                <h1 className='font-bold text-2xl my-3 self-center'>Skills</h1>
                                <div className='grid grid-cols-2'>
                                    {SKILLS.map((skill) => (
                                        <div key={skill.id}>
                                            <div className={`mb-1 text-base font-medium text-[${skill.color}] dark:text-white flex gap-2 items-center`}>
                                                {skill.logo}
                                                <div className="label">
                                                    <span>{skill.skillname}</span>
                                                </div>
                                            </div>
                                            <div class={`w-full bg-slate-300 rounded-full dark:bg-gray-700`}>
                                                <div class={`bg-${skill.color} w-[${skill.skillpercentage}%] text-xs font-medium text-black font-semibold text-center p-0.5 leading-none rounded-full transition-colors`}> {skill.skillpercentage}%</div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Resume

    // < div className = "mb-1 text-base font-medium text-blue-700 dark:text-blue-500" > Blue</ >
    //                             <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
    //                                 <div className="bg-blue-600 h-2.5 rounded-full w-[50%]"></div>
    //                             </div>
    //                             <div className="mb-1 text-base font-medium text-red-700 dark:text-red-500">Red</div>
    //                             <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
    //                                 <div className="bg-red-600 h-2.5 rounded-full dark:bg-red-500"></div>
    //                             </div>
    //                             <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">Green</div>
    //                             <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
    //                                 <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500"></div>
    //                             </div>
    //                             <div className="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">Yellow</div>
    //                             <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
    //                                 <div className="bg-yellow-400 h-2.5 rounded-full"></div>
    //                             </div>
    //                             <div className="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-500">Indigo</div>
    //                             <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
    //                                 <div className="bg-indigo-600 h-2.5 rounded-full dark:bg-indigo-500 "></div>
    //                             </div>
    //                             <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">Purple</div>
    //                             <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
    //                                 <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500"></div>
    //                             </div>