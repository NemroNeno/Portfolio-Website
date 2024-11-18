// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

// data

const WorkSlider = () => {
  return (
    <Swiper
    spaceBetween={10}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="h-[800px] sm:h-[480px]"
    slidesPerView={1} // Only show one slide at a time
    centeredSlides={true} // Center slides
  >
    {workSlides.slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div className="grid grid-cols-2 gap-4 h-full">
          {slide.images.map((image, idx) => (
            <div key={idx} className="relative rounded-lg overflow-hidden flex items-center justify-center group h-[300px]">
              <div className="flex items-center justify-center relative overflow-hidden group h-full">
                <Image src={image.path} width={600} height={300} alt="" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                <div className="absolute bottom-0 translate-y-full 
                  group-hover:-translate-y-10
                  transition-all duration-300">
                  <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                    <div className='delay-100'>Live</div>
                    <div className='translate-y-[500%] group-hover:translate-y-0'>Project</div>
                    <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"><BsArrowRight/></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  );
};

export default WorkSlider;
