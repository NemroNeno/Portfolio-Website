import Layout from "../components/Layout";
import ParticlesContainer from "./../components/ParticlesContainer";
import ProjectsBtn from "./../components/ProjectsBtn";
import ResumeBtn from "./../components/ResumeBtn";
import Avatar from "./../components/Avatar";
import { ReactTyped } from "react-typed";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <ParticlesContainer />
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 ">
        <div className="text-center flex flex-col justify-start  md:text-left pt-[40px] h-full container mx-auto max-sm:pt-[60px]">
          <motion.h4
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 !z-50"
          >
            Building Digital <br />
            <span className="text-accent"><ReactTyped
          strings={["Excellence"]}
          typeSpeed={100}
          cursorChar=">"
          showCursor={false}
        /> </span>Together.
          </motion.h4>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm sm:max-w-md mx-auto md:mx-0 mb-0 sm:mb-16 !z-50  max-sm:!text-sm max-sm:text-white/75"

          >
            I am a third-year Software Engineering student from Islamabad, Pakistan, 
            offering expertise in web development and machine learning solutions. With a solid background 
            in full-stack development and deep learning, I excel at addressing complex challenges and delivering 
            innovative, data-driven results. Let’s work together to turn your vision into reality.
          </motion.p>
          <div className="flex justify-center xl:hidden relative !z-50 max-sm:pt-[50px]">
           
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex xl:gap-x-10 "
          >
            <ProjectsBtn />
            {/* <ResumeBtn /> */}
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className=" bg-explosion bg-cover bg-right bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-5"></div>

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className=" w-full h-full max-w-[537px] max-h-[578px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
