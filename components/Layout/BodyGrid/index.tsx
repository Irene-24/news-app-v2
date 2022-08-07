import React, {
  ReactNode,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { NextRouter, useRouter } from "next/router";
import Link from "next/link";

import { scrollTo } from "utils";
import { useWindowEvent } from "hooks";

interface BodyGridProps {
  children: ReactNode;
}

const getPath = (router: NextRouter, section: string) => {
  return router?.pathname.includes("search")
    ? `${router?.pathname}?q=${router.query.q}&section=${section}`
    : `${router?.pathname}?section=${section}`;
};

const JumpTo = () => {
  const [atTop, setAtTop] = useState(true);

  const toggle = useCallback(() => {
    setAtTop(window?.scrollY <= 100);
  }, []);

  const scroll = () => {
    if (window && document) {
      const maxAvailableScroll =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      window.scrollTo({
        top: atTop ? maxAvailableScroll : 0,
        behavior: "smooth",
      });
    }
  };

  useWindowEvent("scroll", toggle);

  return (
    <button onClick={scroll} className="text-brand-blue-dark font-medium">
      Jump to{" "}
      {atTop ? "bottom" : <>top&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>}
    </button>
  );
};

const BodyGrid = ({ children }: BodyGridProps) => {
  const router = useRouter();
  const jokesRef = useRef<HTMLDivElement | null>(null);
  const converterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (router.isReady) {
      let el;
      const section = router.query.section;

      switch (section) {
        case "converter":
          el = converterRef?.current;
          break;

        case "jokes":
          el = converterRef?.current;
          break;

        default:
          el = null;
          break;
      }

      if (el) {
        scrollTo({
          element: el,
        });
      }
    }
  }, [router]);

  return (
    <section className="grid lg:grid-cols-[minmax(0,1fr)_30%] gap-4 py-4">
      <aside
        className="fixed lg:hidden left-2 bottom-2 z-10 grid 
        grid-cols-1
      phone-xs:grid-cols-[minmax(0,max-content)_minmax(0,max-content)_minmax(0,1fr)] font-medium
      gap-2 items-center rounded-md p-2  text-sm bg-white shadow "
      >
        <Link shallow href={getPath(router, "jokes")}>
          <a className="text-brand-blue">Jokes</a>
        </Link>

        <Link shallow href={getPath(router, "converter")}>
          <a className="text-brand-orange">Converter</a>
        </Link>

        <JumpTo />
      </aside>
      <main>
        {children}
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            nesciunt provident molestias nam facilis harum, deleniti, reiciendis
            dignissimos quam adipisci odit dolores ea labore nulla illum, non
            ipsum quod aspernatur!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            nesciunt provident molestias nam facilis harum, deleniti, reiciendis
            dignissimos quam adipisci odit dolores ea labore nulla illum, non
            ipsum quod aspernatur!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            nesciunt provident molestias nam facilis harum, deleniti, reiciendis
            dignissimos quam adipisci odit dolores ea labore nulla illum, non
            ipsum quod aspernatur!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            nesciunt provident molestias nam facilis harum, deleniti, reiciendis
            dignissimos quam adipisci odit dolores ea labore nulla illum, non
            ipsum quod aspernatur!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            nesciunt provident molestias nam facilis harum, deleniti, reiciendis
            dignissimos quam adipisci odit dolores ea labore nulla illum, non
            ipsum quod aspernatur!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            nesciunt provident molestias nam facilis harum, deleniti, reiciendis
            dignissimos quam adipisci odit dolores ea labore nulla illum, non
            ipsum quod aspernatur!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            nesciunt provident molestias nam facilis harum, deleniti, reiciendis
            dignissimos quam adipisci odit dolores ea labore nulla illum, non
            ipsum quod aspernatur!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            nesciunt provident molestias nam facilis harum, deleniti, reiciendis
            dignissimos quam adipisci odit dolores ea labore nulla illum, non
            ipsum quod aspernatur!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            nesciunt provident molestias nam facilis harum, deleniti, reiciendis
            dignissimos quam adipisci odit dolores ea labore nulla illum, non
            ipsum quod aspernatur!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            nesciunt provident molestias nam facilis harum, deleniti, reiciendis
            dignissimos quam adipisci odit dolores ea labore nulla illum, non
            ipsum quod aspernatur!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            nesciunt provident molestias nam facilis harum, deleniti, reiciendis
            dignissimos quam adipisci odit dolores ea labore nulla illum, non
            ipsum quod aspernatur!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            nesciunt provident molestias nam facilis harum, deleniti, reiciendis
            dignissimos quam adipisci odit dolores ea labore nulla illum, non
            ipsum quod aspernatur!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            nesciunt provident molestias nam facilis harum, deleniti, reiciendis
            dignissimos quam adipisci odit dolores ea labore nulla illum, non
            ipsum quod aspernatur!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            nesciunt provident molestias nam facilis harum, deleniti, reiciendis
            dignissimos quam adipisci odit dolores ea labore nulla illum, non
            ipsum quod aspernatur!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            nesciunt provident molestias nam facilis harum, deleniti, reiciendis
            dignissimos quam adipisci odit dolores ea labore nulla illum, non
            ipsum quod aspernatur!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            nesciunt provident molestias nam facilis harum, deleniti, reiciendis
            dignissimos quam adipisci odit dolores ea labore nulla illum, non
            ipsum quod aspernatur!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            nesciunt provident molestias nam facilis harum, deleniti, reiciendis
            dignissimos quam adipisci odit dolores ea labore nulla illum, non
            ipsum quod aspernatur!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            nesciunt provident molestias nam facilis harum, deleniti, reiciendis
            dignissimos quam adipisci odit dolores ea labore nulla illum, non
            ipsum quod aspernatur!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            nesciunt provident molestias nam facilis harum, deleniti, reiciendis
            dignissimos quam adipisci odit dolores ea labore nulla illum, non
            ipsum quod aspernatur!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            nesciunt provident molestias nam facilis harum, deleniti, reiciendis
            dignissimos quam adipisci odit dolores ea labore nulla illum, non
            ipsum quod aspernatur!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            nesciunt provident molestias nam facilis harum, deleniti, reiciendis
            dignissimos quam adipisci odit dolores ea labore nulla illum, non
            ipsum quod aspernatur!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            nesciunt provident molestias nam facilis harum, deleniti, reiciendis
            dignissimos quam adipisci odit dolores ea labore nulla illum, non
            ipsum quod aspernatur!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            nesciunt provident molestias nam facilis harum, deleniti, reiciendis
            dignissimos quam adipisci odit dolores ea labore nulla illum, non
            ipsum quod aspernatur!
          </p>
        </div>
      </main>
      <aside>
        <div className="lg:fixed w-full top-24 ">
          <div>
            <div ref={jokesRef}>jokes</div>
            <div ref={converterRef}>converter</div>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default BodyGrid;
