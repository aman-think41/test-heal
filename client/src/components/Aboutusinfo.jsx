import React from "react";
import line from "../assets/line.svg";

function Aboutusinfo() {
  return (
    <div className="flex flex-col justify-center items-center mb-7">
      <h1 id="about-us" className="mt-10 font-semi-bold font-roboto lg:text-5xl text-4xl">About Us</h1>
      <img className="mt-3" src={line} alt="divider" />
      <p className="font-roboto mt-8 text-center max-w-7xl mx-auto mb-10 sm:mb-12 px-12 text-lg sm:text-xl">
        We are a young, well-funded, Full Stack GenAI organization. We build
        systems and software that help humans and AI collaborate better, with a
        goal to improve human experience and create a more fulfilling work
        environment. Our tools, systems, and platforms further that goal and
        help us operate like a One Team that can deliver higher quality results
        faster.
      </p>
    </div>
  );
}

export default Aboutusinfo;
