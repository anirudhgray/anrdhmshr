import { useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';

export default function Landing() {
  const mainRef = useRef(null);
  // const { scrollYProgress } = useScroll();
  // const scaleTransform = useTransform(scrollYProgress, [0, 0.08], [1, 0.5]);
  // const leftTransform = useTransform(scrollYProgress, [0, 0.08], ['37%', '3%']);
  // const topTransform = useTransform(scrollYProgress, [0, 0.08], ['35%', '13%']);

  return (
    <div
      ref={mainRef}
      className="dark:bg-[#141414] dark:text-white bg-slate-100"
    >
      <motion.div
        style={
          {
            // scale: scaleTransform,
            // left: leftTransform,
            // top: topTransform,
          }
        }
        id="hello"
      >
        <Hero />
      </motion.div>
      <main className="grid grid-cols-3">
        <div className="col-span-1"></div>
        <div className="col-span-2 flex flex-col gap-3">
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
