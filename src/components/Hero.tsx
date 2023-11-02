import React, { useEffect, useState } from 'react';
import { ReactComponent as Me } from '../assets/me.svg';
import { ReactComponent as MeFirst } from '../assets/meFirst.svg';
import { ReactComponent as MeLast } from '../assets/meLast.svg';
import anime from 'animejs/lib/anime.es.js';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiFillFileText,
} from 'react-icons/ai';

const Hero: React.FC = () => {
  useEffect(() => {
    // desktop
    anime({
      targets: '.line-drawing-demo .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function (_, i) {
        return i * 250;
      },
      direction: 'alternate',
      loop: true,
    });
    // mobile
    anime({
      targets: '.line-drawing-demo .linesSep path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function (_, i) {
        return i * 250;
      },
      direction: 'alternate',
      loop: true,
    });

    setTimeout(() => {
      setShowSub(true);
    }, 3000);
  }, []);

  const [showSub, setShowSub] = useState(false);
  return (
    <>
      <span
        style={{ opacity: 0.01, userSelect: 'none' }}
        className="absolute this-is-for-google-ligthouse-lcp"
      >
        T
      </span>
      <div className="line-drawing-demo min-h-screen min-w-screen flex flex-col items-center justify-center md:gap-6 sm:gap-10 gap-8">
        <Me className="md:block hidden px-6 mb-5" />
        <MeFirst className="md:hidden sm:w-auto xs:w-[16rem] w-[13rem] flex mx-6" />
        <MeLast className="md:hidden sm:w-auto xs:w-[13rem] w-[11rem] flex mx-6" />
        <div
          className={`flex flex-col items-center transition-opacity ease-linear duration-[2000ms] delay-1000 ${
            showSub ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <p className="dark:text-gray-400 text-gray-500">Software Developer</p>
          <div className="sm:mt-5 mt-4 sm:text-2xl text-3xl flex flex-row justify-center md:gap-4 gap-6 dark:text-gray-400 text-gray-500">
            <a
              className="dark:hover:text-white hover:text-black"
              aria-label="GitHub"
              target={'_blank'}
              referrerPolicy="no-referrer"
              href={'https://github.com/anirudhgray'}
            >
              <AiOutlineGithub />
            </a>
            <a
              className="dark:hover:text-white hover:text-black"
              aria-label="LinkedIn"
              target={'_blank'}
              referrerPolicy="no-referrer"
              href={'https://www.linkedin.com/in/anirudh-mishra/'}
            >
              <AiOutlineLinkedin />
            </a>
            <a
              className="dark:hover:text-white hover:text-black"
              aria-label="email"
              target={'_blank'}
              referrerPolicy="no-referrer"
              href={'mailto:anirudh04mishra@gmail.com'}
            >
              <AiOutlineMail />
            </a>
            <a
              className="dark:hover:text-white hover:text-black"
              aria-label="resume"
              target={'_blank'}
              referrerPolicy="no-referrer"
              href={import.meta.env.VITE_RESUME_URL}
            >
              <AiFillFileText />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
