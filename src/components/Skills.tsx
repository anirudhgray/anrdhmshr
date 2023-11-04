import {
  SiGo,
  SiReact,
  SiDjango,
  SiTypescript,
  SiNodedotjs,
  SiCplusplus,
  SiDocker,
  SiVuedotjs,
  SiFirebase,
  SiPostgresql,
  SiMongodb,
  SiShopify,
  SiSvelte,
  SiAgora,
  SiGooglecloud,
  SiAmazonaws,
  SiNextdotjs,
  SiSocketdotio,
  SiWebassembly,
} from 'react-icons/si';
export default function Skills() {
  return (
    <div className="flex flex-wrap gap-4 mt-3 item-center lg:text-4xl text-5xl dark:text-gray-400 text-gray-500">
      <a
        className="dark:hover:text-white pointer-cursor-element hover:text-black"
        href="https://golang.org/"
        target="_blank"
        aria-label="Golang"
      >
        <span className="pointer-events-none">
          <SiGo title="Golang" />
        </span>
      </a>
      <a
        className="dark:hover:text-white pointer-cursor-element hover:text-black"
        href="https://webassembly.org/"
        target="_blank"
        aria-label="WebAssembly"
      >
        <span className="pointer-events-none">
          <SiWebassembly title="WebAssembly" />
        </span>
      </a>
      <a
        className="dark:hover:text-white pointer-cursor-element hover:text-black"
        href="https://www.djangoproject.com/"
        target="_blank"
        aria-label="Django"
      >
        <span className="pointer-events-none">
          <SiDjango title="Django" />
        </span>
      </a>
      <a
        className="dark:hover:text-white pointer-cursor-element hover:text-black"
        href="https://nodejs.org/"
        target="_blank"
        aria-label="Node.js"
      >
        <span className="pointer-events-none">
          <SiNodedotjs title="Node.js" />
        </span>
      </a>
      <a
        className="dark:hover:text-white pointer-cursor-element hover:text-black"
        href="https://www.postgresql.org/"
        target="_blank"
        aria-label="PostgreSQL"
      >
        <span className="pointer-events-none">
          <SiPostgresql title="PostgreSQL" />
        </span>
      </a>
      <a
        className="dark:hover:text-white pointer-cursor-element hover:text-black"
        href="https://www.mongodb.com/"
        target="_blank"
        aria-label="MongoDB"
      >
        <span className="pointer-events-none">
          <SiMongodb title="MongoDB" />
        </span>
      </a>
      <a
        className="dark:hover:text-white pointer-cursor-element hover:text-black"
        href="https://www.docker.com/"
        target="_blank"
        aria-label="Docker"
      >
        <span className="pointer-events-none">
          <SiDocker title="Docker" />
        </span>
      </a>
      <a
        className="dark:hover:text-white pointer-cursor-element hover:text-black"
        href="https://socket.io/"
        target="_blank"
        aria-label="Socket.io"
      >
        <span className="pointer-events-none">
          <SiSocketdotio title="Socket.io" />
        </span>
      </a>
      <a
        className="dark:hover:text-white pointer-cursor-element hover:text-black"
        href="https://nextjs.org/"
        target="_blank"
        aria-label="Next.js"
      >
        <span className="pointer-events-none">
          <SiNextdotjs title="Next.js" />
        </span>
      </a>
      <a
        className="dark:hover:text-white pointer-cursor-element hover:text-black"
        href="https://reactjs.org/"
        target="_blank"
        aria-label="React"
      >
        <span className="pointer-events-none">
          <SiReact title="React" />
        </span>
      </a>
      <a
        className="dark:hover:text-white pointer-cursor-element hover:text-black"
        href="https://vuejs.org/"
        target="_blank"
        aria-label="Vue.js"
      >
        <span className="pointer-events-none">
          <SiVuedotjs title="Vue.js" />
        </span>
      </a>
      <a
        className="dark:hover:text-white pointer-cursor-element hover:text-black"
        href="https://svelte.dev/"
        target="_blank"
        aria-label="Svelte"
      >
        <span className="pointer-events-none">
          <SiSvelte title="Svelte" />
        </span>
      </a>
      <a
        className="dark:hover:text-white pointer-cursor-element hover:text-black"
        href="https://www.typescriptlang.org/"
        target="_blank"
        aria-label="TypeScript"
      >
        <span className="pointer-events-none">
          <SiTypescript title="TypeScript" />
        </span>
      </a>
      <a
        className="dark:hover:text-white pointer-cursor-element hover:text-black"
        href="https://firebase.google.com/"
        target="_blank"
        aria-label="Firebase"
      >
        <span className="pointer-events-none">
          <SiFirebase title="Firebase" />
        </span>
      </a>
      <a
        className="dark:hover:text-white pointer-cursor-element hover:text-black"
        href="https://www.shopify.com/"
        target="_blank"
        aria-label="Shopify"
      >
        <span className="pointer-events-none">
          <SiShopify title="Shopify" />
        </span>
      </a>
      <a
        className="dark:hover:text-white pointer-cursor-element hover:text-black"
        href="https://www.agora.io/en/"
        target="_blank"
        aria-label="Agora"
      >
        <span className="pointer-events-none">
          <SiAgora title="Agora" />
        </span>
      </a>
      <a
        className="dark:hover:text-white pointer-cursor-element hover:text-black"
        href="https://cloud.google.com/"
        target="_blank"
        aria-label="Google Cloud"
      >
        <span className="pointer-events-none">
          <SiGooglecloud title="Google Cloud" />
        </span>
      </a>
      <a
        className="dark:hover:text-white pointer-cursor-element hover:text-black"
        href="https://aws.amazon.com/"
        target="_blank"
        aria-label="AWS"
      >
        <span className="pointer-events-none">
          <SiAmazonaws title="AWS" />
        </span>
      </a>
      <a
        className="dark:hover:text-white pointer-cursor-element hover:text-black"
        href="http://www.cplusplus.com/"
        target="_blank"
        aria-label="C++"
      >
        <span className="pointer-events-none">
          <SiCplusplus title="C++" />
        </span>
      </a>
    </div>
  );
}
