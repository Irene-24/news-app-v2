import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Transition } from "@headlessui/react";

import NavItem from "./NavItem";
import { MenuToggler } from "./MenuToggler";

import { paths } from "./paths";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <aside className="">
        <nav className="fixed top-0 left-0 w-[80vw] max-w-[250px] bottom-0 overflow-y-auto z-50 bg-brand-blue-light">
          <div className="flex items-center px-2 py-4">
            <Link href="/">
              <a className="relative w-[70%] h-5 md:h-9">
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
          <ul className="py-6">
            {paths.map((p) => (
              <NavItem key={p.path} {...p} />
            ))}
          </ul>
        </nav>
      </aside>

      <MenuToggler
        className="block fixed right-3 bottom-3 z-[1000]"
        active={isOpen}
        onClick={() => setIsOpen((s) => !s)}
      />

      <Transition
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        show={isOpen}
      >
        <div>
          <span className="hidden">overlay</span>
        </div>
      </Transition>
    </nav>
  );
};

export default SideBar;
