import { FavTechIcons, TeachIcons } from './TechstackSection/TeachIcons';

export default function TechStack() {
  return (
    <>
      <div className="mb-7">
        <h2 className="text-3xl font-bold tracking-tight text-primary md:text-5xl flex gap-2 items-center mb-2">
          Technologies
        </h2>
        <p className="text-[#1e2024] dark:text-[#dadde7] text-leading-6 text-lg tracking-wide">
          I use a variety of tools to streamline my development process and
          increase the quality of both my code, and my projects. Below is a list
          of technologies and languages I&apos;ve had experience with in the
          past, or use currently.
        </p>
      </div>
      {/* <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
        <TeachIcons />
      </div> */}
      <div className="pt-3 md:pt-5">
        <p className="text-lg md:text-xl font-semibold">
          Favorite Technologies
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <FavTechIcons />
        </div>
      </div>
      <div className="pt-3 md:pt-5">
        <p className="text-lg md:text-xl font-semibold">Other Technologies</p>
        <div className="mt-3 grid grid-cols-6 sm:flex sm:flex-wrap gap-[0.5rem]">
          <TeachIcons />
        </div>
      </div>
    </>
  );
}
