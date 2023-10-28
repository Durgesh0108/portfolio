import React from 'react'
import Project from './Project'


const PROJECTS = [
    {
        id: 1,
        name: "Spectra Glasses",
        description: "A Full Stack Web Application for Glasses website built with NodeJS, Express, MongoDB, JWT.",
        image: "/spectra.jpg",
        liveLink: "https://spectra-cc0ec8926925.herokuapp.com/",
        githubLink: "https://github.com/Durgesh0108/Spectra_Glasses",
        languages: [ "HTML", "CSS", "JS", "Node JS", "Express JS", "Mongo DB" ]
    },
    {
        id: 2,
        name: "Yelp Camp",
        description: "Full stack web application for campground reviews and photos using NodeJS, Express, MongoDB, EJS, PassportJS, Cloudinary",
        image: '/yelpcamp.jpg',
        liveLink: "https://yelpcamp-71bdc977fe4a.herokuapp.com/",
        githubLink: "https://github.com/Durgesh0108/Yelpcamp",
        languages: [ "HTML", "CSS", "JS", "Node JS", "Express JS", "Mongo DB" ]
    },
    {
        id: 3,
        name: "Car Website",
        description: "Built a frontend of Car website using React.",
        image: '/cars.jpg',
        liveLink: "https://stazi.vercel.app/cars",
        githubLink: "https://github.com/Durgesh0108/Stazi",
        languages: [ "React" ]
    },
    {
        id: 4,
        name: "Property Selling Website",
        description: "Built a frontend of property selling website using React.",
        image: '/property.jpg',
        liveLink: "https://stazi-assignment-2-two.vercel.app/property",
        githubLink: "https://github.com/Durgesh0108/Stazi_assignment_2",
        languages: [ "React" ]
    },
    {
        id: 5,
        name: "Food Website",
        description: "Built a frontend of food Website using React.",
        image: "/food.jpg",
        liveLink: "https://food-application-mu.vercel.app/",
        githubLink: "https://github.com/Durgesh0108/Food_application",
        languages: [ "React" ]
    }
]

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
