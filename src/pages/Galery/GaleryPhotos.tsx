import React, { useContext, useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MySwiper from "./Swiper";
import image1 from "./photos/20240227_155903.jpg";
import image2 from "./photos/20240227_160034.jpg";
import image3 from "./photos/Screenshot 2024-02-27 at 15.26.35.png";
import image4 from "./photos/20240227_155903.jpg";
import image5 from "./photos/20240227_155940.jpg";
import image6 from "./photos/20240227_160034.jpg";
import "./Galery.scss";
import MediaContentDisplayer from "./MediaContentDisplayer";
import { GaleryContext } from "./GaleryContext";
import { useNavigate } from "react-router-dom";
import { FirebaseDatabase, mediaElement } from "../../firebase/FirebaseContext";
const GaleryPhotos = () => {
  const galeryContext = useContext(GaleryContext);
  const firebaseDatabase = useContext(FirebaseDatabase);
  const navigate = useNavigate();

  const [photos, setPhotos] = useState<mediaElement[] | undefined>(undefined);
  useEffect(() => {
    if(firebaseDatabase?.galeryData?.photos){
      setPhotos(firebaseDatabase?.galeryData.photos);
    }
  }, [firebaseDatabase?.galeryData?.photos]);
  return (
    <div className="MediaContentViewer GaleryPhotos">
      <span
        onClick={() => {
          if (galeryContext?.state === 0) {
            navigate("/#galery", { state: { setScroll: true } });
            galeryContext.setChangeScroll(true);
          } else {
            galeryContext?.setState(galeryContext.state - 1);
          }
        }}>
        <ArrowBackIosIcon /> Powrót
      </span>
      {galeryContext?.state === 0 ? (
        <MediaContentDisplayer media={photos} label="photos" />
      ) : (
        <MySwiper media={photos} label="photos" />
      )}
    </div>
  );
};

export default GaleryPhotos;
