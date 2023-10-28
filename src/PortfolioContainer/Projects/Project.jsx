import React from 'react'
import Card from '../../Components/Card/Card'
import './Index.css'


const Project = ({ key, project }) =>
{
    return (
        <Card key={key} className="bg-white p-[8px] md:p-3  ">
            <div className='flex flex-col justify-between gap-4 w-[160px] sm:w-[280px] md:w-[420px]'>
                <div className="flex flex-col gap-4 ">
                    <div className='overlay-demo'>
                        <img src={`/img/${project.image}`} alt={project.name} className='image rounded-lg ' />
                        {/* <img src={`/img/${project.image}`} alt={project.name} className='image rounded-lg w-[450px] h-[230px]' /> */}
                        <div className="middle">
                            <figcaption className='text font-semibold text-sm md:text-2xl'>{project.name}</figcaption>
                        </div>
                    </div>
                    <div className='md:px-3'>
                        <p className='font-semibold text-base sm:text-xl md:text-2xl py-2'>{project.name}</p>
                        <p className='text-xs md:text-lg opacity-70 text-justify'>{project.description}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 justify-self-end text-white font-semibold text-xs md:text-base md:px-2'>
                    <hr />
                    <div className='flex justify-evenly'>
                        <a href={project.liveLink}>
                            <button className='p-2 px-3 md:px-5 bg-orangeP rounded-2xl hover:text-white'>Go Live</button>
                        </a>
                        <a href={project.githubLink}>
                            <button className='p-2 px-3 md:px-5 bg-orangeP rounded-2xl hover:text-white'>Github</button>
                        </a>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default Project