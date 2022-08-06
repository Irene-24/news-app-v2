import React, { ReactNode } from "react";
import BodyGrid from "./BodyGrid";
import Footer from "./Footer";
import NavBar from "./HeaderNav";
import SideBar from "./SideBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid md:grid-cols-[250px_minmax(0,1fr)] min-h-screen">
      <SideBar />
      <main className="px-4 py-20">
        <NavBar />
        <BodyGrid>{children}</BodyGrid>
        <Footer />
      </main>
    </div>
  );
};

export { Layout };
