import React, { useContext, useEffect, useRef, useState } from "react";
import marianPhoto from "../../assets/marian.png";
import { PagesContext } from "../PagesContext";
import Article from "./Article";
import { FirebaseDatabase } from "../../firebase/FirebaseContext";
import { Skeleton } from "@mui/material";

const Introducing = () => {
  const pagesContext = useContext(PagesContext);
  const firebaseContext = useContext(FirebaseDatabase);
  const homeText =
    "Witaj na mojej stronie! Jestem profesjonalnym budowlańcem z ponad 30-letnim doświadczeniem w branży budowlanej. Moja kariera rozciąga się przez trzy różne kraje: Polskę, Niemcy i Szwecję, co pozwoliło mi zgromadzić szeroką wiedzę i umiejętności, dzięki którym mogę sprostać każdemu wyzwaniu budowlanemu.";
  const photoBox = useRef<HTMLDivElement | null>(null);
  const introductionRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const loadImage = async () => {
    if (firebaseContext?.aboutData?.photoData.path) {
      setLoading(true);
      try {
        setLoading(false);
      } catch (error) {
        console.error("Błąd podczas ładowania obrazu", error);
        setLoading(false);
      }
    }
  };

  loadImage();
}, [firebaseContext?.aboutData?.photoData.path]);


  useEffect(() => {
    if (pagesContext && photoBox.current && introductionRef.current) {
      const photoBoxPosition = photoBox.current.getBoundingClientRect().top;
      const introductionPosition =
        introductionRef.current.getBoundingClientRect().top;
      if (photoBoxPosition > introductionPosition + 40) {
        photoBox.current.style.opacity = "0";
      } else {
        photoBox.current.style.opacity = "1";
      }
    }
  }, [pagesContext]);

  return (
    <div className="Introducing" id="home" ref={introductionRef}>
      <div className="PhotoBox" ref={photoBox}>
        {loading ? (
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width={256}
            height={300}
            className="loadingImageHome"
          />
        ) : (
          <img
            src={firebaseContext?.aboutData?.photoData.path}
            width={256}
            alt="photoErr"
          />
        )}
      </div>

      <Article />
    </div>
  );
};

export default Introducing;
