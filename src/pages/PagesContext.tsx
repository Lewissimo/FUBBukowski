import React, { ReactNode, createContext, useEffect, useState } from "react";

interface PagesContextInterface {
  totalScroll: number;
  showElementValue: (elementRef: React.RefObject<HTMLDivElement>) => boolean;
  setIntroduction: React.Dispatch<
    React.SetStateAction<React.RefObject<HTMLDivElement>[] | undefined>
  >;
}
export const PagesContext = createContext<PagesContextInterface | undefined>(
  undefined
);

export const PagesContextProvider = ({ children }: { children: ReactNode }) => {
  const [totalScroll, setTotalScroll] = useState(0);
  const [introduction, setIntroduction] = useState<
    React.RefObject<HTMLDivElement>[] | undefined
  >(undefined);
  const showElementValue = (elementRef: React.RefObject<HTMLDivElement>) => {
    if (
      elementRef.current &&
      elementRef.current?.offsetTop - 150 < totalScroll
    ) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setTotalScroll(document.documentElement.scrollTop);

      introduction?.forEach((element) => {
        if (element.current && totalScroll < 300) {
          element.current.style.top = `${300 - totalScroll}px`;
        } else if (element.current) {
          element.current.style.top = "0";
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const value = {
    totalScroll,
    showElementValue,
    setIntroduction,
  };
  return (
    <PagesContext.Provider value={value}>{children}</PagesContext.Provider>
  );
};

export default PagesContextProvider;
