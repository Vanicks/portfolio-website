import Image from 'next/image';

export default function TimelineCard({
  timespan,
  title,
  description,
  current,
  icon,
  company,
}: Props) {
  return (
    <>
      <li className="-mt-3 mb-10 ml-6 rounded-2xl border px-6 py-3 duration-200 hover:bg-gray-200/50 motion-reduce:transition-none dark:border-neutral-800 dark:hover:border-neutral-700 dark:hover:bg-[#202021]">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg
            className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </span>
        <div className="w-full flex gap-3">
          <Image
            src={icon}
            className="h-[60px] hidden border-black rounded-[10px] mt-[4px] sm:block"
            height={60}
            width={60}
            alt="Card Title"
            loading="lazy"
            decoding="async"
          />
          <div className="w-full flex flex-col mb-1">
            <h3 className="flex items-center text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
              {title}
              {current && (
                <span className="ml-3 mr-2 hidden rounded bg-blue-200 py-0.5 pl-1.5 pr-2.5 text-sm font-medium dark:bg-white/10 sm:block">
                  Current
                </span>
              )}
            </h3>
            <h3 className="font-medium text-md text-gray-500">{company}</h3>
            <h4 className="text-sm font-medium text-gray-400">{timespan}</h4>
          </div>
        </div>
        <p className="mb-4 text-base font-normal text-[#1e2024] dark:text-[#dadde7]">
          {description}
        </p>
      </li>
    </>
  );
}

interface Props {
  timespan: string;
  title: string;
  description: string;
  current: boolean;
  icon: string;
  company: string;
};
