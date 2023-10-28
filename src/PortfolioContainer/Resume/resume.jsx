import React from 'react'
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoNodejs, BiLogoMongodb, BiLogoPython, BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { SiExpress, SiMysql } from 'react-icons/si'
import './resume.module.css'

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
        id: 3,
        degree: "S.S.C",
        passingYear: 2018,
        collegeName: "S.V.N. English School",
        CollegeLocation: "Kandivali(W) - Mumbai",
        grade: "83.80 %"
    }
]

const SKILLS = [
    {
        id: 1,
        skillname: "HTML5",
        skillpercentage: 90,
        logo: <BiLogoHtml5 />,
        color: "pink-400"
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
        color: "pink-400"
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
        color: "blue-500"
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
    }
]

const ACTIVITIES = [
    {
        id: 1,
        activityname: "ISR Activities(Social Work, Tree Plantation, Teaching Students, Awareness Drives)",
    },
    {
        id: 2,
        activityname: "Runner Up in Halla Bol(Debate Competition)",
    },
    {
        id: 3,
        activityname: "Participated in MUN(Model United Nation)",
    },
    {
        id: 4,
        activityname: "Worked for Hospitality Department in College Confab Event",
    }
]

const PERSONALSKILLS = [
    {
        id: 1,
        personalskillname: "Leadership",
        percentagename: "80%",

    },
    {
        id: 2,
        personalskillname: "Teamwork",
        percentagename: "90%",
    },
    {
        id: 3,
        personalskillname: "Time Management",
        percentagename: "70%",
    },
    {
        id: 4,
        personalskillname: "Communication Skills",
        percentagename: "85%",
    }, {
        id: 5,
        personalskillname: "Public Speaking",
        percentagename: "80%",
    },
    {
        id: 2,
        personalskillname: "Problem Solving",
        percentagename: "90%",
    },

]

const Resume = ({ id }) =>
{
    return (
        <>
            <div className="bg-indigoP bg-" >
                <span id={id} ></span>
                <div className='md:container md:m-auto p-5 grid grid-row-2 gap-16 '>
                    <div className='justify-self-center'>
                        <h1 className='text-3xl font-bold text-white '>Resume</h1>
                    </div>
                    <div className='bg-white rounded-xl grid md:grid-cols-8 h-[600px] grid-cols-1'>

                        <div id="list-example" className="resume-group grid grid-cols-2 h-fit sm:grid-cols-4 md:h-auto md:grid md:grid-cols-1 text-center text-white font-semibold text-xl col-span-2 rounded-xl">
                            {/* <div className=""> */}
                            <a className="list-group-item list-group-item-action bg-orangeP text-white hover:bg-orange-400" href="#education">Education</a>
                            {/* </div> */}
                            {/* <div className=""> */}
                            <a className="list-group-item list-group-item-action bg-orangeP text-white hover:bg-orange-400" href="#programmingLanguage">Programming Language</a>
                            {/* </div> */}
                            {/* <div className=""> */}
                            <a className="list-group-item list-group-item-action bg-orangeP text-white hover:bg-orange-400" href="#personal_skills">Personal Skills</a>
                            {/* </div> */}
                            {/* <div className=""> */}
                            <a className="list-group-item list-group-item-action bg-orangeP text-white hover:bg-orange-400" href="#activities">Activites</a>
                            {/* </div> */}
                        </div>
                        <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example md:container md:m-auto p-4 grid grid-col-1 gap-16 col-span-6 h-[420px] md:h-[550px] scroll-smooth overflow-y-auto py-4" tabindex="0">
                            <div className="flex flex-col h-[550px]" id="education">
                                <h1 className='font-bold text-2xl my-3 self-center'>Education</h1>
                                <div className='h-[480px] overflow-auto'>
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
                            <div className="flex flex-col h-[550px]" id="programmingLanguage">
                                <h1 className='font-bold text-2xl my-3 self-center'>Skills</h1>
                                <div className='grid grid-cols-2 gap-6 h-[480px] overflow-auto'>
                                    {SKILLS.map((skill) => (
                                        <div key={skill.id}>
                                            <div className={`mb-1 text-xl font-bold text-[${skill.color}] dark:text-white flex gap-2 items-center`}>
                                                {skill.logo}
                                                <div className="label">
                                                    <span>{skill.skillname}</span>
                                                </div>
                                            </div>
                                            <div class={`w-full bg-slate-300 rounded-lg dark:bg-gray-700`}>
                                                <div class={`bg-${skill.color} w-[${skill.skillpercentage}%] text-xs  text-black font-semibold text-center p-0.5 leading-none rounded-lg`}> {skill.skillpercentage}%</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col h-[550px]" id="personal_skills">
                                <h1 className='font-bold text-2xl my-3 self-center'>Personal Skills</h1>
                                <div className='h-[480px] overflow-auto'>
                                    {PERSONALSKILLS.map((skills) =>
                                    (
                                        <div key={skills.id} className='my-4 bg-lightIndigo p-3 rounded-xl font-semibold'>
                                            <h2>{skills.personalskillname}.</h2>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col h-[550px]" id="activities">
                                <h1 className='font-bold text-2xl my-3 self-center'>Activities</h1>
                                <div className='h-[480px] overflow-auto'>
                                    {ACTIVITIES.map((activity) =>
                                    (
                                        <div key={activity.id} className='my-4 bg-lightIndigo p-3 rounded-xl font-semibold'>
                                            <h2>{activity.activityname}.</h2>
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