// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaNode,
  FaDatabase
} from "react-icons/fa";
import { Tooltip } from 'react-tooltip'
import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { SiScikitlearn ,SiNumpy,SiTensorflow,SiGnubash,SiPandas} from "react-icons/si";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import React, { useState } from "react";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <FaNode />,
          <FaDatabase/>,
          <BiLogoTailwindCss/>
    
        ],
        names:["HTML","CSS","Javascript","React","NextJs,","NodeJs","Database","TailwindCss"]
      },
      {
        title: "Programming",
        icons: [<TbBrandCpp/>, <FaPython/>,<SiGnubash />],
        names:["C++","Python","Bash"]
      },
      {
        title: "Data-Science/Machine Learning",
        icons: [<SiTensorflow/>, <SiScikitlearn/>,<SiPandas />, <SiNumpy/>],
        names:["Tensorflow","Scikit-learn","Pandas","Numpy"]
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Computer Vision Intern - MachVis-Lab (National University of Science and Technology, Islamabad)",
        stage: "2024 - present",
      },
      {
        title: "Deep Learning Intern - ONT-Lab (National University of Science and Technology, Islamabad)",
        stage: "2024 - Present",
      },
      {
        title: "Machine Learning Intern - Evo-Soft (F-8 Markaz, Islamabad)",
        stage: "2024",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Advanced-React Certification- Meta, Coursera",
        stage: "2023",
      },
      {
        title: "Machine-Learning specialisation - Deep-Learning.ai, Coursera",
        stage: "2024",
      },
      {
        title: "Programming Advanced in C++ - ABC Institute, Los Angeles, CA",
        stage: "2023",
      },
    ],
  },
];

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Avatar from "./../../components/Avatar";
import Circles from "./../../components/Circles";
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/60 max-sm:py-[120px] sm:py-32 text-center xl:text-left overflow-auto lg:overflow-hidden scrollbar-hide  ">
    
      <Circles />
     
      <div className=" container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-5 pb-[200px] lg:mt-[100px]">
        <div className="flex-l flex flex-col justify-center text-sm sm:pt-[50px]">
          <motion.h1 className='h2'
          variants={fadeIn("right", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden">
            Captivating <span className="text-accent">stories</span> birth magnificent designs.
          </motion.h1>
         
<motion.p className='max-w-[500px] mx-auto xl:mx-0 xl:mb-12 px-2 xl:px-0 pt-[50px] mb-[100px]'
variants={fadeIn("right", 0.6)}
        initial="hidden"
        animate="show"
        exit="hidden">
Some of the skills I have aquired over the years include web development, programming, and data science/machine learning. 
I have also gained experience in computer vision, deep learning, and machine learning. I have also earned certifications in advanced react, 
machine learning specialisation, and advanced programming in C++.

</motion.p>

<motion.div
variants={fadeIn("right", 0.7)}
        initial="hidden"
        animate="show"
        exit="hidden">
    <div>
          <div className='relative hidden xl:flex xl:gap-x-10 justify-around mb-16
          after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0
          after:right-0 xl:ml-16   mx-auto'>
          <div>
          <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
              <CountUp start={0} end={10} duration={5}/>+
            </div>
            <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] font-bold animate-pulse duration-[100ms]'>
              Years of experience
            </div>
          </div>






          <div>
          <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
              <CountUp start={0} end={5} duration={5}/>+
            </div>
            <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] font-bold animate-pulse duration-[100ms]'>
           Satisfied clients 
            </div>
          </div>


          <div>
          <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
              <CountUp start={0} end={20} duration={5}/>+
            </div>
            <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] font-bold animate-pulse duration-[100ms]'>
             Finished Projects
            </div>
          </div>
            
           
            

           
          </div>
    </div>
</motion.div>

          </div>
          <motion.div className="flex flex-col w-[350px] md:w-[500px]  xl:max-w-[48%] max-sm:mb-[300px] h-[900px] md:h-[480px] md:mr-[90px]  max-sm:pb-[800px] "
          variants={fadeIn("right", 1)}
        initial="hidden"
        animate="show"
        exit="hidden">
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 md:mr-[90px]">
              {aboutData.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={` ${index===itemIndex&& 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer
          capitalize xl:text-lg relative
          after:w-8 after:h-[2px] after:bg-white after:absolute mb-[50px]
          after:-bottom-1 after:left-0 !z-50`}
          onClick={(e)=>{
            e.stopPropagation();
            setIndex(itemIndex)}}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>

       <div className="bg-pink-400/10 py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start w-[350px] md:w-[650px] rounded-xl md:mr-[90px]">
        {aboutData[index].info.map((item,itemIndexed)=>{
          return (
            <div>
            
            <div
            className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/80 md:text-xl  mx-2"
             key={itemIndexed}>
              <div className="max-sm:mb-[30px]">{item.title}</div>
              
              <div className='hidden md:flex text-white/30'>-</div>
              <div className="font-thin text-white/30">{item.stage}</div> 
              <div className='flex gap-x-4'>
              {item.icons?.map((icon,itemIndex)=>{
                return (<div className='group relative max-sm:text-xl md:text-4xl hover:text-accent transition-all duration-300' content={<span>Tooltip</span>}>
                 { <span className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 absolute bottom-full mb-2 w-max  text-white text-sm rounded py-2 px-1 shadow-lg">{item.names[itemIndex]}</span>} 
                  {icon}
                  
                </div>
                )
              })}
              
              </div> 
                     
            </div>
            <div class="border-b border-gray-300 w-[250px] md:w-[650px] mt-[20px]"></div> 
            </div>
          )
        })}
       </div>



          </motion.div>
        </div>
      </div>
   
  );
};

export default About;
