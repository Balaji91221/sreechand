import Image from 'next/image'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { RiLinksLine } from 'react-icons/ri'
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
    details:'GPA: 3.9/4.0',
  },
  {
    degree: 'Bachelor of Technology, Computer Science and Engineering (Data Analytics)',
    schoolName: 'Vellore Institute of Technology, Andhra Pradesh',
    startDate: 'Jan 2018',
    endDate: 'Jul 2022',
    description: 'Specialization in Data Analytics',
    details:'GPA: 3.8/4.0',
  },
]
const skills = {
  languages: [
    'Python', 'Java', 'C', 'MATLAB', 'R', 'PHP', 'SQL', 'HTML', 'CSS', 'JavaScript', 'Erlang', 'Verilog',
  ],
  technologies: [
    'PyTorch', 'TensorFlow', 'Figma', 'Rest-API', 'AWS', 'Git', 'IDEs', 'VMware', 'AutoCAD', 'Cisco Packet Tracer', 'Word', 'Excel', 'PowerPoint', 'GAN', 'VAE', 'Docker', 'PowerBI', 'Postman', 'Kubernetes',
  ],
  courses: [
    'DBMS', 'OOPs', 'Blockchain', 'Cryptography', 'AI', 'Software Engineering', 'ML', 'Deep Learning', 'Analysis of Algorithms', 'Mathematics for Intelligent Systems', 'Distributed Operating Systems and Principles', 'Cyber-Physical Security Systems', 'Computer Networks', 'Advance Data Structures', 'Advanced Data Analytics', 'Reinforcement Learning', 'Computer Vision', 'NLP', 'Data Warehousing and Data Mining', 'Statistical Analysis and Modeling',
  ],
  coreCompetencies: [
    'Machine Learning', 'Deep Learning', 'Computer Science', 'Statistics', 'Algorithms', 'Data Manipulation',
  ]
}

export default function Resume() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <SimpleLayout>
        <p>Loading...</p>
      </SimpleLayout>
    )
  }

  return (
    <>
      <Head>
        <title>Experience - Sree Chand Nadella</title>
        <meta
          name={`Work experience of Sree Chand Nadella`}
          content={`Work experience of Sree Chand Nadella`}
        />
      </Head>
      <SimpleLayout
        title="Things I’ve Done Trying to Make My Mark in Tech"
        intro="I may not have built rockets yet, but I've definitely launched a few projects into the stratosphere. I’ve never brewed coffee in a tech office, but I've brewed up some pretty slick SaaS applications and e-commerce platforms. You probably shouldn't hire me for my barista skills, but I can assure you that my coding skills are top-notch. My research papers? They’ve earned some nods, and my mom says I'm a whiz with Python and Java. When it comes to machine learning, cloud solutions, and CI/CD pipelines, I’m not just good; I’m on a mission to change the game."
      >
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-4xl">
          Work Experience
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {experiences.map((experience, index) => (
            <Card key={index}>
              <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-primaryText-800/5 ring-1 ring-primaryText-900/5 dark:border dark:border-primaryText-700/50 dark:bg-primaryText-800 dark:ring-0">
                <Image
                  src={experience.logo}
                  alt={experience.company}
                  className="w-8 h-8"
                  unoptimized
                  width={32}
                  height={32}
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-primaryText-800 dark:text-primaryText-100">
                <Card.Link href={experience.link.url}>
                  {experience.title} at {experience.company}
                </Card.Link>
              </h2>
              <Card.Description>
                <ul>
                  {experience.description.map((item, idx) => (
                    <li className="ml-4 list-disc" key={idx}>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card.Description>
              <p className="relative z-10 flex mt-6 text-sm font-medium transition text-primaryText-400 group-hover:text-accent-500 dark:text-primaryText-200">
                <RiLinksLine className="flex-none w-6 h-6" />
                <span className="ml-2">{experience.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>

        <div className="relative max-w-lg mx-auto mt-24 lg:max-w-7xl">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-4xl">
            Education
          </h2>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {education.map((item, index) => (
              <Card key={index}>
                <p className="text-sm text-primaryText-600 dark:text-primaryText-400 ">
                  {item.startDate} - {item.endDate}
                </p>
                <div className="block mt-2">
                  <p className="text-xl font-semibold text-primaryText-800 dark:text-primaryText-100">
                    {item.degree}
                  </p>
                  <p className="text-base font-semibold text-primaryText-800 dark:text-primaryText-100">
                    {item.schoolName}
                  </p>
                  <Card.Description>
                    {item.description}
                  </Card.Description>
                  <Card.Description>
                    {item.details}
                  </Card.Description>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12">
  <h2 className="mb-6 text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-4xl">
    Skills
  </h2>
  <div className="space-y-8">
    <div>
      <h3 className="text-xl font-semibold text-primaryText-800 dark:text-primaryText-100">Languages</h3>
      <div className="mt-2 flex flex-wrap gap-2">
        {skills.languages.map((language, idx) => (
          <button
            key={idx}
            className="px-3 py-1 border rounded text-primaryText-800 dark:text-primaryText-100 border-accent-400 bg-transparent hover:bg-accent-400 hover:text-primaryText-800 transition-colors"
          >
            {language}
          </button>
        ))}
      </div>
    </div>
    <div>
      <h3 className="text-xl font-semibold text-primaryText-800 dark:text-primaryText-100">Technologies and Frameworks</h3>
      <div className="mt-2 flex flex-wrap gap-2">
        {skills.technologies.map((tech, idx) => (
          <button
            key={idx}
            className="px-3 py-1 border rounded  text-primaryText-800   border-accent-400 bg-transparent  hover:bg-accent-400 hover:text-primaryText-800  dark:text-primaryText-100  transition-colors  "
          >
            {tech}
          </button>
        ))}
      </div>
    </div>
    <div>
      <h3 className="text-xl font-semibold text-primaryText-800 dark:text-primaryText-100">Courses</h3>
      <div className="mt-2 flex flex-wrap gap-2">
        {skills.courses.map((course, idx) => (
          <button
            key={idx}
            className="px-3 py-1 border rounded  text-primaryText-800 dark:text-primaryText-100 border-accent-400 bg-transparent hover:bg-accent-400 hover:text-primaryText-800 transition-colors"
          >
            {course}
          </button>
        ))}
      </div>
    </div>
    <div>
      <h3 className="text-xl font-semibold text-primaryText-800 dark:text-primaryText-100">Core Competencies</h3>
      <div className="mt-2 flex flex-wrap gap-2">
        {skills.coreCompetencies.map((competency, idx) => (
          <button
            key={idx}
            className="px-3 py-1 border rounded text-primaryText-800 dark:text-primaryText-100 border-accent-400 bg-transparent hover:bg-accent-400 hover:text-primaryText-800 transition-colors"
          >
            {competency}
          </button>
        ))}
      </div>
    </div>
  </div>
</div>
</div>
      </SimpleLayout>
    </>
  )
}