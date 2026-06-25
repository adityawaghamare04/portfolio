import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Pccoe() {
  const tasks = [
    {
      text: "Maintaining a Strong Academic Record while completing a Bachelor of Engineering in Information Technology.",
      keywords: ["Bachelor of Engineering", "Information Technology"],
    },
    {
      text: "Built academic and personal projects spanning computer vision, NLP, and full-stack web development — including a 5,000+ frame ML training pipeline for real-time gesture recognition.",
      keywords: ["computer vision", "NLP", "full-stack web development", "5,000+ frame ML training pipeline", "gesture recognition"],
    },
    {
      text: "Achieved 5-star HackerRank ratings in C++, Python, and SQL.",
      keywords: ["5-star HackerRank", "C++", "Python", "SQL"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col space-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Bachelor of Engineering (Information Technology) <span className="text-AAsecondary">@ PCCOER, Pune</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">2022 – 2026</span>

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
