import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Freelance() {
  const tasks = [
    {
      text: "Build full-stack web applications end-to-end — React/Next.js frontends backed by FastAPI and Node.js services — drawing on production experience from ADHYAYAN, a GPT-integrated learning platform that cut chatbot query resolution time by 60%.",
      keywords: ["React", "Next.js", "FastAPI", "Node.js", "ADHYAYAN"],
    },
    {
      text: "Design and prototype AI agent workflows and RAG pipelines using LangChain, combining retrieval-augmented generation with prompt engineering to ground LLM outputs in real data sources.",
      keywords: ["machine learning", "AI Agent workflows", "RAG pipelines", "LangChain", "LLM outputs"],
    },
    {
      text: "Build machine learning pipelines for predictive and computer-vision use cases — including UNMUTE.AI, a real-time gesture-recognition system reaching up to 100% accuracy at 25–30 FPS using PyTorch, OpenCV, and a custom-trained RandomForestClassifier.",
      keywords: ["machine learning", "computer-vision", "UNMUTE.AI", "PyTorch", "OpenCV", "RandomForestClassifier"],
    },
    {
      text: "Automate repetitive engineering and data workflows using Python scripting and API integrations, reducing manual effort in deployment and data-processing tasks.",
      keywords: ["Python scripting", "API integrations", "deployment", "data-processing"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col space-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            AI/Web Software Developer <span className="text-AAsecondary">@ Freelance</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">2023 - Present</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://github.com/adityawaghamare04", "_blank")}
          >
            github.com/adityawaghamare04
          </span>
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
