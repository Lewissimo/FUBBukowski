import React, { useContext, useEffect, useRef } from "react";
import Note from "./Offer/Note";
import "./Offer/Offer.scss";
import { FirebaseDatabase } from "../firebase/FirebaseContext";
export interface NoteInterface {
  title: string;
  text: string;
}
const Offer = () => {
  const firebaseContext = useContext(FirebaseDatabase);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const noteRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (boxRef.current) {
        const top = boxRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (noteRefs.current) {
          if (top < windowHeight - 600) {
            noteRefs.current.forEach((element, index) => {
              element?.classList.add("showBoxFromDown");
            });
          } else {
            noteRefs.current.forEach((element, index) => {
              element?.classList.remove("showBoxFromDown");
            });
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="Offer row" id="offer" style={{ margin: 0 }} ref={boxRef}>
      <span className="title col-12 titleLightBG">
        {firebaseContext?.offerData?.title}
      </span>
      {firebaseContext?.offerData?.offerElements.map((element, index) => (
        <span
          className="col-12 col-sm-6 col-lg-4 NoteBox showBoxFromDown"
          key={element.id}
          ref={(el) => (noteRefs.current[index] = el)}>
          <Note value={{ title: element.title, text: element.entry }} />
        </span>
      ))}
    </div>
  );
};

export default Offer;
