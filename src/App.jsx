/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useCollapse } from "react-collapsed";
import VideoDialog from "./components/VideoDialog";
import Stuck from "./components/Stuck";
function BackgroundSection({ bgPosition }) {
  return (
    <div
      className="main transition-all duration-300 ease-out"
      style={{
        height: "calc(100dvh - 80px)",
        backgroundImage: `image-set(
          url("https://production.uulacdn.com/imgproxy/nnlKyEXIFn-ikDB11Eoza1KSHXWj7YOrVX1ew-DeM5c/rt:fit/w:1920/dpr:1/czM6Ly91dWxhLXBy/b2R1Y3Rpb24vc3Rv/cmUvY2RuL2NvdXJz/ZWJ1bmRsZS8xMy9s/YXJnZV9pbWFnZS84/N2FiYTFiMTNjZDI1/ZmYwN2JhODg4YTMz/MjE2ZjIxOC5qcGc") 1x,
          url("https://production.uulacdn.com/imgproxy/uiAsckvSDbvLfXZZ-TW-amh4hqfZdNiC6SWGKfIf3IQ/rt:fit/w:1920/dpr:2/czM6Ly91dWxhLXBy/b2R1Y3Rpb24vc3Rv/cmUvY2RuL2NvdXJz/ZWJ1bmRsZS8xMy9s/YXJnZV9pbWFnZS84/N2FiYTFiMTNjZDI1/ZmYwN2JhODg4YTMz/MjE2ZjIxOC5qcGc") 2x,
          url("https://production.uulacdn.com/imgproxy/g9Y8yYzOCZ8MjT7hiJbU7zxPT8uIVvc2j0hA570GLT4/rt:fit/w:1920/dpr:3/czM6Ly91dWxhLXBy/b2R1Y3Rpb24vc3Rv/cmUvY2RuL2NvdXJz/ZWJ1bmRsZS8xMy9s/YXJnZV9pbWFnZS84/N2FiYTFiMTNjZDI1/ZmYwN2JhODg4YTMz/MjE2ZjIxOC5qcGc") 3x
        )`,
        backgroundPositionY: `${bgPosition}%`,
        transition: "background-position 0.3s ease-out",
      }}
    ></div>
  );
}

