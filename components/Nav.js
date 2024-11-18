// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "Projects", path: "/work", icon: <HiViewColumns /> },
  { name: "contact", path: "/contact", icon: <HiEnvelope /> },
];

import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav
      className="flex felx-col items-center md:justify-center
   gap-y-8 fixed h-max bottom-0 mt-auto xl:right-[1%]
   z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen "
    >
      <div
        className="flex w-full xl:flex-col  items-center 
    justify-between xl:justify-center gap-y-10
     px-4 md:px-40 xl:px-0 h-20 xl:h-max
     bg-white/10 backdrop-blur-sm py-8 text-3xl xl:text-xl xl:rounded-full z-50 top-0 "
      >
        {navData.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={`${link.path === pathname && "text-accent"}
          relative flex items-center group hover:text-accent transition-all duration-300`}
            >
              <div
                className="xl:absolute xl:pr-14 xl:pb-0 xl:right-0 xl:hidden xl:group-hover:inline
                             absolute pb-20 right-0 hidden group-hover:inline"
              >
                <div
                  className="bg-white relative flex text-primary items-center p-[6px]
           rounded-[3px]"
                >
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  <div
                    className="xl:border-solid xl:border-l-white xl:border-l-8 xl:border-y-transparent xl:border-y-[6px] xl:border-r-0 xl:absolute xl:-right-2
                         border-solid border-t-white border-t-8 border-x-transparent border-x-[6px] border-b-0 absolute -bottom-2 right-[50%]
                        xl:border-t-none xl:border-t-none border-x-transparent  xl:border-x-[0px] xl:border-b-0  xl:bottom-0 "
                  ></div>
                </div>
              </div>

              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
