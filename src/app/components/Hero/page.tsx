import {  Bot, ChevronRight } from "lucide-react";
import React from "react";
import AnimationText from "../Animation/page";

const Hero = () => {
  return (
    <div className="bg-black backdrop-blur h-[100vh] flex flex-col justify-center items-center text-center ">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3  rounded-full bg-purple-600 animate-pulse"></div>
        <span className="text-purple-600 text-[16px]">
          POWERED BY PANAVERSITY
        </span>
      </div>

      {/* Gradient Heading */}
      <h1 className="bg-gradient-to-r from-purple-800 via-blue-500 to-purple-800 bg-clip-text text-transparent text-[1.5rem]  lg:text-[5rem] font-bold">
        Enterprice AI Agent
      </h1>

      {/* Second Heading */}
      <h1 className="text-[1.5rem]  lg:text-[5rem] text-white font-bold">
        For the Future
      </h1>

      {/* chatboot */}

      <div className="max-w-2xl mx-auto bg-white/5 rounded-xl p-2 lg:p-6 mb-12 backdrop-blur-sm border border-purple-500/20 mt-8 h-18">
        <div className=" flex items-start space-x-4 h-18">
          <div className="w-6 h-6 md:h-14 md:w-14 mt-2  rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex justify-center items-center">
            <Bot className="text-white text-center w-3 h-3 md:h-7 md:w-7 " />
          </div>
          <div className="bg-white/5 rounded-lg p-2 md:p-6 h-23 ">
            <p className="text-gray-300">
              <AnimationText />
              <span className="inline-block w-0.5 h-5 ml-1 bg-purple-500 animate-pulse"></span>
            </p>
          </div>
        </div>
      </div>

      {/* buttons */}
      <div className="md:flex gap-10">
        <div className="">
          <button
            type="submit"
            className="flex  bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 lg:text-[1.5rem] text-white font-bold lg:px-10 lg:py-5 px-5 py-2 text-[14px]  rounded-[10px]"
          >
            Deploy Your AI Agent <span className="pl-2"><ChevronRight/></span>
          </button>
        
        </div>
        <div className=" mx-auto bg-white/5 rounded-xl p-4 mb-12 backdrop-blur-sm border border-purple-500/20">
        <div className=" flex items-center justify-center space-x-4 lg:text-[1.5rem] text-[10px] text-white font-bold mt-4  ">
          Watch Demo
          </div></div>
      </div>
    </div>
  );
};

export default Hero;
