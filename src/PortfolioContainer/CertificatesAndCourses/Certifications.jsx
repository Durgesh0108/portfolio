import React from 'react'
import { CERTIFICATION_COURSES } from '../../data'
import Certification from './Certification'

const Certifications = ({id}) =>
{
    return (
        <div className="bg-indigoP bg-" id={id}>
            <div className='md:container md:m-auto p-5 grid grid-row-2 gap-16 '>
                <div className='justify-self-center'>
                    <h1 className='text-3xl font-bold text-white '>Certification Courses</h1>
                </div>

                <div className='flex gap-8 overflow-auto p-10'>
                    {CERTIFICATION_COURSES.map((certification) => (
                        <Certification key={certification.id} certification={certification} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Certifications