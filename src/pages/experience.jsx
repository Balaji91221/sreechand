import Image from 'next/image'
import Head from 'next/head'
import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { RiLinksLine } from 'react-icons/ri'
import { FaGraduationCap, FaUniversity, FaSchool } from 'react-icons/fa'
import * as Icons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'
import * as AiIcons from 'react-icons/ai'
import * as BiIcons from 'react-icons/bi'
import * as BsIcons from 'react-icons/bs'
import * as GiIcons from 'react-icons/gi'
import { GiNeuron } from 'react-icons/gi';
import * as GoIcons from 'react-icons/go'
import * as HiIcons from 'react-icons/hi'
import * as ImIcons from 'react-icons/im'
import * as IoIcons from 'react-icons/io'
import * as MdIcons from 'react-icons/md'
import * as TiIcons from 'react-icons/ti'
import * as WiIcons from 'react-icons/wi'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoApple from '@/images/logos/apple.svg'

const experiences = [
  {
    title: 'Jr. Software Developer',
    company: 'Tandem Arc',
    date: 'May 2024 - Present',
    description: [
      'Enhanced Apache Airflow with enterprise-grade features to boost developer productivity and improve operational efficiency by providing a resilient suite of tools, facilitating expedited pipeline deployment.',
      'Utilized technologies such as React.js, Apache Airflow, pgSQL, and Python to develop feature-rich solutions for data processing.',
    ],
    location: 'Seattle, WA',
    link: { url: 'https://www.tandemarc.com', label: 'Tandem Arc' },
    logo: logoApple,
  },
  {
    title: 'Jr. Software Developer',
    company: 'NodeTek Inc',
    date: 'Jan 2024 - May 2024',
    description: [
      'Implemented scalable CI/CD pipelines to reduce deployment time and minimize downtime using Jenkins, Docker, and Kubernetes.',
      'Automated infrastructure provisioning across AWS and GCP using Terraform and Ansible.',
      'Enhanced team collaboration processes by optimizing Git branching workflows.',
    ],
    location: 'Gainesville, FL',
    link: { url: 'https://www.nodetek.com', label: 'NodeTek Inc' },
    logo: logoApple,
  },
  {
    title: 'Operations Associate',
    company: 'University of Florida',
    date: 'Apr 2023 - Jan 2024',
    description: [
      'Managed and maintained internal software applications for the RecSports department, ensuring smooth operation and accessibility for both staff and patrons.',
      'Provided technical support for program registration, facility management, and other operational software, while troubleshooting and resolving issues promptly.',
    ],
    location: 'Gainesville, FL',
    link: { url: 'https://www.ufl.edu', label: 'University of Florida' },
    logo: logoApple,
  },
  {
    title: 'Machine Learning Engineer',
    company: 'UF Innovate',
    date: 'Oct 2023 - Oct 2023',
    description: [
      'Developed and deployed a computer vision tool that significantly improved the accuracy of zoning parcel detection, achieving a 90% boost in efficiency compared to manual processes.',
      'Worked closely with cross-functional teams to seamlessly integrate the tool with AutoCAD.',
    ],
    location: 'Gainesville, FL',
    link: { url: 'https://innovate.research.ufl.edu', label: 'UF Innovate' },
    logo: logoApple,
  },
  {
    title: 'Software Developer Intern',
    company: 'Shiash Info Solutions',
    date: 'Jan 2022 - Jun 2022',
    description: [
      'Developed an application to help customers in buying or selling products through an online auction platform.',
      'Implemented features that allow merchants to sell products, customers to buy products, and auctioneers to conduct auctions, with admin support to manage auctioneers.',
    ],
    location: 'India',
    link: { url: 'https://www.shiashinfosolutions.com', label: 'Shiash Info Solutions' },
    logo: logoApple,
  },
]


const education = [
  {
    degree: 'Master of Science, Computer Science',
    schoolName: 'University of Florida (UF)',
    startDate: 'Aug 2022',
    endDate: 'May 2024',
    description: 'Specialization in Machine Learning and Data Science',
    details: 'GPA: 3.9/4.0',
    icon: FaGraduationCap,
    color: '#00529B',
    bgColor: '#F2F6FA',
  },
  {
    degree: 'Bachelor of Technology, Computer Science',
    schoolName: 'Indian Institute of Technology (IIT)',
    startDate: 'Aug 2018',
    endDate: 'May 2022',
    description: 'Specialization in Artificial Intelligence and Machine Learning',
    details: 'GPA: 9.5/10.0',
    icon: FaUniversity,
    color: '#BB1622',
    bgColor: '#FEEAE6',
  },
  {
    degree: 'High School Diploma',
    schoolName: 'Delhi Public School (DPS)',
    startDate: 'Aug 2016',
    endDate: 'May 2018',
    description: 'Specialization in Science and Mathematics',
    details: 'Percentage: 95%',
    icon: FaSchool,
    color: '#0072CE',
    bgColor: '#E6F0FA',
  }
  // Other education entries here...
]

