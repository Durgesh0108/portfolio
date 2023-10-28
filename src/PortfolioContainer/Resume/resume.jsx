import React from 'react'

import './resume.module.css'

import { EDUCATION, PERSONALSKILLS, SKILLS, ACTIVITIES } from './../../data'

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