import React from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";
import Freelance from "./Descriptions/Freelance";
import YooBeeTech from "./Descriptions/YooBeeTech";
import Hackathons from "./Descriptions/Hackathons";
import Pccoe from "./Descriptions/Pccoe";

export default function WhereIHaveWorked() {
  const [DescriptionJob, setDescriptionJob] = React.useState("Freelance");

  const GetDescription = () => {
    switch (DescriptionJob) {
      case "Freelance":
        return <Freelance />;
      case "YooBeeTech":
        return <YooBeeTech />;
      case "Hackathons":
        return <Hackathons />;
      case "Pccoe":
        return <Pccoe />;
      default:
        return <Freelance />;
    }
  };

  return (
    <div id="experienceSection" data-aos="fade-up" className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary w-full">
      {/* Title */}
      <section className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"} />
          <span className="text-AAsecondary font-sans text-sm sm:text-xl"> 02.</span>
        </div>

        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Where I&apos;ve Worked & Studied
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>

      {/* Content */}
      <section className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center items-center md:items-start w-full max-w-4xl px-4">
        {/* Left Side Company Buttons */}
        <CompaniesBar setDescriptionJob={setDescriptionJob} DescriptionJob={DescriptionJob} />
        {/* Description Panel */}
        <div className="flex-1 md:pl-8">
          {GetDescription()}
        </div>
      </section>
    </div>
  );
}

const CompaniesBar = ({ setDescriptionJob, DescriptionJob }) => {
  const [barPosition, setBarPosition] = React.useState(-8);
  const [barAbovePosition, setBarAbovePosition] = React.useState(0);

  const CompanyButton = ({ CompanyName, BarPosition, BarAbovePosition, JobKey }) => {
    const isActive = DescriptionJob === JobKey;
    return (
      <button
        onClick={() => {
          setBarPosition(BarPosition);
          setBarAbovePosition(BarAbovePosition);
          setDescriptionJob(JobKey);
        }}
        className={`flex-none sm:text-sm text-xs text-center md:text-left hover:text-AAsecondary hover:bg-ResumeButtonHover rounded font-mono py-3 md:pl-6 md:px-4 md:w-44 w-32 duration-500 ${
          isActive ? "bg-ResumeButtonHover text-AAsecondary" : "text-gray-500"
         }`}
      >
        {CompanyName}
      </button>
    );
  };

  return (
    <div
      id="WhereIhaveWorkedSection"
      className="flex flex-col md:flex-row w-full md:w-auto overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 justify-start sm:justify-center items-start sm:items-center"
    >
      {/* Animated Vertical Bar (Desktop Only) */}
      <div className="hidden md:block bg-gray-500 relative h-0.5 w-34 md:h-[200px] translate-y-1 md:w-0.5 rounded md:order-1 order-2">
        <motion.div
          animate={{ y: barPosition }}
          transition={{ duration: 0.3 }}
          className="absolute w-10 h-0.5 md:w-0.5 md:h-12 rounded bg-AAsecondary"
          style={{ top: "12px" }}
        ></motion.div>
      </div>

      {/* Buttons */}
      <div className="flex flex-row md:flex-col md:order-2 order-1 space-x-2 md:space-x-0 md:space-y-1 pl-4 md:pl-0">
        <CompanyButton CompanyName="Freelance" BarPosition={0} BarAbovePosition={0} JobKey="Freelance" />
        <CompanyButton CompanyName="YooBee Tech" BarPosition={50} BarAbovePosition={128} JobKey="YooBeeTech" />
        <CompanyButton CompanyName="Hackathons" BarPosition={100} BarAbovePosition={256} JobKey="Hackathons" />
        <CompanyButton CompanyName="PCCOER Pune" BarPosition={150} BarAbovePosition={384} JobKey="Pccoe" />
      </div>

      {/* Animated Horizontal Bar (Mobile Only) */}
      <div className="block md:hidden w-full h-0.5 rounded bg-gray-500 mt-2">
        <motion.div
          animate={{ x: barAbovePosition }}
          transition={{ duration: 0.3 }}
          className="w-[128px] h-0.5 rounded bg-AAsecondary"
        ></motion.div>
      </div>
    </div>
  );
};
