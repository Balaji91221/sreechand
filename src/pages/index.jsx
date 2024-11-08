import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { Container } from '@/components/Container';
import avatarImage from '@/images/avatar.jpg';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'; // React Icons
import clsx from 'clsx';

const email = "example@example.com";

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-primaryText-800 hover:text-accent-500 dark:text-primaryText-200 dark:hover:text-accent-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-primaryText-500 group-hover:fill-accent-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function SocialLinks() {
  return (
    <ul role="list" className="flex space-x-8">
      <SocialLink href="https://twitter.com/sreechandn" icon={FaTwitter}>
        
      </SocialLink>
      <SocialLink href="https://instagram.com/sreechandn" icon={FaInstagram}>
        
      </SocialLink>
      <SocialLink href="https://github.com/BalajiSreeChand" icon={FaGithub}>
        
      </SocialLink>
      <SocialLink href="https://www.linkedin.com/in/sree-chand-nadella/" icon={FaLinkedin}>
        
      </SocialLink>
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Sree Chand</title>
        <meta name="description" content="Sree Chand Nadella's personal website" />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <motion.div
            className="lg:pl-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={avatarImage}
                alt="picture of the author"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="object-cover aspect-square rounded-2xl bg-primaryText-100 dark:bg-primaryText-800"
              />
            </div>
          </motion.div>
          <motion.div
            className="lg:order-first lg:row-span-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-5xl">
              Sree Chand Nadella
            </h1>
            <div className="mt-6 text-base space-y-7 text-primaryText-600 dark:text-primaryText-400">
              <p className="whitespace-pre-wrap">
                Sree Chand Nadella is a software engineer with a background in SaaS, e-commerce, and data engineering.
                Holds degrees in Computer Science, with published research and a pending patent.
                Proficient in AI, AWS, DevSecOps, Python, Java, Docker, and Kubernetes.
                Experience in developing data solutions, CI/CD pipelines, and leadership roles in student organizations.
              </p>
            </div>

            
            <SocialLinks  />

            <motion.div
              className="mt-8 flex space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Link
                href="https://drive.google.com/file/d/1FGKHacWQsEEAhBU96nLGyldFSFkmO-Yy/view?usp=sharing"
                className="inline-flex px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-accent-500 hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 dark:text-slate-800"
              >
                Resume
              </Link>
              <Link
                href="/contact"
                className="inline-flex px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-accent-500 hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 dark:text-slate-800"
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </>
  );
}
