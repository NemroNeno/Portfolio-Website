import Image from "next/image";
const TopLeftImg = () => {
  return <div className="absolute left-0 top-0 
   z-10 xl:w-[400px] mix-blend-color-dodge opacity-70">
    <Image src='/top-left-img.png' width={400} height={400} alt=''/>
  </div>;
};

export default TopLeftImg;
