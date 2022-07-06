import React, { useEffect, useState, useCallback, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Transition } from "@headlessui/react";

import NavItem from "./NavItem";
import { MenuToggler } from "./MenuToggler";

import { paths } from "./paths";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    window?.addEventListener("resize", close);

    return () => window?.removeEventListener("resize", close);
  }, [close]);

  useEffect(() => {
    close();
  }, [router?.asPath, close]);

  return (
    <>
      <aside className={`absolute md:relative`}>
        <nav
          className={`
          fixed 
          top-0 left-0 
          w-[80vw] max-w-[250px] 
          bottom-0 overflow-y-auto 
          z-50 bg-brand-blue-light
          transition-transform md:!translate-x-0 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }
          `}
        >
          <div className="flex items-center p-4">
            <Link href="/">
              <a className="relative w-[50%] md:w-[70%] h-7 md:h-9">
                <span className="sr-only">Logo</span>
                <Image
                  src="/images/logo-full.svg"
                  alt="News app logo"
                  layout="fill"
                  objectPosition="center"
                />
              </a>
            </Link>
          </div>
          <ul className={`pt-6`}>
            {paths.map((p) => (
              <NavItem key={p.path} {...p} />
            ))}

            <li>
              <a
                className="block  m-4 
                bg-brand-blue-medium 
                text-white rounded
                text-center p-4
                relative text-sm
                "
                href="https://www.figma.com/community/file/1087052805896786982"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="w-8 flex items-center justify-center mx-auto object-contain aspect-square">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 90 90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_136)">
                      <path
                        d="M45 45.5C45 42.9804 46.0009 40.5641 47.7825 38.7825C49.5641 37.0009 51.9804 36 54.5 36C57.0196 36 59.4359 37.0009 61.2175 38.7825C62.9991 40.5641 64 42.9804 64 45.5C64 48.0196 62.9991 50.4359 61.2175 52.2175C59.4359 53.9991 57.0196 55 54.5 55C51.9804 55 49.5641 53.9991 47.7825 52.2175C46.0009 50.4359 45 48.0196 45 45.5Z"
                        fill="#1ABCFE"
                      />
                      <path
                        d="M26 64.5C26 61.9804 27.0009 59.5641 28.7825 57.7825C30.5641 56.0009 32.9804 55 35.5 55H45V64.5C45 67.0196 43.9991 69.4359 42.2175 71.2175C40.4359 72.9991 38.0196 74 35.5 74C32.9804 74 30.5641 72.9991 28.7825 71.2175C27.0009 69.4359 26 67.0196 26 64.5V64.5Z"
                        fill="#0ACF83"
                      />
                      <path
                        d="M45 17V36H54.5C57.0196 36 59.4359 34.9991 61.2175 33.2175C62.9991 31.4359 64 29.0196 64 26.5C64 23.9804 62.9991 21.5641 61.2175 19.7825C59.4359 18.0009 57.0196 17 54.5 17H45Z"
                        fill="#FF7262"
                      />
                      <path
                        d="M26 26.5C26 29.0196 27.0009 31.4359 28.7825 33.2175C30.5641 34.9991 32.9804 36 35.5 36H45V17H35.5C32.9804 17 30.5641 18.0009 28.7825 19.7825C27.0009 21.5641 26 23.9804 26 26.5V26.5Z"
                        fill="#F24E1E"
                      />
                      <path
                        d="M26 45.5C26 48.0196 27.0009 50.4359 28.7825 52.2175C30.5641 53.9991 32.9804 55 35.5 55H45V36H35.5C32.9804 36 30.5641 37.0009 28.7825 38.7825C27.0009 40.5641 26 42.9804 26 45.5V45.5Z"
                        fill="#A259FF"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_136">
                        <rect
                          width="38"
                          height="57"
                          fill="white"
                          transform="translate(26 17)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>{" "}
                Design credit <br />
                Subash Matheswaran
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <Transition
        enter="transition-opacity ease-linear duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        show={isOpen}
        as={Fragment}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25 md:hidden">
          <span className="hidden">overlay</span>
        </div>
      </Transition>

      <MenuToggler
        className="block md:hidden fixed right-2 bottom-2 z-[1000]"
        active={isOpen}
        onClick={() => setIsOpen((s) => !s)}
      />
    </>
  );
};

export default SideBar;
