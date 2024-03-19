// @ts-nocheck
'use client';
import React, { useState } from 'react';
import GitHubIcon from '../public/github-icon.svg';
import LinkedInIcon from '../public/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  slideInFromTop,
  slideInFromLeft,
  slideInFromRight,
} from '@/utils/motion';
import { PhoneIcon } from '@heroicons/react/24/solid';

const Email = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/send';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log('MEssage was sent');
      setEmailSubmitted(true);
    }
  };
  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative mx-auto w-11/12 max-w-7xl 2xl:w-4/5 before:inset-x-0 before:h-px before:absolute before:w-4/5 before:top-0 before:-z-10 before:bg-gradient-to-r before:from-transparent before:via-slate-500 before:to-transparent before:max-w-7xl before:mx-auto"
      id="contact"
    >
      <div>
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[15px] px-[10px] border border-[#7042f88b] opacity-[0.9]"
        >
          <PhoneIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Contact</h1>
        </motion.div>
        <div className="flex">
          <h5 className="mb-4 text-balance text-3xl/tight font-bold md:text-5xl/tight bg-gradient-to-r from-zinc-50 to-zinc-400 text-transparent bg-clip-text">
            Lets Connect!
          </h5>
          <span className="mb-4 text-balance text-3xl/tight font-bold md:text-5xl/tight">
            {' '}
            👋
          </span>
        </div>

        <p className="text=[#ADB7BE] mb-4 max-w-md">
          {' '}
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
      </div>
      <div>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block text-sm mb-2 font-medium"
              typeof="email"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191e] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191e] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter Subject Line"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191e] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Type your message here."
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Email
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email Sent Successfully!
            </p>
          )}
        </form>
      </div>
      <div className="w-full h-full absolute z-[-10]">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Email;
