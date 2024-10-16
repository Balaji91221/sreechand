import Image from 'next/image'
import Head from 'next/head'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { motion } from 'framer-motion'
import smart from '@/images/logos/2.jpg'

const projectsData = [
  {
    title: 'Smart Parking Management System',
    description: `Developed software to computerize the traditional way of booking parking slots. The attendant manages all the requests made by customers for slot booking. Admin manages all the attendees.`,
    logo: smart, // Replace with actual logo path
    href: 'https://github.com/yourusername/smart-parking', // Replace with actual GitHub link
  },
  {
    title: 'Real Time Object Detector',
    description: `Focused on detecting and identifying objects from RGB images using an object detection framework. Developed an Android-based live application to run the framework in real-time.`,
    logo: smart, // Replace with actual logo path
    href: 'https://github.com/yourusername/object-detector', // Replace with actual GitHub link
  },
  {
    title: 'IoT Sensors, Devices, and Hardware-Based Projects',
    description: `Led several projects including an automatic water level detector using Arduino, door automation using Raspberry Pi, and a rough terrain climber bot with a microcontroller-based circuit, achieving the highest grade.`,
    logo: smart, // Replace with actual logo path
    href: 'https://github.com/yourusername/iot-projects', // Replace with actual GitHub link
  },
  {
    title: 'Road Accident Analysis in India',
    description: `Analyzed data on road accidents in India to identify trends and suggest improvements for road safety.`,
    logo: smart, // Replace with actual logo path
    href: 'https://github.com/yourusername/road-accident-analysis', // Replace with actual GitHub link
  },
  {
    title: 'Twitter Clone Using Erlang and WebSocket API',
    description: `Developed a clone of Twitter using Erlang and WebSocket API for real-time communication and data exchange.`,
    logo: smart, // Replace with actual logo path
    href: 'https://github.com/yourusername/twitter-clone', // Replace with actual GitHub link
  },
]
function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Sree Chand</title>
        <meta name="description" content="Personal projects by Sree Chand Nadella" />
      </Head>
      <SimpleLayout
        title="Projects I've worked on"
        intro="These are some of the projects that I'm most proud of. I've built them to learn new technologies or solve problems I've encountered."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projectsData.map((project, index) => (
            <motion.li
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card>
                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image
                    src={project.logo}
                    alt=""
                    className="w-8 h-8 rounded-lg" // Here
                    unoptimized
                    width={32}
                    height={32}
                  />
                </div>
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={project.href}>{project.title}</Card.Link>
                </h2>
                <Card.Description>{project.description}</Card.Description>
                <p className="relative z-10 flex mt-6 text-sm font-medium transition text-zinc-400 group-hover:text-teal-500 dark:text-zinc-200">
                  <LinkIcon className="flex-none w-6 h-6" />
                  <span className="ml-2">{project.title}</span>
                </p>
              </Card>
            </motion.li>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}