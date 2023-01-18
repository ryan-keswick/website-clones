import { useState, useEffect } from "react";
import Image from "next/image";
import backgroundImage from "../../../public/bg.jpg";

export const Hero = () => {
  return (
    <header className="relative bg-slate-50 pt-6">
      <Image
        src={backgroundImage}
        alt=""
        className="absolute bottom-0 z-0 ml-[-630px] w-[1278px] max-w-none"
        priority
        unoptimized
      />
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between px-3 sm:px-5">
          <div className="flex items-center gap-4">
            <HeroIconsTitle />
            <VersionButton />
          </div>
          <ShareOnTwitterButton />
        </div>
        <div className="relative z-10 flex justify-center pt-14">
          <div className="max-w-[37rem] ">
            <div className="flex items-center justify-center gap-4 text-[0.8125rem] leading-6 text-slate-500">
              <p>292 Icons</p>
              <Circle />
              <p>MIT license</p>
              <Circle />
              <p>React & Vue libraries</p>
            </div>
            <h1 className="mt-6  justify-center text-center text-[1.75rem] font-extrabold leading-9 tracking-tight text-slate-900 md:text-4xl">
              Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.
            </h1>
            <div className="mt-10 mb-10 flex justify-center gap-8">
              <a
                className="flex items-center gap-3 rounded-lg px-1.5 py-1 text-[0.8125rem] font-semibold text-slate-900 transition hover:bg-slate-900/[0.03]"
                href="https://google.com"
              >
                <GithubLogo />
                <p>Documentation</p>
              </a>
              <a
                className="flex items-center gap-3 rounded-lg px-1.5 py-1 text-[0.8125rem] font-semibold text-slate-900 transition hover:bg-slate-900/[0.03]"
                href="https://google.com"
              >
                <FigmaLogo />
                <p>Get Figma File</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const FigmaLogo = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth=".895"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <path
        d="M11.554 4v-.447H8.738a2.553 2.553 0 1 0 0 5.105H11.554V4Z"
        fill="#DF5A33"
        stroke="#DF5A33"
      ></path>
      <path
        d="M11.554 9.895v-.448H8.738a2.553 2.553 0 0 0 0 5.106H11.554V9.895Z"
        fill="#985CF7"
        stroke="#985CF7"
      ></path>
      <path
        d="M11.554 15.79v-.448H8.738a2.553 2.553 0 0 0 0 5.105h.132a2.684 2.684 0 0 0 2.684-2.684V15.79Z"
        fill="#5ECC89"
        stroke="#5ECC89"
      ></path>
      <path
        d="M15.262 9.447a2.553 2.553 0 1 1 0 5.106h-.263a2.553 2.553 0 0 1 0-5.106h.263Z"
        fill="#57B9F8"
        stroke="#57B9F8"
      ></path>
      <path
        d="M12.446 4v-.447H15.262a2.553 2.553 0 1 1 0 5.105H12.446V4Z"
        fill="#EE7A69"
        stroke="#EE7A69"
      ></path>
    </svg>
  );
};

const GithubLogo = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6 fill-slate-900"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
      ></path>
    </svg>
  );
};

const Circle = () => {
  return (
    <svg viewBox="0 0 2 2" aria-hidden="true" className="w-0.5 fill-current">
      <circle cx="1" cy="1" r="1"></circle>
    </svg>
  );
};

const ShareOnTwitterButton = () => {
  return (
    <a
      className="flex items-center gap-3 rounded-lg py-1 px-1.5 leading-6 transition hover:bg-slate-200"
      href="https://google.com"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        className="fill-slate-400"
      >
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
      <p className="text-[0.8125rem] font-semibold text-slate-900">
        Share
        <span className="sr-only sm:not-sr-only"> on Twitter</span>
      </p>
    </a>
  );
};

