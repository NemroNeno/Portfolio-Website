import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import WorkSlider from "./../../components/WorkSlider";
import WorkSliderSelf from "./../../components/WorkSliderSelf";

const Work = () => {
  return (
    <div className="h-screen bg-primary/60  flex items-center">
      <Circles />
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row gap-x-8 h-screen">
          <div className="text-center flex xl:w-[50vw]  sm:py-[10px] flex-col lg:text-left sm:mb-4 xl:mb-0 min-w-[250px] h-full">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 mt-8  "
            >
              My Work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="sm:mb-4 max-w-[800px] mx-auto lg:mx-0"
            >
                Projects I have worked on.
            </motion.p>
        
            <motion.div
            variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
             className=" w-[1200px] h-[200px]">
            <WorkSliderSelf/>
            </motion.div>
          </div>
         
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
