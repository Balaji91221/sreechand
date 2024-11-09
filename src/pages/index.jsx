'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Typewriter } from 'react-simple-typewriter'
import avatarImage from '@/images/avatar.jpg';

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-800 dark:text-gray-200 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 mb-8 lg:mb-0 mt-8 lg:mt-0"
          >
            <div className="relative">
              <Image
                src={avatarImage}
                alt="Sree Chand Nadella"
                width={400}
                height={400}
                className="shadow-lg border-1 border-accent-400 rounded-lg"
              />
              <div className="absolute  bg-accent-400 opacity-10"></div>
            </div>
          </motion.div>

          {/* Content Container */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7 lg:order-last"
          >
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl mb-4 text-gray-900 dark:text-gray-100">
              Sree Chand Nadella
            </h1>
            <h2 className="text-2xl font-bold mb-6 text-gray-700 dark:text-gray-300">
              I am a{' '}
              <span className="text-accent-400">
                <Typewriter
                  words={['Student', 'Software Developer']}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <p className="mt-3 text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-8 leading-relaxed text-gray-600 dark:text-gray-400">
              Software engineer with expertise in SaaS, e-commerce, and data engineering. Proficient in AI, AWS, DevSecOps, Python, Java, Docker, and Kubernetes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Link
                href="https://drive.google.com/file/d/1FGKHacWQsEEAhBU96nLGyldFSFkmO-Yy/view?usp=sharing"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-400 hover:bg-accent-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-400 transition-colors duration-300"
              >
                View Resume
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-400 transition-colors duration-300"
              >
                Contact Me
              </Link>
            </div>
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Connect with me</h2>
              <div className="flex space-x-6">
                <SocialLink href="https://twitter.com/sreechandn" icon={FaTwitter} label="Twitter" />
                <SocialLink href="https://instagram.com/sreechandn" icon={FaInstagram} label="Instagram" />
                <SocialLink href="https://github.com/BalajiSreeChand" icon={FaGithub} label="GitHub" />
                <SocialLink href="https://www.linkedin.com/in/sree-chand-nadella/" icon={FaLinkedin} label="LinkedIn" />
              </div>
            </div>
          </motion.div>
          
        </div>
      </motion.div>
    </div>
  )
}

function SocialLink({ href, icon: Icon, label }) {
  return (
    <Link 
      href={href} 
      className="text-gray-600 dark:text-gray-400 hover:text-accent-400 transition-colors duration-300"
    >
      <span className="sr-only">{label}</span>
      <Icon className="w-8 h-8" />
    </Link>
  )
}
