import React from 'react'

const PersonalSkills = ({PERSONALSKILLS}) =>
{
    return (
        <div className="flex flex-col h-[550px]" id="Perosnal Skills">
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
    )
}

export default PersonalSkills
