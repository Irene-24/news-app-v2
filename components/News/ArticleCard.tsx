import { formatRelativeDate } from "@/utils/formatRelativeDate";
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

const trim = (text: string, type: TYPE, forcedSize?: number) => {
  if (!text) return "";

  if (forcedSize) {
    return text.length <= forcedSize ? text : `${text.slice(0, forcedSize)}...`;
  }

  return text.length <= limit[type] ? text : `${text.slice(0, limit[type])}...`;
};

interface ArticleCardProps extends Article {
  className?: string;
  forcedSize?: number;
  isFirst?: boolean;
}

const ArticleCard = ({
  className,
  title,
  link,
  description,
  image_url,
  pubDate,
  forcedSize,
  isFirst,
}: ArticleCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`min-h-[192px] md:max-h-56 p-2  bg-white rounded shadow-sm hover: ${className}`}
    >
      <article
        className={` grid grid-cols-1 gap-4 phone-md:grid-cols-[40%_minmax(0,1fr)] overflow-hidden`}
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
          <h3
            className={`text-lg font-medium
             text-brand-blue-dark ${isFirst ? "xl:hidden" : ""} max:block`}
          >
            {trim(title, TYPE.TITLE)}
          </h3>

          {isFirst ? (
            <h3 className="hidden text-xl font-medium xl:block text-brand-blue-dark max:hidden ">
              {trim(title, TYPE.TITLE, forcedSize)}
            </h3>
          ) : null}

          <div className="relative">
            <p
              className={`text-sm font-normal text-brand-blue-dark/60
             ${isFirst ? "xl:hidden" : ""} max:block
            `}
            >
              {trim(description, TYPE.TEXT)}
            </p>

            {isFirst ? (
              <p
                className={`hidden text-base font-normal xl:block max:hidden text-brand-blue-dark/60`}
              >
                {trim(description, TYPE.TEXT, forcedSize)}
              </p>
            ) : null}
          </div>
        </section>
      </article>

      <div
        className="flex items-center justify-between mt-3 
      text-brand-blue-dark/[40%] text-sm
      "
      >
        <p className="">{formatRelativeDate(new Date(pubDate))}</p>

        <p className="relative flex items-center justify-end flex-1 space-x-2 ">
          <span className="capitalize">read more</span>

          <span className="flex items-center justify-center text-brand-blue-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </span>
        </p>
      </div>
    </a>
  );
};

export { ArticleCard };
