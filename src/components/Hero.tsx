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
import { MotionValue, motion } from 'framer-motion';
import useStore from '../store';

// motion transform prop type
type HeroProps = {
  subTitleScaleTransform?: MotionValue<number>;
  subTitleMarginTopTransform?: MotionValue<string>;
  isOnDesktop?: boolean;
};

const Hero: React.FC<HeroProps> = ({
  subTitleScaleTransform,
  subTitleMarginTopTransform,
  isOnDesktop = false,
}) => {
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
    // smaller desktop, without scale animation for hero
    anime({
      targets: '.line-drawing-demo-mobile .lines path',
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
      targets: '.line-drawing-demo-mobile .linesSep path',
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
  const { specialClickCount, incTagLineNumber, tagLineNumber } = useStore();
  return (
    <>
      <span
        style={{ opacity: 0.01, userSelect: 'none' }}
        className="absolute this-is-for-google-ligthouse-lcp"
      >
        T
      </span>
      <div
        className={`${
          isOnDesktop ? 'line-drawing-demo' : 'line-drawing-demo-mobile'
        } flex flex-col items-center justify-center md:gap-6 sm:gap-10 gap-8 w-full`}
      >
        <div className="special-cursor-element flex flex-col items-center justify-center md:gap-6 sm:gap-10 gap-8">
          <Me className="pointer-events-none md:block hidden px-6 mb-5" />
          <MeFirst className="pointer-events-none md:hidden sm:w-auto xs:w-[16rem] w-[13rem] flex mx-6" />
          <MeLast className="pointer-events-none md:hidden sm:w-auto xs:w-[13rem] w-[11rem] flex mx-6" />
        </div>
        <motion.div
          className={`flex flex-col items-center transition-opacity ease-linear duration-[2000ms] delay-1000 font-light ${
            showSub ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{
            scale: subTitleScaleTransform,
            marginTop: subTitleMarginTopTransform,
          }}
        >
          <p
            onClick={incTagLineNumber}
            className="dark:text-gray-400 text-gray-500 pointer-cursor-element"
          >
            {specialClickCount > 10
              ? "It's a lot of fun clicking, eh?"
              : tagLineNumber === 0
              ? 'Software Engineer'
              : tagLineNumber === 1
              ? 'Full Stack Developer'
              : 'Food Enthusiast'}
          </p>
          <div className="sm:mt-5 mt-6 sm:text-3xl text-4xl flex flex-row justify-center md:gap-4 gap-6 dark:text-gray-400 text-gray-500">
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
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
