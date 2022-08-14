import React, { FormEvent, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const ref = useRef<HTMLInputElement | null>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (ref.current) {
      const { value } = ref.current;

      router.push(`/search?q=${encodeURIComponent(value)}`);
    }
  };

  return (
    <>
      <header className="fixed left-0 w-full top-0 px-2 py-1.5 md:px-4 bg-transparent grid md:grid-cols-[250px_minmax(0,1fr)] bg-brand-blue-light shadow-sm z-[5]">
        <div className="" />
        <div className="grid grid-cols-[40px_minmax(0,1fr)_70px] items-center gap-2 md:grid-cols-[minmax(0,1fr)_70px] md:gap-x-[4%] lg:gap-x-[10%]">
          <Link href="/">
            <a className="relative md:hidden aspect-square">
              <Image
                src="/images/logo.svg"
                alt="app logo"
                objectFit="contain"
                objectPosition="center"
                layout="fill"
                loading="eager"
              />
            </a>
          </Link>

          <form
            className="grid pr-2 grid-cols-[minmax(0,1fr)_18px] bg-brand-blue/5"
            onSubmit={onSubmit}
          >
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <input
              className="p-2 bg-transparent outline-none placeholder:text-brand-blue-dark"
              ref={ref}
              type="search"
              name="search"
              id="search"
              placeholder="Search for news.."
            />

            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </form>

          <a
            href="https://github.com/Irene-24/news-app-v2"
            target="_blank"
            rel="noopener noreferrer"
            title="Github link"
            className="flex items-center justify-between space-x-2 text-sm"
          >
            <span>Github</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              x="0"
              y="0"
              viewBox="0 0 30 30"
            >
              <path d="M15 3C8.373 3 3 8.373 3 15c0 5.623 3.872 10.328 9.092 11.63a1.751 1.751 0 01-.092-.583v-2.051h-1.508c-.821 0-1.551-.353-1.905-1.009-.393-.729-.461-1.844-1.435-2.526-.289-.227-.069-.486.264-.451.615.174 1.125.596 1.605 1.222.478.627.703.769 1.596.769.433 0 1.081-.025 1.691-.121.328-.833.895-1.6 1.588-1.962-3.996-.411-5.903-2.399-5.903-5.098 0-1.162.495-2.286 1.336-3.233-.276-.94-.623-2.857.106-3.587 1.798 0 2.885 1.166 3.146 1.481A8.993 8.993 0 0115.495 9c1.036 0 2.024.174 2.922.483C18.675 9.17 19.763 8 21.565 8c.732.731.381 2.656.102 3.594.836.945 1.328 2.066 1.328 3.226 0 2.697-1.904 4.684-5.894 5.097C18.199 20.49 19 22.1 19 23.313v2.734c0 .104-.023.179-.035.268C23.641 24.676 27 20.236 27 15c0-6.627-5.373-12-12-12z"></path>
            </svg>
          </a>
        </div>
      </header>
    </>
  );
};

export default NavBar;
