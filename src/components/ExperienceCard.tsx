type ExperienceCardProps = {
  start: string;
  end: string;
  organisation: string;
  role: string;
  description: string;
  techStack: string[];
};

export default function ExperienceCard({
  start,
  end,
  organisation,
  role,
  description,
  techStack,
}: ExperienceCardProps) {
  return (
    <div className="grid grid-cols-4 pointer-cursor-element group">
      <div className="md:col-span-1 col-span-4 pointer-cursor-element">
        <p className="pt-1 font-extralight pointer-cursor-element">
          {start} - {end}
        </p>
      </div>
      <div className="flex flex-col gap-2 font-light md:col-span-3 col-span-4 pointer-cursor-element">
        <div className="flex flex-row justify-between pointer-cursor-element">
          <div className="flex flex-col pointer-cursor-element">
            <div className="flex flex-row pointer-cursor-element">
              <h3 className="text-lg pointer-cursor-element group-hover:underline">
                {organisation}
              </h3>
            </div>
            <div className="flex flex-row pointer-cursor-element">
              <h4 className="text-sm pointer-cursor-element">{role}</h4>
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-2 pointer-cursor-element">
          <p className="text-sm pointer-cursor-element">{description}</p>
        </div>
        <div className="flex flex-row flex-wrap gap-2 mt-2 pointer-cursor-element">
          {techStack.map((tech) => (
            <div
              key={tech}
              className="flex flex-row items-center px-2 py-1 rounded-md bg-gray-200 dark:bg-gray-700 pointer-cursor-element"
            >
              <p className="text-xs pointer-cursor-element">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
