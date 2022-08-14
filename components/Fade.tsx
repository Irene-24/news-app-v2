import React, { ReactNode } from "react";
import { Transition } from "@headlessui/react";

interface FadeProps {
  children: ReactNode;
  isShowing: boolean;
}

const Fade = ({ children, isShowing }: FadeProps) => {
  return (
    <Transition
      show={isShowing}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition>
  );
};

export default Fade;
