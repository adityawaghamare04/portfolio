import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion"; // Or import { motion } from "framer-motion";
import Link from "next/link"; // Link component is imported but not used in this snippet. Remove if not needed elsewhere.
import { useRouter } from "next/router"; // useRouter is imported but not used. Remove if not needed.
import { Link as ReactScrollLink } from "react-scroll";

interface MyNameProps {
  finishedLoading: boolean;
}

const MyName: React.FC<MyNameProps> = props => {
  // const router = useRouter(); // Not used currently

  return (
    <div
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32 md:px-28 sm:px-8 py-32 sm:py-52 relative" // Added relative for potential scroll indicator
    >
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 2.4, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 2.4, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-AAsecondary font-mono"
      >
        Hi, my name is
      </motion.span>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 2.5, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 2.5, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Aditya Waghamare
      </motion.h1>
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 2.6, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 2.6, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-400 font-About serif text-xl lg:text-4xl sm:text-2xl md:text-3xl mt-4"
      >
        Web Developer & AI/ML Engineer
      </motion.h2>

      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 2.7, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 2.7, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
      >
        I&apos;m an <span className="text-AAsecondary keyword-hover">AI/Web3 Developer</span> and <span className="text-AAsecondary keyword-hover">Machine Learning Engineer</span> passionate about building scalable, secure, and intelligent decentralized applications. As a <span className="text-AAsecondary keyword-hover">National Hackathons Finalist</span>, I specialize in combining Solidity smart contracts with Next.js frontends and PyTorch predictive models.
        <br className="3xl:block hidden" /> I love solving challenging engineering problems at the intersection of <span className="text-AAsecondary keyword-hover">Artificial Intelligence</span>, <span className="text-AAsecondary keyword-hover">Blockchain</span>, and <span className="text-AAsecondary keyword-hover">Finance</span>.
      </motion.h3>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 2.8, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 2.8, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="mt-12 text-center md:text-left"
      >
        <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
          <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary transition-transform duration-300 ease-out resume-button-hover">
            Check out my resume!
          </button>
        </a>
      </motion.div>

      {props.finishedLoading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: props.finishedLoading ? 0 : 3.0, duration: 0.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center cursor-pointer group z-10"
        >
          <ReactScrollLink to="aboutSection" spy={true} smooth={true} offset={-100} duration={600}>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-xs font-mono text-gray-500 group-hover:text-AAsecondary transition-colors duration-300 tracking-widest uppercase">
                Scroll Down
              </span>
              <div className="w-6 h-10 border-2 border-gray-500 group-hover:border-AAsecondary rounded-full flex justify-center p-1 transition-colors duration-300">
                <motion.div
                  animate={{
                    y: [0, 12, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                  className="w-1.5 h-3 bg-gray-500 group-hover:bg-AAsecondary rounded-full transition-colors duration-300"
                />
              </div>
            </div>
          </ReactScrollLink>
        </motion.div>
      )}

      {/* Background blend overlay between Hero and About Me */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-AAprimary to-transparent pointer-events-none z-0" />
    </div>
  );
};

export default MyName;
