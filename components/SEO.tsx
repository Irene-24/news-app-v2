import React, { ReactNode } from "react";
import Head from "next/head";

interface SEOProps {
  title?: string;
  children?: ReactNode;
}

const SEO = ({ title, children }: SEOProps) => {
  return (
    <Head>
      <title>{`${title ? `${title} | Aster News` : "Aster News"}`} </title>
      {children}
    </Head>
  );
};

export { SEO };
