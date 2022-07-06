import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <>
      <header className="fixed left-0 w-full top-0 hidden px-4 py-4 bg-white shadow lg:grid lg:grid-cols-[250px_minmax(0,1fr)] ">
        <div className="" />
        <div className="relative flex flex-row items-center header-content">
          <form action="#">
            <div className="relative hidden lg:flex">
              <div className="absolute top-0 left-0 inline-flex items-center justify-center w-10 h-full text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                id="search"
                type="text"
                name="search"
                className="w-full h-10 pl-10 pr-4 text-sm placeholder-gray-500 border border-gray-300 rounded-lg sm:text-base focus:outline-none focus:border-indigo-400"
                placeholder="Search..."
              />
            </div>
            <div className="flex md:hidden">
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 border-transparent"
              >
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </a>
            </div>
          </form>
          <div className="flex ml-auto">
            <span className="flex flex-row items-center ">
              <div className="relative w-10 h-10 overflow-hidden bg-gray-200 border rounded-full">
                <Image
                  src={`/api/imageProxy?url=${encodeURIComponent(
                    "https://pbs.twimg.com/profile_images/378800000298815220/b567757616f720812125bfbac395ff54_normal.png"
                  )}`}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <span className="flex flex-col ml-2">
                <span className="w-20 font-semibold leading-none tracking-wide truncate">
                  John Doe
                </span>
                <span className="w-20 mt-1 text-xs leading-none text-gray-500 truncate">
                  Manager
                </span>
              </span>
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
