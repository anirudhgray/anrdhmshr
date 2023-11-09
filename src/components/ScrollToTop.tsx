import { motion } from 'framer-motion';

export default function ScrollToTop() {
  return (
    <motion.div className="fixed bottom-0 right-0 m-4 z-20">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          window.history.pushState(null, '', '#');
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 pointer-cursor-element m-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            className="text-gray-500 dark:text-gray-400 pointer-cursor-element"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </a>
    </motion.div>
  );
}
