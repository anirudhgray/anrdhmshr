import { useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import { motion, useScroll, useTransform } from 'framer-motion';
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';

export default function Landing() {
  const mainRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleTransform = useTransform(scrollYProgress, [0.0, 0.25], [1, 0.48]);
  const subTitleScaleTransform = useTransform(
    scrollYProgress,
    [0.0, 0.25],
    [1, 1.7],
  );
  const subTitleMarginTopTransform = useTransform(
    scrollYProgress,
    [0.0, 0.25],
    ['0px', '30px'],
  );
  const leftTransform = useTransform(
    scrollYProgress,
    [0.0, 0.25],
    ['33%', '0%'],
  );
  const topTransform = useTransform(
    scrollYProgress,
    [0.0, 0.25],
    ['50%', '13%'],
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
  });

  return (
    <div
      ref={mainRef}
      className="dark:bg-[#141414] dark:text-white bg-slate-100"
    >
      <motion.div
        style={{
          scale: scaleTransform,
          left: leftTransform,
          top: topTransform,
          translateY: '-50%',
        }}
        className="fixed w-1/3 lg:block hidden"
      >
        <Hero
          subTitleScaleTransform={subTitleScaleTransform}
          subTitleMarginTopTransform={subTitleMarginTopTransform}
          isOnDesktop={true}
        />
      </motion.div>
      <div className="h-[100vh]">
        <div className="lg:hidden h-screen flex my-auto">
          <Hero />
        </div>
      </div>
      <main className="grid grid-cols-3">
        <div className="col-span-1"></div>
        <div className="lg:col-span-2 min-h-screen col-span-3 flex flex-col gap-3 lg:pr-10 lg:pl-0 pl-20 pr-20">
          <h1 className="text-4xl font-thin mb-6">
            I build <span className="special-cursor-element">performant</span>{' '}
            and <span className="special-cursor-element">scalable</span> full
            stack applications, and have experience leading dev teams.
          </h1>
          {/* lot of lorem ipsum */}
          {Array.from({ length: 2 }).map((_, index) => (
            <p className="font-light" key={index}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              aliquam, nunc vel tempor tincidunt, nisl velit tincidunt orci,
              vitae consequat neque metus eget nisl. Nulla facilisi. Donec
              aliquam, nunc vel tempor tincidunt, nisl velit tincidunt orci,
              vitae consequat neque metus eget nisl. Nulla facilisi. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Donec aliquam, nunc
              vel tempor tincidunt, nisl velit tincidunt orci, vitae consequat
              neque metus eget nisl. Nulla facilisi. Donec aliquam, nunc vel
              tempor tincidunt, nisl velit tincidunt orci, vitae consequat neque
              metus eget nisl. Nulla facilisi.
            </p>
          ))}
          <div className="my-16 flex gap-5 items-center px-8 music-cursor-element">
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
          <h1 className="text-4xl font-thin mb-6">
            My <span className="special-cursor-element">Experience.</span>
          </h1>
          {/* lot of lorem ipsum */}
          {Array.from({ length: 3 }).map((_, index) => (
            <p className="font-light" key={index}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              aliquam, nunc vel tempor tincidunt, nisl velit tincidunt orci,
              vitae consequat neque metus eget nisl. Nulla facilisi. Donec
              aliquam, nunc vel tempor tincidunt, nisl velit tincidunt orci,
              vitae consequat neque metus eget nisl. Nulla facilisi. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Donec aliquam, nunc
              vel tempor tincidunt, nisl velit tincidunt orci, vitae consequat
              neque metus eget nisl. Nulla facilisi. Donec aliquam, nunc vel
              tempor tincidunt, nisl velit tincidunt orci, vitae consequat neque
              metus eget nisl. Nulla facilisi.
            </p>
          ))}
          <a
            target="_blank"
            href="https://drive.google.com/file/d/10Rv4tAT-psos1S44cK0yNqsP2Mqcgz3v/view?usp=sharing"
            className="pointer-cursor-element hover:underline w-fit"
          >
            See full résumé
          </a>
          <h1 className="text-4xl font-thin mb-6 mt-10">
            Selected <span className="special-cursor-element">Projects.</span>
          </h1>
          {Array.from({ length: 3 }).map((_, index) => (
            <p className="font-light" key={index}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              aliquam, nunc vel tempor tincidunt, nisl velit tincidunt orci,
              vitae consequat neque metus eget nisl. Nulla facilisi. Donec
              aliquam, nunc vel tempor tincidunt, nisl velit tincidunt orci,
              vitae consequat neque metus eget nisl. Nulla facilisi. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Donec aliquam, nunc
              vel tempor tincidunt, nisl velit tincidunt orci, vitae consequat
              neque metus eget nisl. Nulla facilisi. Donec aliquam, nunc vel
              tempor tincidunt, nisl velit tincidunt orci, vitae consequat neque
              metus eget nisl. Nulla facilisi.
            </p>
          ))}
          <a
            target="_blank"
            className="pointer-cursor-element hover:underline w-fit"
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
          <p className="my-12 dark:text-gray-400 font-extralight text-gray-500">
            Built by me. Reach out to me or tell me what you think at{' '}
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
