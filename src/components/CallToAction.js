import React from 'react';
import {FiChevronRight} from "react-icons/fi";
import FindMe from "./FindMe";

const CTACard = ({className = ''}) => {
    return (
        <div
            className={"CTACard bg-white shadow-lg p-8 md:p-12 text-center rounded-lg w-5/6 lg:w-5/6 xl:w-1/2 " + className}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 ">🚀 Let's Talk Business</h3>
            <p className="mb-4">
                If you have a mission or business idea for me.
                I have 3+ years of rough experience in tech industry for your.
                I'm open to adopt your idea and lead you project to success.
            </p>

            <div className="flex items-center justify-center gap-3 flex-wrap">
                <a href="mailto:b.mamatahir@gmail.com" className="text-yellow-400 border font-semibold py-2 px-4 rounded inline-flex items-center gap-2">
                    <span>CONTACT</span>
                    <FiChevronRight/>
                </a>

                <FindMe hide='012'/>
            </div>

        </div>
    );
};

const CallToAction = (props) => {
    return (
        <div className="CallToAction relative">
            <CTACard className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
        </div>
    );
};

export default CallToAction;
