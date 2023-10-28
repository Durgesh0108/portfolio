import React from 'react'
import Project from './Project'

import { PROJECTS } from '../../data'


const Projects = ({ id }) =>
{
    return (
        <div className="bg-indigoP bg-" id={id}>
            <div className='md:container md:m-auto p-5 grid grid-row-2 gap-16 '>
                <div className='justify-self-center'>
                    <h1 className='text-3xl font-bold text-white '>Projects</h1>
                </div>

                <div className='flex gap-8 overflow-auto p-10'>
                    {PROJECTS.map((project) => (
                        <Project key={project.id} project={project} />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Projects
