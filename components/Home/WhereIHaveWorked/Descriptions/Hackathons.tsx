import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Hackathons() {
  const tasks = [
    {
      text: "Finalist in 5+ national-level hackathons, including Navonmesh 2.0 and The Great Ninja Hack.",
      keywords: ["Finalist", "5+ national-level hackathons", "Navonmesh 2.0", "The Great Ninja Hack"],
    },
    {
      text: "Organized Inceptia, a national-level hackathon with 500+ participants and 30 competing teams, managing sponsor outreach and cross-team logistics.",
      keywords: ["Organized", "Inceptia", "500+ participants", "30 competing teams", "cross-team logistics"],
    },
    {
      text: "Served as Treasurer for ITSA (IT Students' Association), overseeing budget allocation across department-wide technical events including ERROR404 and SOLVEX.",
      keywords: ["Treasurer", "ITSA", "ERROR404", "SOLVEX"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col space-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            National Hackathon Finalist & Organizer <span className="text-AAsecondary">@ Hackathons & Leadership</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">2023 – 2025</span>
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
