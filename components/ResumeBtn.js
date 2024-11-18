import Image from 'next/image'
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';
import { IoDocumentText } from "react-icons/io5";


const ResumeBtn = () => {
  return <div  className='relative w-[85px] h-[85px] flex justify-start items-center cursor hover:animate-bounce-slow hover:text-red-600'>
     <a target="_blank" rel="noopener noreferrer" href={"./Resume.pdf"}><IoDocumentText className='absolute pt-[0px] text-4xl group-hoverL:translate-x-2 transition-all duration-300'/></a> 
     <a target="_blank" rel="noopener noreferrer" href={"./Resume.pdf"} className="mt-[100px]">My Resume</a> 
    </div>;
};

export default ResumeBtn;
