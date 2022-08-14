import { Article } from "@/utils/types";
import React from "react";
import { FallbackImage } from "../FallbackImage";

enum TYPE {
  TITLE,
  TEXT,
}

const limit = {
  [TYPE.TEXT]: 120,
  [TYPE.TITLE]: 50,
};

const trim = (text: string, type: TYPE) => {
  return text.length <= limit[type] ? text : `${text.slice(0, limit[type])}...`;
};

interface ArticleCardProps extends Article {
  className?: string;
}

const ArticleCard = ({ className }: ArticleCardProps) => {
  return (
    <article
      className={`min-h-[192px] max-h-56 p-2 grid-rows-2 phone-md:grid-rows-1 bg-white rounded shadow-sm  grid grid-cols-1 gap-4 phone-md:grid-cols-[40%_minmax(0,1fr)] ${className} overflow-hidden`}
    >
      <div className="relative overflow-hidden rounded bg-brand-blue-light ">
        <FallbackImage
          objectFit="contain"
          objectPosition="center"
          layout="fill"
          src=""
          alt="image"
        />
      </div>

      <section className="w-full ">
        <h3 className="text-lg font-medium text-brand-blue-dark ">
          {trim(
            `Lorem ipsum dolor sit amet consectetur adipisicing elit`,
            TYPE.TITLE
          )}
        </h3>
        <div className="relative pb-20 ">
          <p className="text-sm font-normal text-brand-blue-dark/60">
            {trim(
              `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolores
          blanditiis ex magni quam vero labore, ea autem quisquam soluta quidem
          quae nam eligendi quia a dignissimos asperiores impedit itaque.`,
              TYPE.TEXT
            )}
          </p>
        </div>
      </section>
    </article>
  );
};

export { ArticleCard };
