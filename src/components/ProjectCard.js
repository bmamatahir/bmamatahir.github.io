import {React, useState} from 'react';
import Budge from "./Budge";
import Technology from "./Technology";
import AutoScrollingBackground from "./AutoScrollingBackground";
import { FiExternalLink } from 'react-icons/fi';
import { RiGithubFill } from 'react-icons/ri';

const ProjectCard = (props) => {

    const {
        logo,
        description,
        status,
        name,
        visitLink,
        technologies,
        screenshots,
        color,
        github,
    } = props.data;

    const descLen = 380

    const longDesc = description.length > descLen;

    const [collapsed, setCollapsed] = useState(true);

    const toggleReadMore = () => {
        setCollapsed(() => !collapsed);
    };

    return (
        <div
            className="Tilt-inner ProjectCard border rounded-2xl shadow-md ProjectCard-size overflow-hidden grid grid-cols-3 max-w-4xl"
            style={{minHeight: '300px', borderColor: color}}>

            {/*Left*/}
            <div className="col-span-3 sm:col-span-2 overflow-hidden">
                <div className="p-5 flex flex-col gap-3 h-full bg-white relative">
                    {
                        !github && <div className="absolute  top-0 right-0 md:right-8">
                            <Budge {...status} classes="rounded-bl-lg md:rounded-b-lg"/>
                        </div>
                    }

                    {/*Logo*/}
                    <div>
                        {/*<img src="https://via.placeholder.com/60/?text=LOGO" alt="Logo"/>*/}
                        <img src={logo} alt="Logo"/>
                    </div>

                    {/*Description*/}
                    <div className="mt-11 mb-5">
                        <div className="flex gap-1 items-center mb-2">
                            <h1 className="font-bold text-lg">{name}</h1>
                            {
                                visitLink &&
                                <a href={visitLink} target="_blank" rel="noreferrer">
                                    <FiExternalLink color="#547bd2"/>
                                </a>
                            }

                        </div>
                        <p className="leading-tight text-gray-600 text-justify lg:text-left">
                            {description.substr(0, collapsed ? descLen: description.length)}
                            { longDesc && collapsed &&  <span>...</span>}
                            {longDesc && <span className="text-blue-600 hover:text-blue-400 font-semibold cursor-pointer" onClick={toggleReadMore}>[{ collapsed ? 'More' : 'Less'}]</span>}
                        </p>
                    </div>

                    {/*Technologies*/}
                    <div className="inline-flex gap-2 flex-wrap">
                        {
                            technologies.map(t => <Technology {...t}/>)
                        }
                    </div>

                    {/*Github*/}
                    {github &&
                    <div className="absolute bottom-3 right-3 opacity-30 sm:hidden">
                        <a href={github} target="_blank" rel="noreferrer"><RiGithubFill size={30}/></a>
                    </div>
                    }


                </div>
            </div>

            {/*Right*/}

            <div className="hidden sm:block relative">
                {/*<AutoScrollingBackground src="https://picsum.photos/300/1500"/>*/}
                {/*<AutoScrollingBackground src="https://i.picsum.photos/id/555/300/1500.jpg?hmac=Wyq8mQA0NE5168KcfnPJWXGUdjEUH3wYUBFoqPPF-80"/>*/}
                <AutoScrollingBackground src={screenshots}/>

                {/*Github*/}
                {github &&
                <div className="absolute bottom-3 right-3 hidden sm:block bg-black p-1 rounded-full bg-opacity-50">
                    <a href={github} target="_blank" rel="noreferrer"><RiGithubFill size={30} color="white"/></a>
                </div>
                }
            </div>

        </div>
    );
};


export default ProjectCard;
