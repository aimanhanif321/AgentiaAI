"use client"
import React from "react";
import { TypeAnimation } from "react-type-animation";

const AnimationText = () => {
  return (
    <TypeAnimation
      sequence={[
        "Let me assist you with advanced data analytics", // Pehla text
        1000, // 1 sec rukega
        "I can help you analyze market trends.", // Dusra text
        1000, // 1 sec rukega
         "Optimizing your workflow with AI solutions.", // Teesra text
        1000, 
        "Need insights? Let's dive into the data!",
        1000,
      ]}
      speed={50} // Typing speed
      repeat={Infinity} // Infinite loop me chalega
      className="text-[10px] md:text-sm text-white" // Tailwind CSS styles
    />
  );
};

export default AnimationText;
