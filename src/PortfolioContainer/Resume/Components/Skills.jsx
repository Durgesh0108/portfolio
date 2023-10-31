import React from 'react'

const Skills = ({ SKILLS }) =>
{
    return (
        <div className="flex flex-col h-[550px]" id="Skills">
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
    )
}

export default Skills
