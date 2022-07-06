import React, { ReactNode } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid lg:grid-cols-[250px_minmax(0,1fr)] min-h-screen">
      <SideBar />
      <main className="px-4 py-20">
        <NavBar />
        {children}
        <Footer />
      </main>
    </div>
  );
};

export { Layout };
