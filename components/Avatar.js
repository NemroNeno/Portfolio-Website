import Image from 'next/image'

const Avatar = () => {
  return <div className='hidden sm:flex sm:max-w-none'>
    <Image src={'/back-pic.png'} width={337} height={478}
     alt="" className='translate-z-0 w-full h-full '/>
  </div>;
};

export default Avatar;
