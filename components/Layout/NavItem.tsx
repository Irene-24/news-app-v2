import React, { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavItemProps {
  text: string;
  icon: ReactNode;
  path: string;
}

const NavItem = ({ text, icon, path }: NavItemProps) => {
  const router = useRouter();

  const isActive = router?.pathname === path;

  return (
    <li>
      <Link href={path}>
        <a
          className={`py-4 relative px-6 gap-x-4 items-center grid grid-cols-[24px_minmax(0,1fr)] transition-colors  text-base ${
            isActive
              ? "text-brand-blue bg-brand-blue/10"
              : "text-brand-blue-dark bg-transparent"
          }  rounded-r-full mr-[3%]`}
        >
          <span className="relative">
            <span
              className={`absolute top-2/4 -translate-y-2/4 -left-2/4 rounded-full w-1 h-1 transition-colors ${
                isActive
                  ? "bg-brand-blue-dark font-bold"
                  : "bg-transparent font-normal"
              }`}
            />
            {icon}
          </span>
          <span>{text}</span>
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
