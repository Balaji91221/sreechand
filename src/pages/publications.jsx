import Image from 'next/image'
import Head from 'next/head'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { motion } from 'framer-motion'
import publicationLogo from '@/images/avatar.jpg'

const publicationsData = [
  {
    title: 'Patent 1',
    description: ` Virtual Reality Kinetic Mapping: AI-Powered Realistic Physical Interaction in VR”-an AI-driven VR
algorithm that seamlessly translates real-world physical movements into immersive virtual interactions`,
    logo: publicationLogo,
    href: 'https://linktopatent.com/patent1',
  },
  {
    title: 'Publication on AI',
    description: `Visualization and Prediction of Covid-19 data using Random Forest Regression”-employs AI to resolve challenges
created by data clutter to assist researchers and medical professionals.`,
    logo: publicationLogo,
    href: 'https://linktopublication.com/ai-publication',
  },
  {
    title: 'Publication on AI',
    description: `A Real-Time Video Stabilization Framework for Consumer Camera”- a cutting-edge framework designed
to provide real-time video stabilization solutions for consumer-grade cameras, ensuring smooth and jitter-free
footage`,
    logo: publicationLogo,
    href: 'https://linktopublication.com/ai-publication',
  },
  {
    title: 'Publication on AI',
    description: `Visualization and Prediction of Covid-19 data using Random Forest Regression”-employs AI to resolve challenges
created by data clutter to assist researchers and medical professionals.`,
    logo: publicationLogo,
    href: 'https://linktopublication.com/ai-publication',
  },
  // Add more publications as needed
];

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Publications() {
  return (
    <>
      <Head>
        <title>Patents and Publications - Sree Chand</title>
        <meta name="description" content="List of patents and publications by Sree Chand Nadella" />
      </Head>
      <SimpleLayout
        title="Patents and Publications"
        intro="Here are some patents and publications that showcase my research and innovation in various fields."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {publicationsData.map((publication, index) => (
            <motion.li
              key={publication.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1 }}
            >
              <Card className="pb-0 pt-2 px-4 flex-col items-start">
                <div className="overflow-visible py-2">
                  <Image
                    src={publication.logo}
                    alt=""
                    className="object-cover rounded-xl"
                    unoptimized
                    width={270}
                    whileHover={{ scale: 0 }}
                    
                  />
                </div>
                <div className="w">
                  <h2 className="text-base font-semibold text-primaryText-800 dark:text-primaryText-200  ">
                    <Card.Link href={publication.href}>{publication.title}</Card.Link>
                  </h2>
                  <Card className="justify-content  text-primaryText-800 dark:text-primaryText-200">{publication.description}</Card>
                  <p className="flex mt-4 text-sm font-medium text-zinc-400 dark:text-zinc-200">
                    <LinkIcon className="w-6 h-6" />
                    <span className="ml-2  text-primaryText-800 dark:text-primaryText-200  hover:text-accent-500 transition dark:hover:text-accent-400">{publication.title}</span>
                  </p>
                </div>
              </Card>
            </motion.li>
          ))}
        </ul>
      </SimpleLayout>
    </>
  );
}
