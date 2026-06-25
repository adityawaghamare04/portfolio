import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className="flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full 2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* Title */}
      <div data-aos="fade-up" className="flex flex-row items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm sm:text-xl"> 04.</span>
          <span className="font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col xl:space-y-36 space-y-8 md:space-y-28">

        {/* Project 1: UNMUTE.AI */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          {/* Left image */}
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-span-7">
              <a href="https://github.com/adityawaghamare04/UNMUTE.AI" target={"_blank"} rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>
              <Img src={"/img/unmute_ai.png"} alt={"UNMUTE.AI Screen shot"} className={`w-full rounded h-full`} />
            </div>
          </div>

          {/* right Content */}
          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/img/unmute_ai.png"} alt={"UNMUTE.AI Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 col-span-8 flex flex-col items-start md:items-end space-y-3">
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Computer Vision / Machine Learning</span>
                <span className="md:text-gray-200 text-AAsecondary font-bold text-xl">
                  UNMUTE.AI
                </span>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  A <span className="text-AAsecondary">real-time sign language translation system</span> that helps people communicate. Built a computer vision pipeline achieving 97–100% accuracy using 21-point 3D MediaPipe hand landmarks and a trained RandomForestClassifier. Integrates wrist-centered 3D normalization to cut feature noise by 30%, with parallel processing optimized for 25–30 FPS prediction.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-end">
                <span className="pr-4 z-10">Python</span>
                <span className="pr-4 z-10">PyTorch</span>
                <span className="pr-4 z-10">OpenCV</span>
                <span className="pr-4 z-10">MediaPipe</span>
                <span className="pr-4 z-10">Scikit-learn</span>
                <span className="pr-4 z-10">NumPy</span>
                <span className="pr-4 z-10">Pandas</span>
              </ul>
              <div className="z-10 flex flex-row space-x-5">
                <GithubIcon link="https://github.com/adityawaghamare04/UNMUTE.AI" />
                <a href="https://adityawaghamare-unmute-ai.hf.space/" target="_blank" rel="noreferrer" className="z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-gray-300 hover:text-AAsecondary hover:cursor-pointer
 transition ease-in-out delay-50 hover:-translate-y-1 
hover:scale-110 duration-200"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: ADHYAYAN */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          {/* Right image */}
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-start-6 col-span-7">
              <a href="https://github.com/adityawaghamare04/ADHYAYAN" target="_blank" rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>
              <Img src={"/img/adhyayan.png"} alt={"ADHYAYAN Screen shot"} className={`w-full rounded h-full`} />
            </div>
          </div>

          {/* left Content */}
          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/img/adhyayan.png"} alt={"ADHYAYAN Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start space-y-3 md:order-1">
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-AAsecondary text-base">AI / Personalized Education</span>
                <span className="md:text-gray-200 text-AAsecondary font-bold text-xl">
                  ADHYAYAN
                </span>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  A personalized <span className="text-AAsecondary">learning platform</span> featuring an adaptive roadmap and academic chatbot. Integrated OpenAI GPT API with optimized prompt engineering, cutting resolution times by 60%. Built modular RESTful APIs for domain selection, personality analysis, and prerequisite testing.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-start">
                <span className="pr-4 z-10">JavaScript</span>
                <span className="pr-4 z-10">FastAPI</span>
                <span className="pr-4 z-10">Bootstrap</span>
                <span className="pr-4 z-10">OpenAI API</span>
                <span className="pr-4 z-10">Vercel</span>
                <span className="pr-4 z-10">Railway</span>
              </ul>
              <div className="z-10 flex flex-row space-x-5">
                <GithubIcon link="https://github.com/adityawaghamare04/ADHYAYAN" />
                <a href="https://adhyayan1.vercel.app" target="_blank" rel="noreferrer" className="z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-gray-300 hover:text-AAsecondary hover:cursor-pointer
 transition ease-in-out delay-50 hover:-translate-y-1 
hover:scale-110 duration-200"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3: SmartQueue */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          {/* Left image */}
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-span-7">
              <a href="https://github.com/adityawaghamare04/SmartQueue" target={"_blank"} rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>
              <Img src={"/img/smartqueue.png"} alt={"SmartQueue Screen shot"} className={`w-full rounded h-full`} />
            </div>
          </div>

          {/* right Content */}
          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/img/smartqueue.png"} alt={"SmartQueue Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 col-span-8 flex flex-col items-start md:items-end space-y-3">
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Real-time Systems / Production Web App</span>
                <span className="md:text-gray-200 text-AAsecondary font-bold text-xl">
                  SmartQueue
                </span>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  A real-time <span className="text-AAsecondary">digital queue management system</span> for full production deployment. Admins run live queues from a dashboard while users join via secure, session-based single-use QR codes. Features live-synced Socket.io timer tracking, token validation on client/server, and instant session termination.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-end">
                <span className="pr-4 z-10">Node.js</span>
                <span className="pr-4 z-10">Express</span>
                <span className="pr-4 z-10">Socket.io</span>
                <span className="pr-4 z-10">Qrcodejs</span>
                <span className="pr-4 z-10">Html5-qrcode</span>
                <span className="pr-4 z-10">Railway</span>
              </ul>
              <div className="z-10 flex flex-row space-x-5">
                <GithubIcon link="https://github.com/adityawaghamare04/SmartQueue" />
                <a href="https://www.smartqueue.fun" target="_blank" rel="noreferrer" className="z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-gray-300 hover:text-AAsecondary hover:cursor-pointer
 transition ease-in-out delay-50 hover:-translate-y-1 
hover:scale-110 duration-200"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 4: SoulSnap */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          {/* Right image */}
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-start-6 col-span-7">
              <a href="https://github.com/adityawaghamare04/SoulSnap" target="_blank" rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>
              <Img src={"/img/soulsnap.png"} alt={"SoulSnap Screen shot"} className={`w-full rounded h-full`} />
            </div>
          </div>

          {/* left Content */}
          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/img/soulsnap.png"} alt={"SoulSnap Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start space-y-3 md:order-1">
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-AAsecondary text-base">Frontend / UI Craft</span>
                <span className="md:text-gray-200 text-AAsecondary font-bold text-xl">
                  SoulSnap Photography
                </span>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  A fully responsive, multi-page <span className="text-AAsecondary">photography portfolio website</span> built independently end-to-end. Features scroll-triggered animations (AOS), image lightboxing (GLightbox), touch carousels (Swiper.js), integrated Google Maps, and a contact form.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-start">
                <span className="pr-4 z-10">HTML5</span>
                <span className="pr-4 z-10">CSS3</span>
                <span className="pr-4 z-10">Bootstrap 5</span>
                <span className="pr-4 z-10">JavaScript</span>
                <span className="pr-4 z-10">AOS</span>
                <span className="pr-4 z-10">Swiper.js</span>
                <span className="pr-4 z-10">GLightbox</span>
              </ul>
              <div className="z-10 flex flex-row space-x-5">
                <GithubIcon link="https://github.com/adityawaghamare04/SoulSnap" />
                <a href="https://soulsnap.vercel.app/" target="_blank" rel="noreferrer" className="z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-gray-300 hover:text-AAsecondary hover:cursor-pointer
 transition ease-in-out delay-50 hover:-translate-y-1 
hover:scale-110 duration-200"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