const HeroIconsTitle = () => {
  return (
    <svg viewBox="0 0 880 166" fill="none" aria-hidden="true" className="h-7">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m78.091 0 5.967 5.676c15.038 14.306 35.323 23.067 57.663 23.067.356 0 .711-.002 1.065-.006l6.363-.08 1.988 6.072a102.026 102.026 0 0 1 5.045 31.782c0 47.391-32.269 87.19-75.928 98.477l-2.163.559-2.163-.559C32.27 153.701 0 113.902 0 66.511c0-11.085 1.769-21.772 5.045-31.782l1.988-6.072 6.363.08c.354.004.71.006 1.065.006 22.34 0 42.625-8.761 57.664-23.067L78.09 0ZM19.846 46.033a84.814 84.814 0 0 0-2.492 20.478c0 38.459 25.662 70.919 60.737 81.006 35.075-10.087 60.738-42.547 60.738-81.006 0-7.071-.866-13.93-2.493-20.478-22.009-1.16-42.166-9.387-58.245-22.453-16.079 13.066-36.235 21.293-58.245 22.453Z"
        fill="#8B5CF6"
      ></path>
      <path
        d="M275.081 58.045c-10.205 0-18.126 3.828-22.696 10.718V29.564h-19.65v107.184h19.65V95.406c0-13.321 7.159-18.987 16.756-18.987 8.835 0 15.08 5.36 15.08 15.772v44.557h19.65V89.741c0-20.365-12.643-31.696-28.79-31.696Zm59.125 48.539h57.426c.457-2.603.762-5.206.762-8.116 0-22.508-15.994-40.423-38.538-40.423-23.916 0-40.214 17.609-40.214 40.423 0 22.815 16.146 40.424 41.737 40.424 14.623 0 26.048-5.972 33.207-16.384l-15.842-9.187c-3.351 4.441-9.444 7.656-17.06 7.656-10.359 0-18.737-4.287-21.478-14.393Zm-.305-15.312c2.285-9.8 9.444-15.465 19.955-15.465 8.225 0 16.451 4.44 18.888 15.465h-38.843Zm88.817-17.915V60.188h-19.65v76.56h19.65v-36.595c0-16.078 12.948-20.671 23.153-19.446v-22.05c-9.596 0-19.193 4.288-23.153 14.7Zm65.027 65.535c22.392 0 40.366-17.609 40.366-40.424 0-22.814-17.974-40.423-40.366-40.423s-40.214 17.609-40.214 40.423c0 22.815 17.822 40.424 40.214 40.424Zm0-19.293c-11.577 0-20.564-8.728-20.564-21.13 0-12.403 8.987-21.131 20.564-21.131 11.729 0 20.716 8.728 20.716 21.13 0 12.403-8.987 21.131-20.716 21.131Zm60.892-68.598c6.702 0 12.186-5.512 12.186-12.096 0-6.584-5.484-12.25-12.186-12.25-6.55 0-12.034 5.666-12.034 12.25a12.255 12.255 0 0 0 3.561 8.517 12.126 12.126 0 0 0 8.473 3.58Zm-9.749 85.747h19.65v-76.56h-19.65v76.56Zm70.842 2.144c14.928 0 27.876-7.962 34.426-19.905l-17.06-9.8c-3.047 6.278-9.597 10.106-17.518 10.106-11.729 0-20.412-8.728-20.412-20.825 0-12.25 8.683-20.977 20.412-20.977 7.769 0 14.319 3.981 17.365 10.26l16.908-9.954c-6.245-11.79-19.193-19.752-34.121-19.752-23.153 0-40.214 17.609-40.214 40.423 0 22.815 17.061 40.424 40.214 40.424Zm76.833 0c22.391 0 40.366-17.609 40.366-40.424 0-22.814-17.975-40.423-40.366-40.423-22.392 0-40.214 17.609-40.214 40.423 0 22.815 17.822 40.424 40.214 40.424Zm0-19.293c-11.577 0-20.564-8.728-20.564-21.13 0-12.403 8.987-21.131 20.564-21.131 11.729 0 20.716 8.728 20.716 21.13 0 12.403-8.987 21.131-20.716 21.131Zm93.49-61.554c-10.206 0-18.127 3.828-22.697 10.718v-8.575h-19.65v76.56h19.65V95.406c0-13.321 7.159-18.987 16.756-18.987 8.835 0 15.08 5.36 15.08 15.772v44.557h19.65V89.741c0-20.365-12.643-31.696-28.789-31.696ZM840.7 81.93c0-4.134 3.96-6.277 8.835-6.277 5.636 0 9.901 2.909 12.186 7.809l16.756-9.188c-5.941-10.565-16.604-16.23-28.942-16.23-15.69 0-28.942 8.728-28.942 24.346 0 26.949 39.3 20.824 39.3 32.002 0 4.44-4.265 6.584-10.51 6.584-7.617 0-12.796-3.675-14.928-9.953l-17.061 9.647c5.484 11.79 16.756 18.221 31.989 18.221 16.298 0 30.617-7.962 30.617-24.499 0-28.174-39.3-21.13-39.3-32.462Z"
        fill="#0F172A"
      ></path>
    </svg>
  );
};

const VersionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".relative")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const DropDownCard = () => {
    return (
      <div className="absolute z-50 mt-1 w-40 rounded-lg border border-slate-700/10 text-left font-semibold shadow-md">
        <div className="py-1 text-sm">
          <div className="flex items-center justify-between py-2 px-3 text-violet-500">
            <p className="">v2.0.0</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 30 30"
              strokeWidth={3}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <a href="https://v1.heroicons.com/">
            <div className="py-2 text-slate-500 hover:bg-slate-300/10">
              <p className="px-3">v1.0.6</p>
            </div>
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      <button
        className="flex items-center rounded-full border border-slate-700/10 bg-slate-100 py-1.5 pr-3 pl-2.5 text-xs font-semibold text-slate-500 transition hover:border-slate-700/20"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        v2.0.0
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="ml-1 -mr-1 w-2.5 overflow-visible"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {isOpen && <DropDownCard />}
    </div>
  );
};
