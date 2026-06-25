import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function YooBeeTech() {
  const tasks = [
    {
      text: "Built and deployed two responsive landing pages using React.js and JavaScript, improving deployment build time through optimized component architecture.",
      keywords: ["landing pages", "React.js", "JavaScript", "optimized component architecture"],
    },
    {
      text: "Designed end-to-end user flows and wireframes, translating business requirements into technical architecture documentation.",
      keywords: ["user flows", "wireframes", "technical architecture documentation"],
    },
    {
      text: "Collaborated on full-stack system design — RESTful API integration, frontend structure, backend logic.",
      keywords: ["full-stack", "system design", "RESTful API", "frontend structure", "backend logic"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col space-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Full Stack Development Intern <span className="text-AAsecondary">@ YooBee Tech LLP</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Oct 2024 – Jan 2025</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-400 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
