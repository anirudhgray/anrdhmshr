import { useEffect, useState } from 'react'
import './App.css'
import { ReactComponent as Me } from './assets/me.svg'
import { ReactComponent as MeFirst } from './assets/meFirst.svg'
import { ReactComponent as MeLast } from './assets/meLast.svg'
import anime from 'animejs/lib/anime.es.js';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiFillFileText } from 'react-icons/ai'

function App () {
  useEffect(() => {
    const animation = anime({
      targets: '.line-drawing-demo .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function (el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    });
    const animationMobile = anime({
      targets: '.line-drawing-demo .linesSep path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function (el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    });
  }, [])

  return (
    <div className="App">
      {/* <img src={me} /> */}
      <span style={{ "opacity": 0.01, "userSelect": "none" }} className="absolute this-is-for-google-ligthouse-lcp">T</span>
      <div className="line-drawing-demo min-h-screen min-w-screen flex flex-col items-center justify-center gap-3">
        <Me className="md:block hidden px-6" />
        <MeFirst className="md:hidden sm:w-auto xs:w-[16rem] w-[13rem] flex mx-6" />
        <MeLast className="md:hidden sm:w-auto xs:w-[13rem] w-[11rem] flex mx-6" />
        <div className="sm:mt-8 mt-5 sm:text-2xl text-3xl flex flex-row justify-center md:gap-4 gap-6">
          <a aria-label='GitHub' target={"_blank"} referrerPolicy="no-referrer" href={"https://github.com/anirudhgray"}>
            <AiOutlineGithub />
          </a>
          <a aria-label='LinkedIn' target={"_blank"} referrerPolicy="no-referrer" href={"https://www.linkedin.com/in/anirudh-mishra/"}>
            <AiOutlineLinkedin />
          </a>
          <a aria-label='email' target={"_blank"} referrerPolicy="no-referrer" href={" mailto:anirudh04mishra@gmail.com"}>
            <AiOutlineMail />
          </a>
          <a aria-label='resume' target={"_blank"} referrerPolicy="no-referrer" href={"https://drive.google.com/file/d/1fpS8gIELzxlp4ncQnO6V-_9z8VGuIZis/view?usp=sharing"}>
            <AiFillFileText />
          </a>
        </div>
      </div>

    </div>
  )
}

export default App
