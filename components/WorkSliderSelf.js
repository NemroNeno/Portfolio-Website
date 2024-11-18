
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { ReactTyped } from "react-typed";
  
  const WorkSliderSelf = () => {
    const [openModal, setOpenModal] = useState(false);
    const [pr,setPr]=useState(null)
    const projects=[
        {
            name:"Space Invaders",
            image:"/space_invader.jpg",
            link:"https://github.com/NemroNeno/Space_Invaders",
            description:"Second Semester Project for Object Oriented Course built using C++ and Raylib (Low-level graphics library). The game is a clone of the classic Space Invaders game with some additional features . The project Demonstrates the use of Object Oriented Programming concepts and the use of Raylib library for graphics rendering."
        },
        {
            name:"Social-Media-App",
            image:"/thumb2.jpg",
            link:"https://github.com/NemroNeno/Social_media-App",
            description:"A Social Media App built using MERN stack. The app has features like posting, commenting, liking, following, realtime-messaging, group-messaging etc. The app also has a real-time chat feature using Socket.io. The app is built using React, Node.js, Express, MongoDB, and Socket.io."
        },
        {
            name:"Image Processing Algorithmic",
            image:"/DAA_proj.jpg",
            link:"https://github.com/NemroNeno/Image_processing_algo",
            description:"Implementation of various image processing algorithms. The project demonstrates the implementation of various image processing algorithms like edge detection, Resizing,Gaussian-Filter, Sobel-Filter and Gabor-Filter. Py-Qt was used for the GUI."

        },
        {
            name:"Ecommerce-App",
            image:"/ecommerce.jpg",
            link:"https://github.com/NemroNeno/EcommerceApp",
            description:"An E-commerce App built using MERN stack. The app has features like product listing, product details, cart, checkout, payment gateway, user authentication, admin panel, order tracking etc. The app is built using React, Node.js, Express, MongoDB, and Paypal-Developer Api for payment gateway."
        },
        {
          name:"ANPR System",
          image:"/anpr.jpg",
          link:"https://github.com/ahsanirfan961/Automated-Number-Plate-Detection---YOLOv8---TrOCR",
          description:"This project is a comprehensive tool for number plate detection and optical character recognition (OCR) using a combination of advanced machine learning models and a user-friendly interface. The tool is built using PyQt6 and Python 3.10 and leverages the YOLOv8n model, TR-OCR (Microsoft Open-source model), OpenCV, and Numpy. It can detect and read number plates from images and videos."
      },
      {
        name:"Multiplayer Drawing-Board",
        image:"/drawing_board.jpg",
        link:"https://github.com/NemroNeno/MultiPlayerDrawing",
        description:"MERN Whiteboard is a collaborative drawing application built on the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides users with a platform to draw and collaborate in real-time, akin to a shared whiteboard. Utilizing the power of Socket.IO for seamless communication, users can draw simultaneously, seeing each other's changes in real-time."
      },
      {
        name:"Nem-Talk (Chat-Application)",
        image:"/chat_app.jpg",
        link:"https://github.com/NemroNeno/Nem-Talk",
        description:"This project is a chat application that uses the MERN stack for its development. It includes a React-based frontend for the client-side and an Express.js backend for the server-side and Includes the leverage of Web sockets to bring Real-time Response.Features such as User Authentication, Real-time Chatting, and Group Chatting are included in the application."
      },
    ]

    const settings = {
      
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear"
      };
    return (
        <div className="max-sm:mt-[10px] slider-container sm:mt-[10px] w-full h-full !z-50">
         <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} className="!w-[1150px] h-[600px] mt-[100px] mx-auto !z-50 bg-[#080719] border-black rounded-2xl">
        <Modal.Body >
          <div className=" bg-[#080719] !w-[1150px] h-[550px]">
           <p className="pt-[20px] pl-[20px] text-5xl font-bold">{pr?.name}</p> 
           <div className="flex flex-row w-full min-w-[1150px]">
           <Image src={pr?.image} width={600} height={600} className="h-[300px] w-[600px] mt-[60px] ml-[20px] rounded-xl"/> 
           <div className="h-[300px] !w-[450px] ml-[40px] bg-opacity-10 backdrop-blur-sm bg-[#080788] border-[1px] border-white/10 rounded-lg p-10 shadow-xl  mt-[60px] ">
             <p className="mx-auto my-auto text-white text-xl font-normal cursor-pointer"><ReactTyped strings={[pr?.description]} typeSpeed={30}  /></p>
           </div> 
           </div>
          </div>
        </Modal.Body>
      </Modal>
        <Slider {...settings}  className={` max-sm:!w-[60%] max-sm:!justify-start sm:!w-[70%] lg:!w-[90%] xl:w-full flex flex-row items-center !justify-end h-full !z-50 ${openModal ? 'blur-2xl' : ''}`}>
        
          {projects.map((proj,index)=>(
            <div key={index} className="relative rounded-lg overflow-hidden flex items-start justify-center group h-full w-full p-2 ">
            
              <div className="flex items-center justify-center relative overflow-hidden group h-[400px] sm:!w-[90%] lg:!w-[80%] xl:!w-[85%]">
              <div className="h-[400px] ">
                 <p className="sm:text-2xl  text-center mb-[30px]">{proj.name}</p>
                <Image src={proj.image} width={600} height={600} alt="" className="rounded-lg  max-sm:!w-[380px]  sm:!w-[400px] sm:!h-[201px]  lg:!w-[500px] lg:!h-[200px]  xl:!w-[500px] xl:!h-[300px]" />
                
                </div> 
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#131135] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                <div className="absolute bottom-0 translate-y-full 
                  group-hover:-translate-y-10
                  transition-all duration-300">
                  <div className="flex flex-col gap-x-2 text-[13px] tracking-[0.2em]">
                    <div className='ml-[5px] group-hover:translate-y-0 transition-all duration-300 delay-200 translate-y-[500%]  flex flex-row items-center justify-center hover:text-red-700 text-xl'> <a href={proj.link} target="_blank" rel="noopener noreferrer">
     Github Repository
      </a>  <BsArrowRight className="ml-[5px]"/></div>
                    <div className='mt-[10px] group-hover:translate-y-0 transition-all duration-500 delay-300 translate-y-[500%]  flex flex-row items-center justify-center hover:text-red-700 text-xl' onClick={()=>{setOpenModal(true)
                                                                                                                                                                                                                setPr(proj)}}>Project Info  <BsArrowRight className="ml-[5px]"/></div>
                  </div>
                </div>
              </div>
             
            </div>
           ))}
         
        </Slider>
      </div>
  
    );
  };
  
  export default WorkSliderSelf;
  