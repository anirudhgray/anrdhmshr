type ProjectShowcaseCardProps = {
  image: string;
  name: string;
  description: string;
  skills: string[];
  link: string;
};

export default function ProjectShowcaseCard({
  image,
  name,
  description,
  skills,
  link,
}: ProjectShowcaseCardProps) {
  return (
    <div className="relative grid grid-cols-4 sm:group-hover/items:opacity-40 hover:!opacity-100 group transition">
      <div className="absolute group-hover:bg-gray-300 dark:group-hover:bg-gray-700 rounded-md transition -inset-4 z-0"></div>
      <div className="md:col-span-1 col-span-4 md:pr-5 z-10 md:mb-0 mb-4">
        <div className="aspect-video overflow-hidden flex items-center max-w-xs">
          <img src={image} alt={name} className="w-full" />
        </div>
      </div>
      <div className="flex flex-col gap-2 font-light md:col-span-3 col-span-4  z-10">
        <div className="flex flex-row justify-between ">
          <div className="flex flex-col ">
            <div className="flex flex-row ">
              <a
                target="_blank"
                href={link}
                aria-label={name}
                className="text-lg group/link  group-hover:underline"
              >
                {name}
                <div className="absolute pointer-cursor-element rounded-md transition -inset-4 z-0 "></div>
              </a>
            </div>
            {/* <div className="flex flex-row ">
                <h4 className="text-sm ">{role}</h4>
              </div> */}
          </div>
        </div>
        <div className="flex flex-row mt-2 ">
          <p className="text-sm ">{description}</p>
        </div>
        <div className="flex flex-row flex-wrap gap-2 mt-2 ">
          {skills.map((tech) => (
            <div
              key={tech}
              className="flex flex-row items-center px-2 py-1 rounded-md bg-gray-200 dark:bg-gray-800 "
            >
              <p className="text-xs ">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
