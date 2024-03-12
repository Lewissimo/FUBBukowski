import React, { ReactNode, createContext, useState } from "react";

type galeryContextType = {
  state: number;
  setState: (value: number) => void;
  initialSlide: number;
  setInitialSlide: (value: number) => void;
  label: string | null;
  setLabel: (value: string) => void;
  actualScroll: number | undefined;
  setActualScroll: (value: number | undefined) => void;
  setChangeScroll: (value: boolean) => void;
  changeScroll: boolean;
};

export const GaleryContext = createContext<galeryContextType | undefined>(
  undefined
);

const GaleryContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(0);
  const [initialSlide, setInitialSlide] = useState(0);
  const [label, setLabel] = useState<string | null>(null);
  const [changeScroll, setChangeScroll] = useState(false);
  const [actualScroll, setActualScroll] = useState<number | undefined>(
    undefined
  );
  const value = {
    state,
    setState,
    initialSlide,
    setInitialSlide,
    label,
    setLabel,
    actualScroll,
    setActualScroll,
    changeScroll,
    setChangeScroll,
  };
  return (
    <GaleryContext.Provider value={value}>{children}</GaleryContext.Provider>
  );
};

export default GaleryContextProvider;
