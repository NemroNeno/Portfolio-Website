import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from "react-icons/ri";
import { FaLinkedin,FaGithub,FaWhatsapp } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg z-0">
      <Link
        href={"https://www.linkedin.com/in/muhammed-nabeel-2a9412246/"}
        className="hover:text-accent transition-all duration-300"
      >
        <FaLinkedin />
      </Link>

      
      <Link
        href={"https://github.com/NemroNeno"}
        className="hover:text-accent transition-all duration-300"
      >
        <FaGithub />
      </Link>


      <Link
        href={"https://www.facebook.com/profile.php?id=100076618449600"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>




      <a
        href="https://wa.me/923216769840" target="_blank" rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <FaWhatsapp />
      </a>

      <a
        href="./Resume.pdf" target="_blank" rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <IoDocumentText/>
      </a>

    </div>
  );
};

export default Socials;
