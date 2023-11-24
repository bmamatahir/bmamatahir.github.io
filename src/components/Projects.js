import React, {useState} from 'react';
import ProjectCard from "./ProjectCard";
import {projects} from "../data/constants";
import Tilt from "react-tilt/dist/tilt";
import Slider from "react-slick";
import './Projects.css'
import Filters from "./Filters";

const Projects = (props) => {
    const [allProjects, setAllProjects] = useState(() => projects);

    var settings = {
        dots: true,
        speed: 200,
        autoplaySpeed: 2500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        touchThreshold: 100,
        initialSlide: 2,
        responsive: [
            {
                breakpoint: 715,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };


    let slider = null;

    const applyFilter = (criteria) => {
        const {project, opensourced} = criteria
        setAllProjects(projects.filter(p => opensourced ? p.github : true))

        if (project !== '') {
            const index = allProjects.map(p => p.name).indexOf(project)
            slider.slickGoTo(index + 1)
        }

    }

    return (
        <div className="Projects bg-gray-300">
            <div className="py-20 overflow-hidden">
                <div className="container px-4 mx-auto flex flex-col gap-3 text-start mb-7">
                    <h3 className="text-4xl font-bold ">🚧 My Work</h3>
                    <p className="text-gray-500">This is a list of my current and previous projects of work. Use the
                        menu below to see project titles.</p>
                </div>

                {/* Filters */}
                <div className="container px-4 mx-auto py-5 flex justify-start">
                    <Filters projects={projects} onChange={applyFilter}/>
                </div>

                {/* Work carousel */}
                <Slider ref={s => (slider = s)} {...settings}>
                    {allProjects.filter(e => !e.hidden).map((p, index) => <Tilt className={`Tilt my-4 mx-0`} options={{
                        max: 10,
                        perspective: 2000,
                        scale: 1
                    }}>
                        <ProjectCard key={~~(Math.random() * 3000)} data={p}/></Tilt>)}
                </Slider>
            </div>
        </div>
    );
};

export default Projects;
