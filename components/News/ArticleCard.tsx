import React from "react";

interface ArticleCardProps {
  className?: string;
}

const ArticleCard = ({ className }: ArticleCardProps) => {
  return (
    <article className="h-48 p-4 truncate bg-white rounded shadow-sm md:p-5 ">
      ArticleCard
    </article>
  );
};

export { ArticleCard };