const skills = {
  languages: [
    { name: 'Python', color: '#3776AB', icon: 'SiPython' },
    { name: 'Java', color: '#007396', icon: 'FaJava' },
    { name: 'C', color: '#A8B9CC', icon: 'SiC' },
    //{ name: 'MATLAB', color: '#0076A8', icon: 'Simatlab' },
    { name: 'R', color: '#276DC3', icon: 'SiR' },
    { name: 'PHP', color: '#777BB4', icon: 'FaPhp' },
    { name: 'SQL', color: '#4479A1', icon: 'SiMysql' },
    { name: 'HTML', color: '#E34F26', icon: 'FaHtml5' },
    { name: 'CSS', color: '#1572B6', icon: 'FaCss3Alt' },
    { name: 'JavaScript', color: '#F7DF1E', icon: 'FaJs' },
    { name: 'Erlang', color: '#A90533', icon: 'SiErlang' },
    //{ name: 'Verilog', color: '#2980B9', icon: 'Si' },
  ],
  technologies: [
    { name: 'PyTorch', color: '#EE4C2C', icon: 'SiPytorch' },
    { name: 'TensorFlow', color: '#FF6F00', icon: 'SiTensorflow' },
    { name: 'Figma', color: '#F24E1E', icon: 'SiFigma' },
    //{ name: 'Rest-API', color: '#009688', icon: 'SiOpenapi' },
    { name: 'AWS', color: '#FF9900', icon: 'FaAws' },
    { name: 'Git', color: '#F05032', icon: 'FaGitAlt' },
    { name: 'IDEs', color: '#5C2D91', icon: 'SiVisualstudiocode' },
    { name: 'VMware', color: '#607078', icon: 'SiVmware' },
    { name: 'AutoCAD', color: '#0696D7', icon: 'SiAutodesk' },
    { name: 'Cisco Packet Tracer', color: '#1BA0D7', icon: 'SiCisco' },
    { name: 'Word', color: '#2B579A', icon: 'SiMicrosoftword' },
    { name: 'Excel', color: '#217346', icon: 'SiMicrosoftexcel' },
    { name: 'PowerPoint', color: '#D24726', icon: 'SiMicrosoftpowerpoint' },
    { name: 'GAN', color: '#9B59B6', icon: 'SiPytorch' },
    { name: 'VAE', color: '#3498DB', icon: 'SiPytorch' },
    { name: 'Docker', color: '#2496ED', icon: 'FaDocker' },
    { name: 'PowerBI', color: '#F2C811', icon: 'SiPowerbi' },
    { name: 'Postman', color: '#FF6C37', icon: 'SiPostman' },
    { name: 'Kubernetes', color: '#326CE5', icon: 'SiKubernetes' },
  ],
  courses: [
    { name: 'DBMS', color: '#4CAF50', icon: 'MdStorage' },
    { name: 'OOPs', color: '#2196F3', icon: 'GiCubes' },
    { name: 'Blockchain', color: '#FFC107', icon: 'SiBlockchaindotcom' },
    { name: 'Cryptography', color: '#9C27B0', icon: 'AiOutlineLock' },
    { name: 'AI', color: '#F44336', icon: 'GiBrain' },
    { name: 'Software Engineering', color: '#3F51B5', icon: 'AiOutlineCode' },
    { name: 'ML', color: '#009688', icon: 'BiBrain' },
    { name: 'Deep Learning', color: '#FF5722', icon: 'BiSolidBrain' },
    { name: 'Analysis of Algorithms', color: '#795548', icon: 'GoGraph' },
    { name: 'Mathematics for Intelligent Systems', color: '#607D8B', icon: 'GiAbacus' },
    { name: 'Distributed Operating Systems ', color: '#8BC34A', icon: 'AiOutlineCluster' },
    { name: 'Cyber-Physical Security Systems', color: '#FF9800', icon: 'GiCctvCamera' },
    { name: 'Computer Networks', color: '#E91E63', icon: 'AiOutlineNodeIndex' },
    //{ name: 'Advance Data Structures', color: '#00BCD4', icon: 'GiTreeStructure' },
    { name: 'Advanced Data Analytics', color: '#CDDC39', icon: 'IoMdAnalytics' },
    { name: 'Reinforcement Learning', color: '#9E9E9E', icon: 'GiArtificialIntelligence' },
    { name: 'Computer Vision', color: '#673AB7', icon: 'MdRemoveRedEye' },
    { name: 'NLP', color: '#03A9F4', icon: 'GiTalk' },
    { name: 'Data Warehousing and Data Mining', color: '#FF4081', icon: 'BiData' },
    { name: 'Statistical Analysis and Modeling', color: '#4DB6AC', icon: 'TiChartBar' },
  ],
  coreCompetencies: [
    { name: 'Machine Learning', color: '#FF5252', icon: 'GiArtificialIntelligence' },
    { name: 'Deep Learning', color: '#FF4081', icon: 'GiBrain' },
    { name: 'Computer Science', color: '#7C4DFF', icon: 'BsLaptop' },
    { name: 'Statistics', color: '#536DFE', icon: 'IoMdStats' },
    { name: 'Algorithms', color: '#448AFF', icon: 'GiProcessor' },
    { name: 'Data Manipulation', color: '#40C4FF', icon: 'BiData' },
  ],
}

