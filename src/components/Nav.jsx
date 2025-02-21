import { useState } from "react";
import "../App.css";
import "../index.css";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState("🇸🇦"); // Default flag: Saudi Arabia

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectFlag = (flag) => {
    setSelectedFlag(flag);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <nav className="">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Icon />
          <Logo />
        </div>
        <div className="flex items-center gap-8">
          <p className="_text_1oddo_22 blue-under-text">تسوق</p>
          <div className="flex  items-center gap-3">
            <button className="h-[40px] min-w-[40px] w-[40px] transition-all duration-[400ms] hover:bg-[#FFFFFF33] rounded-md flex justify-center items-center cursor-pointer">
              <Stats />
            </button>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="transition-all duration-[400ms] border-2 border-[#2b2f32]  rounded-md flex justify-center items-center cursor-pointer gap-2 py-[9px] px-[10px] group"
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
                <div className="absolute left-0 mt-2 w-[208px] bg-[#161c29]   shadow-md max-h-[232px] p-1 rounded-lg">
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
            </div>
          </div>
          <ActionButton label="ادخل" />
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

const Logo = () => (
  <svg
    height="1em"
    viewBox="0 0 64 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=" w-[74px] h-[14px]"
  >
    <path
      d="M58.1651 0C57.5881 0 57.0817 0.116807 56.6666 0.376653C56.2395 0.639108 55.9325 1.08668 55.724 1.66435L52.1905 11.4775C52.1481 11.5952 52.1616 11.7282 52.2264 11.8328C52.2913 11.9374 52.3991 12 52.5145 12H54.4527C54.5957 12 54.7243 11.904 54.7767 11.758L57.9648 2.88424C57.9933 2.81442 58.0215 2.78509 58.0397 2.7716C58.0573 2.75853 58.0884 2.74318 58.1501 2.74318C58.2123 2.74318 58.2399 2.75865 58.2529 2.76859C58.2665 2.779 58.2919 2.80481 58.3171 2.87453L58.3178 2.87646L61.3727 11.7528C61.4238 11.9016 61.5536 12 61.6985 12H63.6517C63.7662 12 63.8734 11.9383 63.9384 11.8348C64.0034 11.7314 64.018 11.5996 63.9773 11.4821L60.5785 1.67082C60.3796 1.08922 60.0715 0.639416 59.6337 0.376575C59.2278 0.116372 58.731 0 58.1651 0Z"
      fill="currentColor"
    ></path>
    <path
      d="M0.348346 0.196258C0.15596 0.196258 0 0.36734 0 0.57838V8.10159C0 9.33394 0.285176 10.3281 0.916294 11.0109C1.54652 11.6927 2.46266 12 3.59856 12H5.71567C6.85224 12 7.77012 11.691 8.40483 11.0074C9.04069 10.3226 9.32914 9.33015 9.32914 8.10159V0.57838C9.32914 0.36734 9.17318 0.196258 8.98079 0.196258H7.25132C7.05893 0.196258 6.90297 0.36734 6.90297 0.57838V7.9544C6.90297 8.4414 6.7871 8.76457 6.60025 8.97864C6.42299 9.17139 6.11349 9.30589 5.59639 9.30589H3.80729C3.26868 9.30589 2.9518 9.1705 2.7759 8.9811C2.59761 8.76735 2.4858 8.44292 2.4858 7.9544V0.57838C2.4858 0.36734 2.32984 0.196258 2.13745 0.196258H0.348346Z"
      fill="currentColor"
    ></path>
    <path
      d="M18.5737 0.196258C18.3813 0.196258 18.2254 0.36734 18.2254 0.57838V8.10159C18.2254 9.33394 18.5105 10.3281 19.1417 11.0109C19.7719 11.6927 20.688 12 21.8239 12H23.941C25.0776 12 25.9955 11.691 26.6302 11.0074C27.2661 10.3226 27.5545 9.33015 27.5545 8.10159V0.57838C27.5545 0.36734 27.3985 0.196258 27.2062 0.196258H25.4767C25.2843 0.196258 25.1283 0.36734 25.1283 0.57838V7.9544C25.1283 8.44141 25.0125 8.76457 24.8256 8.97864C24.6483 9.17139 24.3388 9.30589 23.8218 9.30589H22.0327C21.4941 9.30589 21.1772 9.1705 21.0013 8.98111C20.823 8.76736 20.7112 8.44292 20.7112 7.9544V0.57838C20.7112 0.36734 20.5552 0.196258 20.3628 0.196258H18.5737Z"
      fill="currentColor"
    ></path>
    <path
      d="M36.7693 0.196258C36.5769 0.196258 36.4209 0.36734 36.4209 0.57838V7.80721C36.4209 8.39576 36.4893 8.94597 36.6296 9.45514L36.6305 9.45828C36.6312 9.46066 36.6319 9.46303 36.6326 9.4654C36.7878 9.97613 37.0333 10.424 37.3688 10.8042C37.7077 11.1884 38.1357 11.4838 38.6425 11.6967C38.6453 11.6978 38.648 11.699 38.6508 11.7C39.1749 11.9037 39.7879 12 40.4817 12H44.4922C44.6846 12 44.8406 11.8289 44.8406 11.6179V9.68801C44.8406 9.47697 44.6846 9.30589 44.4922 9.30589H40.586C40.213 9.30589 39.9206 9.25963 39.6992 9.17901C39.4792 9.09522 39.3181 8.99043 39.2032 8.87369C39.086 8.74385 39.0032 8.59757 38.9515 8.43205C38.9021 8.22976 38.8769 8.01641 38.8769 7.79085V0.57838C38.8769 0.36734 38.7209 0.196258 38.5285 0.196258H36.7693Z"
      fill="currentColor"
    ></path>
  </svg>
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

export default Nav;
