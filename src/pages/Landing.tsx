import Hero from '../components/Hero';

export default function Landing() {
  return (
    <div className="dark:bg-[#141414] dark:text-white bg-slate-100">
      <div>
        <Hero />
      </div>
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
