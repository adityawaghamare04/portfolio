import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import { Monitor, Cpu, Check, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function FreelanceServices() {
  const services = [
    {
      title: "Website Development",
      icon: Monitor,
      subtitle:
        "End-to-end web application development — from initial concept to production deployment. I build fast, responsive, and fully functional sites and web apps, not just static pages.",
      bulletPoints: [
        {
          boldText: "Full-stack development",
          normalText: "with Next.js, React, Node.js, and FastAPI",
        },
        {
          boldText: "Real-time, interactive applications",
          normalText: "(live data, WebSocket-based updates, session handling) — ",
          link: {
            text: "see SmartQueue",
            url: "#SomethingIveBuiltSection", // Scroll back to the projects section
          },
        },
        {
          boldText: "Responsive, animation-rich front-ends",
          normalText: "— ",
          link: {
            text: "see SoulSnap",
            url: "#SomethingIveBuiltSection", // Scroll back to the projects section
          },
        },
        {
          boldText: "Deployment and hosting setup",
          normalText: "on Vercel, Railway, or your platform of choice",
        },
      ],
      engagement: "typically fixed-scope for defined builds, hourly for ongoing iteration.",
    },
    {
      title: "AI Agents, Workflows & RAG Implementation",
      icon: Cpu,
      subtitle:
        "I design and build AI-powered systems — agents that take action, retrieval-augmented pipelines that ground LLM outputs in real data, and automation workflows that remove repetitive manual work.",
      bulletPoints: [
        {
          boldText: "AI agent design using LangChain",
          normalText: "— task-oriented agents built on top of LLM APIs",
        },
        {
          boldText: "RAG (Retrieval-Augmented Generation) pipelines",
          normalText: "— connecting LLMs to your own documents, databases, or knowledge bases for accurate, grounded answers",
        },
        {
          boldText: "Prompt engineering and LLM integration",
          normalText: "(OpenAI API and others) for chatbots, assistants, and internal tools",
        },
        {
          boldText: "Workflow automation",
          normalText: "— scripting and API integrations to reduce manual, repetitive work",
        },
      ],
      engagement: "scoped per use case — happy to start with a small pilot to validate the approach before a larger build.",
    },
  ];

  return (
    <div
      id="freelanceServicesSection"
      data-aos="fade-up"
      className="flex flex-col space-y-12 bg-AAprimary w-full 2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-24 px-4"
    >
      {/* Section Title */}
      <div className="flex flex-row items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm sm:text-xl"> 05.</span>
          <span className="font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-48 md:w-64 opacity-85">
            {" "}
            Freelance Services
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      {/* Services Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:px-0">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div
              key={index}
              className="flex flex-col justify-between p-8 rounded-xl bg-AAtertiary bg-opacity-40 border border-gray-800 hover:border-AAsecondary hover:shadow-[0_0_20px_rgba(255,120,0,0.12)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* Header Info */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 rounded-lg bg-AAprimary bg-opacity-95 border border-gray-700 text-AAsecondary group-hover:border-AAsecondary transition-colors duration-300">
                    <IconComponent className="w-6 h-6 animate-pulse" />
                  </div>
                  <h3 className="text-gray-200 font-bold font-Header text-lg md:text-xl tracking-wide group-hover:text-AAsecondary transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Subtitle / Intro text */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-Text">
                  {service.subtitle}
                </p>

                {/* Bullets */}
                <ul className="space-y-4 mb-8">
                  {service.bulletPoints.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start space-x-3 text-sm md:text-base text-gray-300">
                      <Check className="flex-none w-5 h-5 text-AAsecondary mt-0.5" />
                      <span>
                        <strong className="text-gray-200 font-semibold">{bullet.boldText}</strong>{" "}
                        {bullet.normalText}
                        {bullet.link && (
                          <a
                            href={bullet.link.url}
                            className="text-AAsecondary hover:underline inline-flex items-center space-x-0.5 hover:text-orange-400 transition-colors"
                          >
                            <span>{bullet.link.text}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Engagement Type Footer info */}
              <div className="mt-auto pt-6 border-t border-gray-800 flex items-center space-x-3 bg-AAprimary bg-opacity-30 rounded-lg p-4">
                <Sparkles className="flex-none w-5 h-5 text-AAsecondary" />
                <p className="text-xs md:text-sm font-mono text-gray-400 leading-relaxed">
                  <span className="text-gray-200 font-bold">Engagement:</span> {service.engagement}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
