import { SiYoutube } from 'react-icons/si';

type MiscCardProps = {
  category: string;
  description: string;
  link: string;
  YT?: boolean;
};

export default function MiscCard({
  category,
  description,
  link,
  YT = false,
}: MiscCardProps) {
  return (
    <div className="relative grid grid-cols-4 group transition">
      <div className="absolute group-hover:bg-gray-300 dark:group-hover:bg-gray-700 rounded-md transition -inset-4 z-0"></div>
      <div className="md:col-span-1 col-span-4 md:pr-5 z-10">
        <a
          target="_blank"
          href={link}
          aria-label={category}
          className="text-lg group/link flex items-center gap-2 group-hover:underline"
        >
          {YT ? <SiYoutube /> : null}
          {category}
          <div className="absolute pointer-cursor-element rounded-md transition -inset-4 z-0 "></div>
        </a>
      </div>
      <div className="flex flex-col gap-2 font-light md:col-span-3 col-span-4 z-10 pointer-events-none">
        <p>{description}</p>
      </div>
    </div>
  );
}
