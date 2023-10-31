import React from 'react'

const Education = ({ EDUCATION }) =>
{
    return (
        <div className="flex flex-col h-[550px]" id="Education">
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
    )
}

export default Education
