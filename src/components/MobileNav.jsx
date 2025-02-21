import { useState } from "react";
import "../App.css";
import "../index.css";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
  DrawerDescription,
} from "../components/ui/drawer";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState("🇸🇦");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectFlag = (flag) => {
    setSelectedFlag(flag);
    setIsOpen(false);
  };

  return (
    <nav className="block md:hidden">
      <div className="flex justify-between items-center">
        <ActionButton label="ادخل" />

        <div className="flex items-center cursor-pointer">
          <Icon />
        </div>
        <div className="flex items-center gap-8">
          <p className="_text_1oddo_22 blue-under-text">تسوق</p>
          <div className="flex  items-center gap-3">
            <button className="h-[40px] min-w-[40px] w-[40px] transition-all duration-[400ms] hover:bg-[#FFFFFF33] rounded-md flex justify-center items-center cursor-pointer">
              <Stats />
            </button>
            <div className="flex gap-1 relative">
              <button
                onClick={toggleDropdown}
                className="transition-all duration-[400ms]   rounded-md flex justify-center items-center cursor-pointer gap-2 py-[9px] px-[10px] group"
                style={{
                  borderRadius: "40px",
                }}
              >
                <p className="">{selectedFlag}</p>
                <p>
                  <DownArrow />
                </p>
              </button>

              {isOpen && (
                <div className="absolute  left-0 top-8  mt-2 w-[208px] bg-[#161c29]   shadow-md max-h-[232px] p-1 rounded-lg">
                  <button
                    onClick={() => selectFlag("🇰🇼")}
                    className={`px-4 py-3 rounded-lg flex w-full justify-between items-center ${
                      selectedFlag === "🇰🇼" ? "bg-[#12161f]" : "bg-[#161c29]"
                    } hover:bg-[#1b2130]`}
                  >
                    <div className="flex gap-2 items-center">
                      <p>🇰🇼</p>
                      <p>الكويت</p>
                    </div>
                    {selectedFlag === "🇰🇼" && <CheckMark />}
                  </button>
                  <button
                    onClick={() => selectFlag("🇸🇦")}
                    className={`px-4 py-3 rounded-lg flex w-full justify-between items-center ${
                      selectedFlag === "🇸🇦" ? "bg-[#12161f]" : "bg-[#161c29]"
                    } hover:bg-[#1b2130]`}
                  >
                    <div className="flex gap-2 items-center">
                      <p>🇸🇦</p>
                      <p>السعودية</p>
                    </div>
                    {selectedFlag === "🇸🇦" && <CheckMark />}
                  </button>
                </div>
              )}
              <Drawer direction="left">
                <DrawerTrigger>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    role="img"
                  >
                    <g fill="white" clipPath="url(#clip0_1_7)">
                      <path d="M5 7a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2zM5 15a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_7">
                        <path fill="#fff" d="M0 0h24v24H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </DrawerTrigger>

                <DrawerContent>
                  <DrawerHeader>
                    <DrawerClose className="flex justify-end">
                      <img src="public\closeIcon.svg" alt="close" />
                    </DrawerClose>
                  </DrawerHeader>
                  <DrawerDescription className="flex flex-col items-center p-[24px]">
                    <div className="relative w-[48px] h-[48px]">
                      <img
                        src="public\images\avatarIcon.60650c40.png"
                        alt=""
                        className="w-full h-full absolute"
                      />
                    </div>
                    <span className="mt-[16px] mb-[20px] font-semibold !text-[var(--color-text-basic-main] !text-[var(--typography-heading-small)]">
                      حياكم الله! رحلة التفوق تبدأ هنا
                    </span>
                  </DrawerDescription>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// eslint-disable-next-line react/prop-types
const ActionButton = ({ label }) => (
  <button
    className="flex items-center justify-center gap-2 font-semibold rounded-full border-2 border-[#2072e0] h-10 min-w-[120px] px-4 py-2 transition-all duration-300 hover:border-[#4190ed] cursor-pointer "
    aria-label={label}
  >
    <p>{label}</p>
    <Enter />
  </button>
);

const Icon = () => (
  <svg
    height="100%"
    viewBox="0 0 28 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="LogoIcon_logo__Yu6Ww Logo_icon__9QL4o w-[28px] h-[24px]"
  >
    <path
      d="M15.0815 1.40689C15.2467 1.69275 15.2467 2.04502 15.0816 2.33093L6.02663 18.0147C5.86162 18.3005 5.55665 18.4765 5.22662 18.4765H4.12761C3.41636 18.4765 2.97192 17.7065 3.32775 17.0906L12.9356 0.461633C13.2912 -0.153877 14.1797 -0.153878 14.5353 0.461632L15.0815 1.40689Z"
      fill="currentColor"
    ></path>
    <path
      d="M0.925158 24C0.213901 24 -0.230536 23.2299 0.12529 22.6141L0.658122 21.6919C0.823676 21.4053 1.12986 21.2292 1.46078 21.2302L6.78095 21.2463C7.11148 21.2473 7.41735 21.0716 7.58305 20.7856L16.1486 6.00144C16.5047 5.38678 17.3924 5.38731 17.7478 6.00239L18.2856 6.93325C18.4507 7.2189 18.4509 7.57088 18.2861 7.85671L12.4321 18.0133C12.2669 18.2999 12.2676 18.6529 12.4338 18.9389L13.4979 20.7692C13.6633 21.0536 13.9675 21.2286 14.2966 21.2286H15.3651C16.0762 21.2286 16.5207 20.4588 16.1651 19.843L15.632 18.9195C15.467 18.6337 15.467 18.2815 15.632 17.9957L19.3532 11.5503C19.7087 10.9346 20.5974 10.9344 20.9531 11.55L24.1432 17.0714C24.499 17.6872 24.0546 18.4573 23.3433 18.4573H22.3029C21.9744 18.4573 21.6705 18.2828 21.505 17.999L20.9537 17.0539C20.5972 16.4428 19.7143 16.4428 19.3578 17.0539L18.8106 17.9918C18.6429 18.2795 18.6429 18.6351 18.8106 18.9228L19.8884 20.7703C20.0539 21.0541 20.3578 21.2286 20.6863 21.2286H26.012C26.342 21.2286 26.6468 21.4046 26.8119 21.6903L27.3457 22.6141C27.7015 23.2299 27.257 24 26.5458 24L12.6956 24C12.3671 24 12.0633 23.8254 11.8977 23.5416L11.3464 22.5965C10.9899 21.9855 10.107 21.9855 9.75051 22.5966L9.1992 23.5417C9.03365 23.8255 8.72982 24 8.40125 24H0.925158Z"
      fill="currentColor"
    ></path>
  </svg>
);

const Enter = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      role="img"
      className="_endAccessory_jps6h_207 _icon_jps6h_201 "
    >
      <g fill="currentColor" clipPath="url(#clip0_1395_7)">
        <path d="M21 12.005a.8.8 0 0 1-.812.788H12.92l1.435 1.435a.799.799 0 1 1-1.131 1.13l-2.73-2.728a.8.8 0 0 1 .004-1.277l2.726-2.725a.8.8 0 1 1 1.13 1.13l-1.434 1.435h7.27a.8.8 0 0 1 .81.812"></path>
        <path d="M16.761 18.553c.292.402.205.97-.224 1.22a9.001 9.001 0 1 1 0-15.546c.429.25.516.818.224 1.22s-.853.486-1.288.246a7.2 7.2 0 1 0 0 12.614c.435-.24.996-.156 1.288.246"></path>
      </g>
      <defs>
        <clipPath id="clip0_1395_7">
          <path fill="#fff" d="M0 0h24v24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

const Stats = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    role="img"
    className="_icon_1rb4g_14"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.065 5.618a.18.18 0 0 0-.157-.052A6.51 6.51 0 0 0 5.5 11.987c0 3.597 2.91 6.513 6.5 6.513s6.5-2.916 6.5-6.513a6.51 6.51 0 0 0-5.903-6.485.01.01 0 0 0-.01.014c.142.26.368.575.368.908 0 .287-.194.57-.302.82a.01.01 0 0 0 .008.013 4.774 4.774 0 0 1 4.106 4.73A4.77 4.77 0 0 1 12 16.763a4.77 4.77 0 0 1-4.767-4.776 4.78 4.78 0 0 1 3.511-4.608c.25-.068.484-.202.607-.429a2 2 0 0 0 .073-.143c.09-.192.116-.321.116-.383a1 1 0 0 0-.116-.393c-.086-.159-.21-.254-.359-.413"
      clipRule="evenodd"
    ></path>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.609 1.89c-.154-.265-.467-.381-.772-.348A10.51 10.51 0 0 0 1.5 11.99C1.5 17.794 6.201 22.5 12 22.5s10.5-4.706 10.5-10.51c0-5.52-4.25-10.047-9.654-10.478a.01.01 0 0 0-.01.014c.098.21.26.386.26.784-.04.47-.144.565-.329.828l-.018.04a.01.01 0 0 0 .008.014 8.826 8.826 0 0 1 8.063 8.797c0 4.876-3.949 8.83-8.82 8.83s-8.82-3.954-8.82-8.83a8.83 8.83 0 0 1 7.522-8.734c.359-.053.758-.155.927-.476a1.2 1.2 0 0 0 .115-.496s-.027-.196-.115-.357z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const CheckMark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    role="img"
    className="_checkIcon_1bj5s_90"
  >
    <path
      fill="currentColor"
      d="M18.1 7a.9.9 0 0 0-.6.252L9.38 14.99l-2.877-2.742a.911.911 0 0 0-1.248-.012.799.799 0 0 0 .013 1.19l3.494 3.33a.9.9 0 0 0 .618.244.9.9 0 0 0 .618-.244l8.736-8.326a.82.82 0 0 0 .248-.432.8.8 0 0 0-.052-.49.84.84 0 0 0-.333-.376.9.9 0 0 0-.497-.132"
    ></path>
  </svg>
);

const DownArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 12 12"
    width="12"
    height="12"
    role="img"
    className="_endAccessory_jps6h_207 _icon_jps6h_201 transtion-all duration-[400ms] fill-gray-500 group-hover:fill-[white]"
  >
    <path d="M6.866 8.5a1 1 0 0 1-1.732 0L2.536 4a1 1 0 0 1 .866-1.5h5.196A1 1 0 0 1 9.464 4z"></path>
  </svg>
);

export default MobileNav;
