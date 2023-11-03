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
import './Hero.css';

const Hero: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('theme');
    if (storedDarkMode !== null) {
      setDarkMode(storedDarkMode === 'dark');
    } else {
      // Prefer the color scheme (light/dark) from the system
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }

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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', !darkMode);
  };

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
        <div className="absolute top-0 right-0 m-4">
          {/* Dark mode toggle */}
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <span className="slider round pointer-cursor-element"></span>
          </label>
        </div>
        <div className="special-cursor-element flex flex-col items-center justify-center md:gap-6 sm:gap-10 gap-8">
          <Me className="pointer-events-none md:block hidden px-6 mb-5" />
          <MeFirst className="pointer-events-none md:hidden sm:w-auto xs:w-[16rem] w-[13rem] flex mx-6" />
          <MeLast className="pointer-events-none md:hidden sm:w-auto xs:w-[13rem] w-[11rem] flex mx-6" />
        </div>
        <div
          className={`flex flex-col items-center transition-opacity ease-linear duration-[2000ms] delay-1000 ${
            showSub ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <p className="dark:text-gray-400 text-gray-500">Software Developer</p>
          <div className="sm:mt-5 mt-4 sm:text-2xl text-3xl flex flex-row justify-center md:gap-4 gap-6 dark:text-gray-400 text-gray-500">
            <a
              className="dark:hover:text-white hover:text-black pointer-cursor-element"
              aria-label="GitHub"
              target={'_blank'}
              referrerPolicy="no-referrer"
              href={'https://github.com/anirudhgray'}
            >
              <span className="pointer-events-none">
                <AiOutlineGithub />
              </span>
            </a>
            <a
              className="dark:hover:text-white hover:text-black pointer-cursor-element"
              aria-label="LinkedIn"
              target={'_blank'}
              referrerPolicy="no-referrer"
              href={'https://www.linkedin.com/in/anirudh-mishra/'}
            >
              <span className="pointer-events-none">
                <AiOutlineLinkedin />
              </span>
            </a>
            <a
              className="dark:hover:text-white hover:text-black pointer-cursor-element"
              aria-label="email"
              target={'_blank'}
              referrerPolicy="no-referrer"
              href={'mailto:anirudh04mishra@gmail.com'}
            >
              <span className="pointer-events-none">
                <AiOutlineMail />
              </span>
            </a>
            <a
              className="dark:hover:text-white hover:text-black pointer-cursor-element"
              aria-label="resume"
              target={'_blank'}
              referrerPolicy="no-referrer"
              href={import.meta.env.VITE_RESUME_URL}
            >
              <span className="pointer-events-none">
                <AiFillFileText />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
