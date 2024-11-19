import { useEffect, useRef, useState } from 'react';
import Hero from '../components/Hero';
import { motion, useScroll, useTransform } from 'framer-motion';
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';
import Skills from '../components/Skills';
import experienceData from '../content/experience.json';
import projects from '../content/projects.json';
import misc from '../content/misc.json';
import about from '../content/about.json';
import ExperienceCard from '../components/ExperienceCard';
import ProjectShowcaseCard from '../components/ProjectShowcaseCard';
import MiscCard from '../components/MiscCard';
import ContentRenderer from '../components/ContentRenderer';

import { ExperienceData } from '../types/experience';

export default function Landing() {
  const [experience] = useState<ExperienceData>(experienceData);

  const mainRef = useRef<HTMLDivElement | null>(null);
  const [parentWidth, setParentWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const [curTab, setCurTab] = useState('');

  const { scrollYProgress } = useScroll();
  const scaleTransform = useTransform(scrollYProgress, [0.0, 0.225], [1, 0.48]);
  const subTitleScaleTransform = useTransform(
    scrollYProgress,
    [0.0, 0.225],
    [1, 1.7],
  );
  const subTitleMarginTopTransform = useTransform(
    scrollYProgress,
    [0.0, 0.225],
    ['0px', '30px'],
  );

  const leftTransform = useTransform(
    scrollYProgress,
    [0.0, 0.225],
    [
      parentWidth / 3 + (windowWidth - parentWidth) / 2,
      (windowWidth - parentWidth) / 2,
    ], // Calculate based on parent width
  );
  const topTransform = useTransform(
    scrollYProgress,
    [0.0, 0.225],
    ['50%', '13%'],
  );
  const scrollOpacityTransform = useTransform(
    scrollYProgress,
    [0.0, 0.02],
    [1, 0],
  );

  const navlinksOpacityTransform = useTransform(
    scrollYProgress,
    [0.15, 0.25],
    [0, 1],
  );

  const progressWidthTransform = useTransform(
    scrollYProgress,
    [0.0, 1.0],
    ['0%', '100%'],
  );

  useEffect(() => {
    create({
      player: '#musicLottie',
      mode: 'scroll',
      actions: [
        {
          visibility: [0, 1],
          type: 'seek',
          frames: [0, 300],
        },
      ],
    });
  }, []);

  useEffect(() => {
    const updateParentDimensions = () => {
      if (mainRef.current) {
        setParentWidth(mainRef.current.offsetWidth);
        setWindowWidth(window.innerWidth);
      }
    };

    updateParentDimensions();

    // Update dimensions whenever the window is resized
    window.addEventListener('resize', updateParentDimensions);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('resize', updateParentDimensions);
    };
  }, []);

  useEffect(() => {
    // Define an observer function
    const handleIntersection: IntersectionObserverCallback = (
      entries: IntersectionObserverEntry[],
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Update curTab based on the section in view
          setCurTab(entry.target.id);
        }
      });
    };

    // Create an Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
      // root: contentRef.current,
      rootMargin: '0px',
      threshold: 0.8, // Adjust the threshold as needed
    });

    // Observe the sections
    const sections = ['about', 'experience', 'projects'];
    sections.forEach((section) => {
      const sectionElement = document.querySelector(`#${section}`);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => {
      // Clean up the observer when the component unmounts
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={mainRef} className="relative w-full max-w-[1320px] mx-auto">
      {/* progress bar fixed at bottom */}
      <div
        // style={{ opacity: scrollOpacityTransform }}
        className="fixed bottom-0 left-0 w-full h-3 dark:bg-[#141414] bg-slate-100 z-20"
      >
        <motion.div
          style={{ width: progressWidthTransform }}
          className="h-full bg-gray-400 dark:bg-gray-700"
        ></motion.div>
      </div>
      <motion.div
        style={{
          scale: scaleTransform,
          left: leftTransform,
          top: topTransform,
          translateY: '-50%',
          width: parentWidth / 3,
        }}
        className="fixed lg:block hidden"
      >
        <Hero
          subTitleScaleTransform={subTitleScaleTransform}
          subTitleMarginTopTransform={subTitleMarginTopTransform}
          scrollOpacityTransform={scrollOpacityTransform}
          isOnDesktop={true}
        />
      </motion.div>
      <div className="h-[100vh]">
        <div className="lg:hidden h-screen flex my-auto">
          <Hero />
        </div>
      </div>
      <main className="grid grid-cols-3">
        <div className="col-span-1 lg:block hidden">
          <motion.div
            style={{ opacity: navlinksOpacityTransform }}
            className="sticky top-[26%] flex flex-col gap-2 dark:text-gray-400 font-light text-gray-500 lg:px-14 xl:px-20 lg:mt-32 xl:mt-20 items-center text-lg"
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', '#about');
              }}
              className={`${
                curTab === 'about' ? 'selected dark:text-white text-black' : ''
              } navlinks dark:before:bg-white before:bg-black dark:hover:text-white hover:text-black pointer-cursor-element w-fit`}
            >
              About Me
            </a>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('experience');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', '#experience');
              }}
              className={`${
                curTab === 'experience'
                  ? 'selected dark:text-white text-black'
                  : ''
              } navlinks dark:before:bg-white before:bg-black dark:hover:text-white hover:text-black pointer-cursor-element w-fit`}
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('projects');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', '#projects');
              }}
              className={`${
                curTab === 'projects'
                  ? 'selected dark:text-white text-black'
                  : ''
              } navlinks dark:before:bg-white before:bg-black dark:hover:text-white hover:text-black pointer-cursor-element w-fit`}
            >
              Projects
            </a>
          </motion.div>
        </div>
        <div className="lg:col-span-2 min-h-screen col-span-3 flex flex-col gap-20 lg:px-0 lg:pr-10 lg:pl-0 md:px-20 sm:px-16 px-10">
          <div id="about" className="flex flex-col gap-3">
            <h1 className="text-4xl font-thin mb-6">
              I build <span className="special-cursor-element">performant</span>{' '}
              and <span className="special-cursor-element">scalable</span> full
              stack applications, and have experience leading dev teams.
            </h1>
            {/* lot of lorem ipsum */}
            <ContentRenderer content={about} />
            <p>Some stuff I work with.</p>
            <Skills />
          </div>
          <div id="experience" className="flex flex-col gap-3 group/items">
            <h1 className="text-4xl font-thin mb-6">
              My <span className="special-cursor-element">Experience.</span>
            </h1>
            <div className="flex flex-col gap-16">
              {experience.experience.length ? (
                experience.experience.map((exp, i) => (
                  <ExperienceCard key={i} {...exp} />
                ))
              ) : (
                <p className="dark:text-gray-400 font-extralight text-gray-500 group-hover/items:opacity-40 transition">
                  Loading experience...
                </p>
              )}
            </div>
            <p className="text-2xl font-extralight mt-6 mb-4 group-hover/items:opacity-40 transition">
              Volunteering.
            </p>
            <div className="flex flex-col gap-16">
              {experience.volunteering.length ? (
                experience.volunteering.map((exp, i) => (
                  <ExperienceCard key={i} {...exp} />
                ))
              ) : (
                <p className="dark:text-gray-400 font-extralight text-gray-500 group-hover/items:opacity-40 transition">
                  Loading volunteership...
                </p>
              )}
            </div>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/10Rv4tAT-psos1S44cK0yNqsP2Mqcgz3v/view?usp=sharing"
              className="pointer-cursor-element hover:underline w-fit mt-8"
            >
              See full résumé
            </a>
          </div>
          <div id="projects" className="flex flex-col gap-3 group/items">
            <h1 className="text-4xl font-thin mb-6">
              Selected <span className="special-cursor-element">Projects.</span>
            </h1>
            <div className="flex flex-col gap-16">
              {projects.slice(0, 4).map((proj, i) => (
                <ProjectShowcaseCard key={i} {...proj} />
              ))}
            </div>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/10Rv4tAT-psos1S44cK0yNqsP2Mqcgz3v/view?usp=sharing"
              className="pointer-cursor-element hover:underline w-fit mt-8"
            >
              See all projects
            </a>
            <a
              href="https://github.com/anirudhgray"
              target="_blank"
              className="pointer-cursor-element hover:underline w-fit"
            >
              My GitHub
            </a>
          </div>
          <div id="misc" className="flex flex-col gap-3">
            <div className="flex flex-col gap-16">
              {misc.map((m, i) => (
                <MiscCard key={i} {...m} />
              ))}
            </div>
          </div>
          <div className="my-16 hidden gap-5 items-center px-8 music-cursor-element">
            <lottie-player
              autoplay
              loop
              id="musicLottie"
              mode="normal"
              src="/musicLottie.json"
              style={{ width: '150px' }}
            ></lottie-player>
            <div className="flex flex-col gap-2">
              <p className="dark:text-gray-400 font-light text-gray-500 music-cursor-element">
                Listening right now...
              </p>
            </div>
          </div>
          <p className="mb-12 mt-6 dark:text-gray-400 font-extralight text-gray-500">
            Built by me and open-sourced at{' '}
            <a
              target="_blank"
              href="https://github.com/anirudhgray/anrdhmshr"
              className="pointer-cursor-element underline dark:hover:text-white hover:text-black"
            >
              anirudhgray/anrdhmshr
            </a>
            . Reach out to me or tell me what you think at{' '}
            <a
              target="_blank"
              href="mailto:anirudh04mishra@gmaill.com"
              className="pointer-cursor-element underline dark:hover:text-white hover:text-black"
            >
              anirudh04mishra@gmail.com
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
