import React from "react";
import Link from "./Link";
import { links } from "../data/constants";
import avatar from "../assets/me.jpg";

const About = (props) => {
  return (
    <div className="About">
      <div className="container px-4 py-8 md:py-20 mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="justify-self-end hidden md:block">
          <img src={avatar} alt="Badr Mamatahir profile" />
        </div>
        <div>
          <h3 className="text-4xl font-bold mb-8">
            ⚡ About <span className="text-yellow-400">Me</span>
          </h3>
          <div className="justify-self-end block md:hidden  mr-4 w-2/5 float-left">
            <img
              src={avatar}
              className="rounded"
              alt="Badr Mamatahir profile"
            />
          </div>
          <p className="text-gray-800 text-justify">
            <p className="mb-3">
              I am a software developer with over 5 years of extensive
              experience and diverse skills which I have acquired through my
              work in various startups. My expertise revolves around crafting
              native and hybrid applications for both web and mobile platforms,
              backed by a solid foundation with a bachelor's degree in computer
              science and over 5 years of practical experience.
            </p>
            <p className="mb-3">
              I love crafting a clean code that both humans and machines can
              understand. That's way I focus on design patterns and technologies
              best practices in my self-learning journey. I'm also hooked on
              problem-solving and regularly dive into reading about data
              structures and algorithms to stay sharp. I track my progress in
              this area on{" "}
              <Link external={true} link={links.leetcode} dark={true}>
                LeetCode
              </Link>{" "}
              .
            </p>
            <p className="mb-3">
              To stay ahead in the ever-evolving digital landscape, I actively
              participate in a variety of events covering Blockchain, IoT, and
              AI. Contributing to meaningful projects is not just a choice but a
              fundamental part of my ethos, with two open-source projects
              showcased on my{" "}
              <Link external={true} link={links.github} dark={true}>
                GitHub profile
              </Link>
              .
            </p>
            <p className="mb-3">
              Beyond my professional commitments, I find fulfillment in
              volunteering for non-profit organizations like{" "}
              <Link external={true} link={links.jood} dark={true}>
                Jood
              </Link>{" "}
              , where I contribute part-time to assist those in need.
            </p>
            <p className="mb-3">
              Away from the screen, my interests span into listening to podcasts
              and tackling challenges on Leetcode.,
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
