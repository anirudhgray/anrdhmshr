type ExperienceCardProps = {
  start: string;
  end: string;
  organisation: string;
  role: string;
  description: string;
  techStack: string[];
  link?: string;
};

export default function ExperienceCard({
  start,
  end,
  organisation,
  role,
  description,
  techStack,
  link,
}: ExperienceCardProps) {
  return (
    <div className="relative grid grid-cols-4 sm:group-hover/items:opacity-40 hover:!opacity-100 group transition">
      <div className="absolute group-hover:bg-gray-300 dark:group-hover:bg-gray-700 rounded-md transition -inset-4 z-0"></div>
      <div className="md:col-span-1 col-span-4 md:pr-5 z-10">
        <p className="pt-1 font-extralight ">
          {start} - {end}
        </p>
      </div>
      <div className="flex flex-col gap-2 font-light md:col-span-3 col-span-4  z-10">
        <div className="flex flex-row justify-between ">
          <div className="flex flex-col ">
            <div className="flex flex-row ">
              <a
                target="_blank"
                href={link}
                aria-label={organisation}
                className="text-lg group/link  group-hover:underline"
              >
                {organisation}
                <div className="absolute pointer-cursor-element rounded-md transition -inset-4 z-0 "></div>
              </a>
            </div>
            <div className="flex flex-row ">
              <h4 className="text-sm ">{role}</h4>
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-2 ">
          <p className="text-sm ">{description}</p>
        </div>
        <div className="flex flex-row flex-wrap gap-2 mt-2 ">
          {techStack.map((tech) => (
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
