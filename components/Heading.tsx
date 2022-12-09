import { ReactNode } from "react";

interface Props {
  className?: string | undefined;
  children: ReactNode;
}

const Heading = ({ className = "", children }: Props) => {
  return (
    <h1
      className={`text-3xl font-bold md:text-4xl max:text-7xl my-2 text-brand-blue-dark ${className}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
