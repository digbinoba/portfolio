'use client';
import React from 'react';
import ProjectCard from './ProjectCard';
import SwiperShow from './swiper/Swiper';
import { motion } from 'framer-motion';
import {
  slideInFromTop,
  slideInFromLeft,
  slideInFromRight,
} from '@/utils/motion';
import { SparklesIcon, CodeBracketSquareIcon } from '@heroicons/react/24/solid';

export async function Projects() {
  return (
    <section
      className=" relative flex flex-col py-24 items-center justify-center mx-auto w-11/12 max-w-7xl 2xl:w-4/5 before:inset-x-0 before:h-px before:absolute before:w-4/5 before:top-0 before:-z-10 before:bg-gradient-to-r before:from-transparent before:via-slate-500 before:to-transparent before:max-w-7xl before:mx-auto min-h-[80vh]"
      id="projects"
    >
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[15px] px-[10px] border border-[#7042f88b] opacity-[0.9]"
        initial="hidden"
        animate="visible"
      >
        <CodeBracketSquareIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">Projects</h1>
      </motion.div>
      <motion.div initial="hidden" variants={slideInFromTop} animate="visible">
        <h2 className="mb-4 text-balance text-3xl/tight font-bold text-neutrals-50 md:text-5xl/tight text-center bg-gradient-to-r from-zinc-50 to-zinc-400 text-transparent bg-clip-text">
          “If a picture is worth 1000 words, a prototype is worth 1000
          meetings.”
        </h2>
      </motion.div>
      <motion.div
        initial="hidden"
        variants={slideInFromRight(0.5)}
        animate="visible"
      >
        <p className="max-w-prose text-base/relaxed font-extralight text-center mb-6">
          Discover a treasure trove of projects where prototypes and designs
          that evolve into polished web apps, bridging the gap between concept
          and reality.
        </p>
      </motion.div>
      {/* <h1 className="text-[20px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center">
        “If a picture is worth 1000 words, a prototype is worth 1000 meetings.”
      </h1> */}
      <SwiperShow />
    </section>
  );
}

export default Projects;
