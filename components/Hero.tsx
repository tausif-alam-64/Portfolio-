import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="p-20 pt-36 relative">
      
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vw]"
        fill="purple"
      />
      
      <Spotlight
        className="top-28 left-80 h-[80vh] w-[50vw]"
        fill="blue"
      />

      <div className="absolute inset-0 h-screen w-full flex items-center justify-center bg-white dark:bg-black-100 bg-grid-black/[0.2] dark:bg-grid-white/[0.03]">
        
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-white dark:bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      </div>

      <div className="relative z-10 flex justify-center my-20">
        
        <div className="flex flex-col items-center justify-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
          
          <h2 className="text-xs uppercase tracking-widest text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h2>

          <TextGenerateEffect 
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Building Scalable, Modern Web Applications"
          />

          <p className="text-sm md:text-lg lg:text-2xl text-center md:tracking-wider mb-4">
            Hi, I'm Tausif — Full Stack Developer | React, Node.js, and Next.js.
          </p>

          <a href="#about">
            <MagicButton 
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

        </div>
      </div>

    </div>
  );
};

export default Hero;
