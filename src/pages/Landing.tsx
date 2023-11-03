import { useRef } from 'react';
import Hero from '../components/Hero';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Landing() {
  const mainRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleTransform = useTransform(scrollYProgress, [0.0, 0.25], [1, 0.5]);
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
    ['50%', '10%'],
  );

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
        <div className="lg:col-span-2 col-span-3 flex flex-col gap-3 px-4">
          {/* lot of lorem ipsum */}
          {Array.from({ length: 20 }).map((_, index) => (
            <p key={index}>
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
        </div>
      </main>
    </div>
  );
}
