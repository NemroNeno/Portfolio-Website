// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination,Navigation } from "swiper";
import {FaQuoteLeft} from "react-icons/fa";
import Image from "next/image";
import { motion } from 'framer-motion';
import { fadeIn } from "../variants";


// data

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination,Navigation]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <motion.div
            variants={fadeIn('down',0.4)}
        initials='hidden'
        
        exit='hidden'
             className=" flex flex-col items-center md:flex-row gap-x-8 h-full px-16 justify-center">
             <div className="flex flex-col xl:flex-row">
                  <div className="flex flex-col justify-center text-center w-9/12">
                        <div className="mb-2 mx-auto "><Image src={person.image} width={100} height={100}/></div>
                        <div className="text-lg">{person.name}</div>
                        <div className="text-[12px] uppercase font-extralight tracking-widest text-white/50">{person.position}</div>
                  </div>
                  <div className="flex-l flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                    <div className="mb-4">
                      <FaQuoteLeft className="text-4xl sm:6xl text-white/20 mx-auto md:mx-0"/>
                      <div className="xl:text-center xl:text-lg ">{person.message}</div>
                    </div>
                  </div>
             </div>
            </motion.div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;