const SkillIcon = ({ skill }) => {
  const IconComponent = 
    Icons[skill.icon] || 
    SiIcons[skill.icon] || 
    AiIcons[skill.icon] ||
    BiIcons[skill.icon] ||
    BsIcons[skill.icon] ||
    GiIcons[skill.icon] ||
    GoIcons[skill.icon] ||
    HiIcons[skill.icon] ||
    ImIcons[skill.icon] ||
    IoIcons[skill.icon] ||
    MdIcons[skill.icon] ||
    TiIcons[skill.icon] ||
    WiIcons[skill.icon]
  return IconComponent ? <IconComponent className="w-10 h-10" /> : null
}

export default function Resume() {
  return (
    <>
      <Head>
        <title>Experience - Sree Chand Nadella</title>
        <meta name="description" content="Work experience of Sree Chand Nadella" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-r   dark:from-black dark:">
        <SimpleLayout
          title="Things I’ve Done Trying to Make My Mark in Tech"
          intro="I may not have built rockets yet, but I've definitely launched a few projects into the stratosphere. I’ve never brewed coffee in a tech office, but I've brewed up some pretty slick SaaS applications and e-commerce platforms. You probably shouldn't hire me for my barista skills, but I can assure you that my coding skills are top-notch. My research papers? They’ve earned some nods, and my mom says I'm a whiz with Python and Java. When it comes to machine learning, cloud solutions, and CI/CD pipelines, I’m not just good; I’m on a mission to change the game."
        >
          <h2 className="mb-8 text-4xl font-bold dark:text-primaryText-50 border-b-4 border-dotted border-gray-300 dark:border-gray-600 pb-4">Work Experience</h2>
          <ul className="grid gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-8 border-t-4 border-solid border-gray-400 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <Image
                      src={experience.logo}
                      alt={experience.company}
                      width={48}
                      height={48}
                      className="rounded-full dark:bg-white shadow-lg"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold dark:text-primaryText-50">{experience.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-primaryText-50">{experience.company}</p>
                    </div>
                  </div>
                  <p className="text-sm mb-2 text-gray-600 dark:text-primaryText-100">{experience.date}</p>
                  <ul className="list-disc list-inside mb-4 pl-4 space-y-1 dark:text-primaryText-50">
                    {experience.description.map((item, idx) => (
                      <li key={idx} className="text-sm">{item}</li>
                    ))}
                  </ul>
                  <div className="flex items-center">
                    <RiLinksLine className="w-5 h-5 mr-2 text-blue-600" />
                    <a
                      href={experience.link.url}
                      className="text-sm text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {experience.link.label}
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </ul>

          <h2 className="mt-24 mb-6 text-4xl font-bold dark:text-primaryText-50 border-b-4 border-dotted border-gray-300 dark:border-gray-600 pb-4">Education</h2>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <Card
                  className="p-6 hover:shadow-lg rounded-lg transition-all duration-200 overflow-hidden dark:bg-gray-800 border-t-4 border-solid border-gray-400"
                  style={{
                    backgroundColor: edu.bgColor,
                    borderLeft: `4px solid ${edu.color}`,
                  }}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-md"
                      style={{ backgroundColor: edu.color }}
                    >
                      <edu.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold mb-2" style={{ color: edu.color }}>{edu.degree}</h3>
                      <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">{edu.schoolName}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{edu.startDate} - {edu.endDate}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{edu.description}</p>
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{edu.details}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="mb-6 text-4xl font-bold dark:text-primaryText-50 border-b-4 border-dotted border-gray-300 dark:border-gray-600 pb-4">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="p-6 bg-white rounded-md dark:bg-gray-800 border-b-4 border-dotted border-gray-300">
                    <h3 className="text-2xl font-semibold mb-4 capitalize text-gray-800 dark:text-gray-100">
                      {category.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    <div className="flex flex-wrap gap-12">
                      {skillList.map((skill, index) => (
                        <motion.div
                          key={`${category}-${skill.name}-${index}`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex flex-col items-center"
                        >
                          <motion.div
                            key={`${category}-${skill.name}-${index}-icon`}
                            className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center mb-2"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            style={{ 
                              backgroundColor: skill.color,
                            }}
                          >
                            {skill.icon && (
                              <div className="text-white">
                                <SkillIcon skill={skill} />
                              </div>
                            )}
                          </motion.div>
                          <span className="text-sm font-medium text-center dark:text-primaryText-50">{skill.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </SimpleLayout>
      </div>
    </>
  );
}
