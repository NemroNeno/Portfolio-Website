import Image from "next/image";
import Link from "next/link";

import Socials from "./Socials";
const Header = () => {
  return (
    <header className="absolute !z-50 w-full flex items-center px-16 xl:px-0 xl:h-[90px] ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-6 pb-[50px]">
          <Link href={"/"}>
            <Image src={"/logo.svg"} width={420} height={80} />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