function Button({ children, onClick, style }) {
  return (
    <button
      className={`font-semibold rounded-xl w-max transition-all duration-[400ms] hover:bg-[#4190ed] bg-[var(--uula-button-background)] py-[12px] px-[32px] cursor-pointer ${
        style ? style : {}
      }`}
      style={{ height: "56px", padding: "var(--spacing-3x) var(--spacing-8x)" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

const ContentSection = ({ marginTop, openDialog }) => {
  return (
    <section
      className="styles_layoutContentRoot__EffBd"
      style={{
        marginTop: `${marginTop}px`,
        borderRadius: "32px 32px 0 0",
        backgroundColor: "var(--color-background-elevation-1)",
      }}
    >
      <section
        className="flex flex-col items-center gap-2 pt-[50px] pb-[60px] gap-12 w-full pb-[60px]"
        style={{
          backgroundColor: "var(--color-background-elevation-2)",
          borderRadius: "60px 60px 0px 0px",
          marginBlockEnd: "-60px",
        }}
      >
        <span
          className="_typo_849e9_15 _subheading-regular_849e9_66 _text-basic-secondary_849e9_111 styles_grade__5mR7Q"
          style={{
            font: "var(--typography-subheading-regular)",
            color: "var(--color-text-basic-secondary)",
          }}
        >
          اختبار القدرات
        </span>
        <h1
          className="!text-4xl !font-bold"
          style={{
            font: "var(--typography-subheading-medium)",
            color: "var(--color-text-basic-main)",
          }}
        >
          باقة القدرات
        </h1>
        <div className="flex gap-2">
          <p className="_tips_1b4uj_14 styles_tip__ocbPq">الكمي</p>
          <p className="_tips_1b4uj_14 styles_tip__ocbPq">اللفظي</p>
        </div>
        <span
          className="_typo_849e9_15 _subheading-regular_849e9_66 _text-basic-main_849e9_108 styles_name___pWIk"
          style={{
            color: "var(--color-text-basic-main)",
            font: "var(--typography-subheading-regular)",
          }}
        >
          احصل على أقوى مراجعة لاختبار القدرات
        </span>
        <div
          className="flex flex-col items-center gap-10 mb-12 cursor-pointer"
          onClick={openDialog}
        >
          <Button style={"!px-[55px]"}>اشتراك</Button>
          <div className="flex items-center gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                role="img"
              >
                <g clipPath="url(#clip0_2515_25)">
                  <path
                    fill="var(--uula-button-accessory-hover)"
                    d="M5 5.745C5 4.04 6.874 2.959 8.406 3.78l11.402 6.11a2.215 2.215 0 0 1 .04 3.907l-11.402 6.4C6.913 21.059 5 19.98 5 18.256z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_2515_25">
                    <path fill="#fff" d="M0 0h24v24H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span
              style={{
                font: "var(--typography-focus-medium)",
              }}
            >
              تعرف على الباقة
            </span>
          </div>
        </div>
      </section>
      <SubscribeSection />
      <Amuse />
      <MoreAmuse />
      <FreeTrials />
      <Discount />
      <Questions />
    </section>
  );
};

const SubscribeSection = () => {
  return (
    <section
      className="flex flex-col items-center pt-[60px] pb-[20px] px-[12px] w-full gap-14"
      style={{
        backgroundColor: "var(--color-background-elevation-3)",
        borderRadius: "60px ",
        marginBlockEnd: "-60px",
      }}
    >
      <div className="flex flex-col gap-2">
        <span style={{ font: "var(--typography-subheading-medium)" }}>
          اختر الاشتراك
        </span>
        <span style={{ font: "var(--typography-subheading-regular)" }}>
          اختر مدة الاشتراك
        </span>
      </div>
      <div
        className="flex flex-col items-center justify-center py-[8px] px-15 border border-blue-600 font-semibold gap-12"
        style={{
          borderRadius: "32px",
          color: "var(--color-text-basic-secondary)",
          font: "var(--typography-subheading-medium)",
          backgroundColor: "var(--color-background-elevation-3)",
          border: "1px solid var(--color-border-basic-active)",
        }}
      >
        <span
          className="mt-9"
          style={{ color: "var(--color-text-basic-main)" }}
        >
          شهر
        </span>
        <div>
          <div>ينتهي بشهر</div>
          <div>2025-3-23</div>
        </div>
        <div>
          <span
            className="text-blue-300"
            style={{
              font: "var(--typography-subheading-large)",
              color: "var(--color-text-accent-info)",
            }}
          >
            1 ر.س
          </span>
          <div
            className="relative _lineThrough_849e9_33"
            style={{ font: "var(--typography-caption-medium)" }}
          >
            600 ر.س
          </div>
        </div>
      </div>
      <Button style={"mb-[38px]"}>اضف الى سلة التسوق</Button>
    </section>
  );
};

const Amuse = () => (
  <section
    className="flex flex-col items-center pt-[60px] pb-[20px] px-[12px] w-full gap-14 w-full "
    style={{
      borderRadius: "60px 60px 0px 0px ",
    }}
  >
    <span
      style={{
        marginBlockStart: "var(--spacing-15x)",
        marginblockEnd: "50px",
        color: "var(--color-text-basic-main)",
        font: "var(--typography-subheading-medium)",
      }}
    >
      كل موادك باشتراك واحد
    </span>
    <div className="flex gap-6 font-semibold">
      <div className="flex flex-col gap-6 items-center">
        <div
          className="relative w-[120px] h-[120px] lg:w-[180px] lg:h-[180px] overflow-hidden"
          style={{
            borderRadius: "40px",
          }}
        >
          <img
            src="public/images/e7babf74430bca93aaba5b646161fffb.png"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover z-12"
          />
          <img
            src="public/images/f4f1f85d5ba06d7c2052d31f95f5ae59.jpg"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover z-10"
          />
        </div>
        <p
          style={{
            font: "font: var(--typography-subheading-regular)",
          }}
        >
          الكمي
        </p>
      </div>

      <div className="flex flex-col gap-6 items-center">
        <div
          className="relative w-[120px] h-[120px] lg:w-[180px] lg:h-[180px] overflow-hidden"
          style={{
            borderRadius: "40px",
          }}
        >
          <img
            src="public/images/e829201be03c079006ee9f4dc025e181.jpg"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover z-10"
          />
          <img
            src="public/images/4b18d3fdc19a3455ee9672f2e79082fb.png"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover z-12"
          />
        </div>

        <p
          style={{
            font: "font: var(--typography-subheading-regular)",
          }}
        >
          اللفظي
        </p>
      </div>
    </div>

    <Button style={"mb-[120px] !px-[55px]"}>اشتراك</Button>
  </section>
);

const MoreAmuse = () => (
  <section
    className="flex flex-col items-center pt-[60px] pb-[20px] px-[12px] w-full gap-14 w-full "
    style={{
      borderRadius: "60px ",
      backgroundColor: "var(--color-background-elevation-3)",
    }}
  >
    <span>كل اللي تحتاجة للتفوق</span>
    <span>اتقن موادك مع أفضل واحدث تقنيات التعليم</span>
    <div className="flex justify-around flex-wrap lg:justify-center flex-row-reverse gap-1">
      <MoreAmuseImage
        svg={
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <g clipPath="url(#clip0)">
              <rect
                x="0.5"
                width="60"
                height="60"
                rx="15"
                fill="#7C62FE"
              ></rect>
              <path fill="#7C62FE" d="M10.5 10h40v40h-40z"></path>
              <path
                d="M22.167 11.667c-.92 0-1.667.747-1.667 1.667V15h-1.667a3.343 3.343 0 00-3.333 3.334v23.333C15.5 43.5 17 45 18.833 45h23.334C44 45 45.5 43.5 45.5 41.667V18.334C45.5 16.5 44 15 42.167 15H40.5v-1.666a1.667 1.667 0 00-3.333 0V15H23.833v-1.666c0-.92-.746-1.667-1.666-1.667zm-3.334 11.667h23.334V40c0 .92-.747 1.667-1.667 1.667h-20c-.92 0-1.667-.747-1.667-1.667V23.334z"
                fill="#fff"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0">
                <path
                  fill="#fff"
                  transform="translate(.5)"
                  d="M0 0h60v60H0z"
                ></path>
              </clipPath>
            </defs>
          </svg>
        }
        text={"مناهج حديثة"}
      />

      <MoreAmuseImage
        svg={
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <g clipPath="url(#clip0)">
              <rect
                x="0.5"
                width="60"
                height="60"
                rx="15"
                fill="#7C62FE"
              ></rect>
              <path fill="#7C62FE" d="M10.5 10h40v40h-40z"></path>
              <path
                d="M31.396 39.34h-1.27a.64.64 0 01-.634-.643V37.41a.64.64 0 01.635-.643h1.27a.64.64 0 01.634.643v1.287a.64.64 0 01-.635.643zm3.263-9.968l-1.142 1.183c-.915.939-1.486 1.71-1.486 3.64h-2.539v-.643c0-1.415.571-2.701 1.485-3.64l1.575-1.62c.58-.572.87-1.418.702-2.32-.172-.922-.874-1.707-1.764-1.963-1.404-.403-2.713.41-3.13 1.636-.163.478-.559.833-1.058.833h-.37c-.737 0-1.252-.726-1.047-1.444.545-1.893 2.134-3.335 4.095-3.64 1.934-.303 3.769.705 4.916 2.313 1.498 2.1 1.057 4.354-.237 5.665z"
                fill="#fff"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.51 44.08c7.77 0 14.07-6.3 14.07-14.07 0-7.77-6.3-14.07-14.07-14.07-7.77 0-14.07 6.3-14.07 14.07 0 7.77 6.3 14.07 14.07 14.07zm0 2.6c9.206 0 16.67-7.464 16.67-16.67 0-9.207-7.464-16.67-16.67-16.67-9.207 0-16.67 7.463-16.67 16.67 0 9.206 7.463 16.67 16.67 16.67z"
                fill="#fff"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0">
                <path
                  fill="#fff"
                  transform="translate(.5)"
                  d="M0 0h60v60H0z"
                ></path>
              </clipPath>
            </defs>
          </svg>
        }
        text={"اسأل المدرسين"}
      />
      <MoreAmuseImage
        svg={
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <g clipPath="url(#clip0)">
              <rect
                x="0.5"
                width="60"
                height="60"
                rx="15"
                fill="#7C62FE"
              ></rect>
              <path fill="#7C62FE" d="M10.5 10h40v40h-40z"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.84 16.032c-2.585-1.5-5.84.367-5.84 3.4v21.136c0 3.033 3.255 4.9 5.84 3.4l18.21-10.569c2.6-1.509 2.6-5.29 0-6.799L23.84 16.032zm-8.84 3.4c0-5.318 5.737-8.67 10.346-5.995l18.21 10.569c4.592 2.665 4.592 9.323 0 11.988l-18.21 10.569C20.737 49.236 15 45.886 15 40.568V19.432z"
                fill="#fff"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0">
                <path
                  fill="#fff"
                  transform="translate(.5)"
                  d="M0 0h60v60H0z"
                ></path>
              </clipPath>
            </defs>
          </svg>
        }
        text={"فيديوهات تشرح لك"}
      />
      <MoreAmuseImage
        svg={
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <g clipPath="url(#clip0)">
              <rect
                x="0.5"
                width="60"
                height="60"
                rx="15"
                fill="#7C62FE"
              ></rect>
              <path fill="#7C62FE" d="M10.5 10h40v40h-40z"></path>
              <path
                d="M20.5 13.333a3.353 3.353 0 00-3.333 3.333v26.667a3.353 3.353 0 003.333 3.333h20c1.822 0 3.334-1.511 3.334-3.333v-20l-10-10H20.5zm0 3.333h11.667v6.25s-.042 1.108.533 1.684c.576.575 1.55.4 1.55.4h6.25v18.333h-20V16.666z"
                fill="#fff"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0">
                <path
                  fill="#fff"
                  transform="translate(.5)"
                  d="M0 0h60v60H0z"
                ></path>
              </clipPath>
            </defs>
          </svg>
        }
        text={"المذكرات"}
      />
      <MoreAmuseImage
        svg={
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <g clipPath="url(#clip0)">
              <rect
                x="0.5"
                width="60"
                height="60"
                rx="15"
                fill="#7C62FE"
              ></rect>
              <path fill="#7C62FE" d="M10.5 10h40v40h-40z"></path>
              <path
                d="M39.354 17.937l-3.874-3.874a7.042 7.042 0 00-9.96 0L14.563 25.02a7.042 7.042 0 000 9.96L25.52 45.937a7.042 7.042 0 009.96 0L46.437 34.98a7.045 7.045 0 00.893-8.87l-1.948 1.948a4.38 4.38 0 01-.829 5.037L33.595 44.053a4.378 4.378 0 01-6.19 0L16.447 33.095a4.378 4.378 0 010-6.19l10.958-10.958a4.378 4.378 0 016.19 0l3.875 3.874 1.884-1.884z"
                fill="#fff"
              ></path>
              <path
                d="M26.95 29.42a1.707 1.707 0 112.414-2.414l4.828 4.829a1.707 1.707 0 11-2.414 2.414L26.95 29.42z"
                fill="#fff"
              ></path>
              <path
                d="M43.85 19.764a1.707 1.707 0 012.413 2.414l-12.07 12.07a1.707 1.707 0 11-2.415-2.413L43.85 19.764z"
                fill="#fff"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0">
                <path
                  fill="#fff"
                  transform="translate(.5)"
                  d="M0 0h60v60H0z"
                ></path>
              </clipPath>
            </defs>
          </svg>
        }
        text={"اختبارات ذكية"}
      />
    </div>
  </section>
);

const MoreAmuseImage = ({ svg, text }) => (
  <div className="flex items-center flex-col gap-4 sm:gap-6 w-[90px] sm:w-[110px] md:w-[129px] mb-[30px] sm:mb-[40px] md:mb-[50px]">
    <div className="flex items-center flex-col gap-4 sm:gap-5 w-[60px] sm:w-[70px] md:w-[100px] mb-[30px] sm:mb-[40px] md:mb-[50px]">
      {svg}
    </div>
    <span
      className="text-xs sm:text-sm md:text-base"
      style={{
        font: "var(--typography-caption-medium)",
        color: "var(--color-text-basic-main)",
      }}
    >
      {text}
    </span>
  </div>
);

const FreeTrials = () => (
  <section className="flex flex-col items-center pt-[60px] pb-[20px] px-[12px] w-full gap-14 w-full  px-[16px] lg:px-[64px] ">
    <h3
      className="text-3xl mb-[64px]"
      style={{ font: "var(--typography-heading-medium)" }}
    >
      جرب درساً مجانياً
    </h3>
    <div className="flex justify-start gap-6 w-full font-semibold">
      <div className="flex flex-col gap-6 items-center transition-all duration-300 lg:hover:scale-105 cursor-pointer">
        <div
          className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] overflow-hidden"
          style={{
            borderRadius: "24px",
          }}
        >
          <img
            src="public/images/e7babf74430bca93aaba5b646161fffb.png"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover z-12"
          />
          <img
            src="public/images/f4f1f85d5ba06d7c2052d31f95f5ae59.jpg"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover z-10"
          />
          <p
            className="absolute bottom-4 right-2 z-[14] text-sm sm:text-base md:text-lg"
            style={{
              font: "var(--typography-subheading-regular)",
            }}
          >
            الكمي
          </p>
          <p
            className="absolute top-2 right-2 z-[14] bg-[#07090d33] rounded-xl p-1 sm:p-2 px-2 sm:px-2.5 text-xs sm:text-sm md:text-base"
            style={{
              font: "var(--typography-subheading-regular)",
            }}
          >
            مجانا
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6 items-center">
        <div
          className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] overflow-hidden"
          style={{
            borderRadius: "24px",
          }}
        >
          <img
            src="public/images/e829201be03c079006ee9f4dc025e181.jpg"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover z-10"
          />
          <img
            src="public/images/4b18d3fdc19a3455ee9672f2e79082fb.png"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover z-12"
          />
          <p
            className="absolute bottom-5 right-2 z-[14]"
            style={{
              font: "font: var(--typography-subheading-regular)",
            }}
          >
            اللفظي
          </p>
          <p
            className="absolute top-2 right-2 z-[14] !font-normal bg-[#07090d33] rounded-xl p-2 px-2.5"
            style={{
              font: "font: var(--typography-subheading-regular)",
            }}
          >
            مجانا
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Questions = () => (
  <section
    className="flex flex-col items-center pt-[24px] pr-[16px] pl-[16px] pb-[40px] w-full gap-14 lg:pt-[40px] lg:pr-[64px] lg:pb-[64px] lg:pl-[64px]"
    style={{
      backgroundColor: "var(--color-background-elevation-2)",
      marginBlockEnd: "-60px",
      borderRadius: "64px 64px",
    }}
  >
    <span className="_typo_849e9_15 _body-regular_849e9_72 _text-basic-main_849e9_108 FaqSection_header__cBO0R">
      الأسئلة الشائعة
    </span>
    <div className="flex flex-col gap-[16px] w-full">
      <Dropdown
        title={"ما هي الباقة؟"}
        text={
          "الباقة عبارة عن سلة مواد توفرها علا لك بأسعار مخفضة وتشمل السلة المواد التي تحتاجها أثناء دراستك حسب تخصصك و مرحلتك الدراسية"
        }
      />{" "}
      <Dropdown
        title={
          "هل يوجد فرق في الدراسة أو المحتوى من خلال اشتراك الباقة او من خلال اشتراك لمادة واحدة فقط؟"
        }
        text={
          "لا يوجد فرق في المحتوى سواء كان في اشتراك باقة أو اشتراك مادة منفردة ماعدا التوفير الاقتصادي عند الاشتراك بالباقة و استفادتك من جميع المواد المتاحه في مرحلتك الدراسية"
        }
      />{" "}
      <Dropdown
        title={"لدي اشتراك في إحدى المواد، ماذا سيحدث اذا اشتركت كورس في باقة؟"}
        text={
          "إذا كان لديك اشتراك فعال ينتهي قبل نهاية الكورس و قمت باشتراك كورس كامل في باقة تحتوي تلك المادة ،سنقوم بترقية اشتراكك لتلك المادة إلى كورس كامل"
        }
      />{" "}
      <Dropdown
        title={"هل أستطيع استرداد اشتراكات الباقات؟"}
        text={
          "اشتراكات الباقات غير قابلة للاسترداد أو التبديل، حيث إنه  يمكن تجربة المواد من خلال الدروس المجانية قبل الاشتراك دائماً."
        }
      />
    </div>
  </section>
);

const Dropdown = ({ title, text }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div
      className="transition-all flex flex-col duration-400 bg-[var(--uula-accordion-item-color)]"
      style={{
        borderRadius: "8px",
      }}
    >
      <button
        className="_summary_1umo5_38"
        {...getToggleProps()}
        style={{
          border: "0",
          display: "grid",
          alignItems: "center",
          cursor: "pointer",
          gridTemplateColumns: "1fr min-content",
          minHeight: "56px",
          paddingInline: "16px",
          paddingBlock: "22px",
          width: "100%",
          textAlign: "left",
          background: "none",
        }}
      >
        <div className="_summaryText_1umo5_62 font-medium leading-8 text-right">
          {title}
        </div>
        {isExpanded ? <CloseIcon /> : <OpenIcon />}
      </button>

      <div
        {...getCollapseProps()}
        className="overflow-hidden transition-all duration-400"
        style={{
          opacity: isExpanded ? 1 : 0,
          transform: isExpanded ? "translateY(0)" : "translateY(-10px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          willChange: "transform, opacity", // Optimizes animations
        }}
      >
        <div
          className="p-[16px] transition-[padding] duration-300 ease-in-out"
          {...getCollapseProps()}
        >
          <p className="leading-8">{text}</p>
        </div>
      </div>
    </div>
  );
};

const OpenIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    role="img"
  >
    <path
      fill="gray"
      d="M11 19a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6z"
    ></path>
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    role="img"
  >
    <rect width="16" height="2" x="4" y="11" fill="gray" rx="1"></rect>
  </svg>
);

const Discount = () => (
  <section className="flex flex-col items-center pt-[120px] pb-[60px] px-[12px] w-full gap-8 w-full px-[64px]  ">
    <span
      style={{
        font: "var(--typography-subheading-medium)",
      }}
    >
      قيمة خيالية
    </span>
    <span className="_typo_849e9_15 _body-regular_849e9_72 _text-basic-main_849e9_108">
      اشتراك واحد يغطي جميع احتياجاتك التعليمية
    </span>
    <div className="styles_discountContainer__EM3fn">
      <span className="_typo_849e9_15 _heading-regular_849e9_54 _text-basic-main_849e9_108 styles_advertTextBefore__kKt8v">
        وفر لغاية
      </span>
      <span
        className="styles_discountAmount__awU8u styles_withOutline__jdXPF"
        data-content="50"
      >
        50
      </span>
      <span
        className="styles_percentSign__Gr031 styles_withOutline__jdXPF"
        data-content="%"
      >
        %
      </span>
      <span className="_typo_849e9_15 _heading-regular_849e9_54 _text-basic-main_849e9_108 styles_advertTextAfter__IMJvO">
        وداعا للمدرس الخصوصي!
      </span>
    </div>
    <Button style={"!px-[55px]"}>
      <span>اشتراك</span>
    </Button>
  </section>
);

function App() {
  const [marginTop, setMarginTop] = useState(250);
  const [bgPosition, setBgPosition] = useState(50);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  useEffect(() => {
    const updateMargin = () => {
      const zoomFactor = window.devicePixelRatio;
      setMarginTop(Math.max(50, 250 / zoomFactor));
    };

    const handleScroll = () => {
      const newBgPosition = Math.max(50, 50 + window.scrollY * 0.01);
      setBgPosition(Math.min(100, newBgPosition));
    };

    window.addEventListener("resize", updateMargin);
    window.addEventListener("scroll", handleScroll);
    updateMargin();

    return () => {
      window.removeEventListener("resize", updateMargin);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <main className="flex flex-col items-center relative">
        <BackgroundSection bgPosition={bgPosition} />
        <ContentSection marginTop={marginTop} openDialog={openDialog} />
      </main>

      <VideoDialog onClose={closeDialog} isOpen={isDialogOpen} />
      <Stuck />
    </>
  );
}

export default App;
