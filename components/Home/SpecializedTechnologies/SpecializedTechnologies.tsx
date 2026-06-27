import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import {
  Brain,
  Cpu,
  Database,
  Network,
  Braces,
  FileCode,
  Sliders,
  Eye,
  MessageSquare,
  LineChart,
  Terminal,
  Server
} from "lucide-react";

const iconMap: { [key: string]: string } = {
  // Languages
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "HTML/CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",

  // AI / ML Frameworks
  "PyTorch": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
  "TensorFlow": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  "Keras": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg",
  "Scikit-learn": "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  "HuggingFace Transformers": "https://cdn.simpleicons.org/huggingface/FFD21E",
  "LangChain": "https://cdn.simpleicons.org/langchain/173B3F",
  "Streamlit": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg",

  // AI / ML Libraries
  "MediaPipe": "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mediapipe.svg",
  "OpenCV": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
  "NumPy": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
  "Pandas": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",

  // Web Frameworks & Tools
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",

  // Web3 / Blockchain
  "Solidity": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",
  "Remix IDE": "https://cdn.simpleicons.org/remix/667DFF",
  "Ethereum": "https://cdn.simpleicons.org/ethereum/3C3C3D",
  "Hardhat": "/Hardhat.png",
  "Foundry": "/foundry.png",
  "Metamask": "/metamask.png",
  "Solana": "https://cdn.simpleicons.org/solana/9945FF",
  "IPFS": "https://cdn.simpleicons.org/ipfs/65C294",

  // Developer Tools
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "Postman": "https://cdn.simpleicons.org/postman/FF6C37",
  "GitHub Actions": "https://cdn.simpleicons.org/githubactions/2088FF",
  "Railway": "https://cdn.simpleicons.org/railway/white",

  // Database
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",

  // Operating Systems
  "Linux (CLI, file system)": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  "Windows": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg"
};

const conceptIcons: { [key: string]: React.ComponentType<any> } = {
  "Data Structures & Algorithms": FileCode,
  "Object-Oriented Programming (OOP)": Braces,
  "Database Management Systems (DBMS)": Database,
  "Operating Systems": Cpu,
  "Model Training & Evaluation": LineChart,
  "Data Preprocessing & Feature Engineering": Sliders,
  "NLP": Brain,
  "Computer Vision": Eye,
  "Prompt Engineering": Terminal,
  "RAG Pipelines": Network,
  "Model Deployment": Server
};

export default function SpecializedTechnologies() {
  const skillGroups = [
    {
      title: "Languages",
      skills: ["C++", "Python", "JavaScript", "SQL", "HTML/CSS"],
    },
    {
      title: "AI / ML Frameworks",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Keras",
        "Scikit-learn",
        "HuggingFace Transformers",
        "LangChain",
        "Streamlit",
      ],
    },
    {
      title: "AI / ML Libraries",
      skills: ["MediaPipe", "OpenCV", "NumPy", "Pandas"],
    },
    {
      title: "Web Frameworks & Tools",
      skills: ["React.js", "Next.js", "FastAPI", "Node.js", "Bootstrap"],
    },
    {
      title: "Web3 / Blockchain",
      skills: ["Solidity", "Remix IDE", "Ethereum", "Hardhat", "Foundry", "Metamask", "Solana", "IPFS"],
      note: "LinkedIn certified, paired with FUNDME project",
    },
    {
      title: "Developer Tools",
      skills: ["VS Code", "Git", "Postman", "GitHub Actions", "Railway"],
    },
    {
      title: "Database",
      skills: ["MySQL", "MongoDB", "Firebase", "Chromadb"],
    },
    {
      title: "Operating Systems",
      skills: ["Linux (CLI, file system)", "Windows"],
    }
  ];

  return (
    <div
      id="skillsSection"
      data-aos="fade-up"
      className="flex flex-col space-y-12 bg-AAprimary w-full 2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-24 px-4"
    >
      {/* Section Title */}
      <div className="flex flex-row items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm sm:text-xl"> 03.</span>
          <span className="font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-48 md:w-64 opacity-85">
            {" "}
            Specialized Technologies
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-0">
        {skillGroups.map((group, index) => (
          <div
            key={index}
            className="flex flex-col space-y-4 p-6 rounded-lg bg-AAtertiary bg-opacity-40 border border-gray-800 hover:border-AAsecondary hover:shadow-[0_0_15px_rgba(255,120,0,0.15)] hover:-translate-y-1 transition-all duration-300 group"
          >
            {/* Header */}
            <div className="flex flex-row items-center space-x-2 border-b border-gray-800 pb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-AAsecondary group-hover:scale-150 transition-all duration-300"></span>
              <h3 className="text-gray-200 font-bold font-Header text-base tracking-wide group-hover:text-AAsecondary transition-colors duration-300">
                {group.title}
              </h3>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {group.skills.map((skill, sIdx) => {
                const iconUrl = iconMap[skill];
                const ConceptIcon = conceptIcons[skill] || (skill === "Chromadb" ? Database : null);

                return (
                  <span
                    key={sIdx}
                    className="flex items-center space-x-2 px-3 py-1.5 text-xs font-mono rounded bg-AAprimary bg-opacity-90 border border-gray-700 text-gray-400 hover:text-AAsecondary hover:border-AAsecondary transition-all duration-300 hover:bg-ResumeButtonHover hover:cursor-default select-none"
                  >
                    {iconUrl ? (
                      <img
                        src={iconUrl}
                        alt={`${skill} logo`}
                        className="w-4 h-4 object-contain transition-transform duration-300 hover:scale-110"
                      />
                    ) : ConceptIcon ? (
                      <ConceptIcon className="w-3.5 h-3.5 text-AAsecondary opacity-80" />
                    ) : null}
                    <span>{skill}</span>
                  </span>
                );
              })}
            </div>

            {/* Optional Note */}
            {group.note && (
              <span className="text-[10px] font-mono text-gray-500 italic mt-auto pt-2 block">
                * {group.note}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

