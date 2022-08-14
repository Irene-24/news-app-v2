import { Article } from "@/utils/types";
import React from "react";
import { FallbackImage } from "../FallbackImage";

enum TYPE {
  TITLE,
  TEXT,
}

const limit = {
  [TYPE.TEXT]: 80,
  [TYPE.TITLE]: 50,
};

const trim = (text: string, type: TYPE) => {
  return text.length <= limit[type] ? text : `${text.slice(0, limit[type])}...`;
};

interface ArticleCardProps extends Article {
  className?: string;
}

const ArticleCard = ({
  className,
  title,
  description,
  image_url,
  video_url,
  pubDate,
  creator,
}: ArticleCardProps) => {
  return (
    <article>
      <section
        className={`min-h-[192px] md:max-h-56 p-2  bg-white rounded shadow-sm  grid grid-cols-1 gap-4 phone-md:grid-cols-[40%_minmax(0,1fr)] ${className} overflow-hidden`}
      >
        <div className="relative overflow-hidden rounded bg-brand-blue-light min-h-[150px]">
          <FallbackImage
            objectFit="cover"
            objectPosition="center"
            layout="fill"
            src={image_url}
            alt={title}
          />
        </div>

        <section className="w-full">
          <h3 className="text-lg font-medium text-brand-blue-dark ">
            {trim(title, TYPE.TITLE)}
          </h3>
          <div className="relative">
            <p className="text-sm font-normal text-brand-blue-dark/60">
              {trim(description, TYPE.TEXT)}
            </p>
          </div>
        </section>
      </section>

      <div></div>
    </article>
  );
};

export { ArticleCard };
