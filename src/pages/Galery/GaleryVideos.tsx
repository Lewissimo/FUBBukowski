import React, { useContext, useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MySwiper from "./Swiper";
import MediaContentDisplayer from "./MediaContentDisplayer";

import "./Galery.scss";
import Swiper from "swiper";
import { GaleryContext } from "./GaleryContext";
import { Navigate, useNavigate } from "react-router-dom";
import { FirebaseDatabase, mediaElement } from "../../firebase/FirebaseContext";

const GaleryVideos = () => {
  const firebaseDatabase = useContext(FirebaseDatabase);
  const galeryContext = useContext(GaleryContext);
  const navigate = useNavigate();

  const [videos, setVideos] = useState<mediaElement[] | undefined>(undefined);
  const [state, setState] = useState(false);
  useEffect(() => {
      setVideos(firebaseDatabase?.galeryData?.videos);
  }, [firebaseDatabase?.galeryData?.videos]);
  return (
    <div className="MediaContentViewer GaleryVideos">
      <span
        onClick={() => {
          if (galeryContext?.state === 0) {
            navigate("/#galery");
            galeryContext.setChangeScroll(true);
          } else {
            galeryContext?.setState(galeryContext.state - 1);
          }
        }}>
        <ArrowBackIosIcon /> Powrót
      </span>
      <span style={galeryContext?.state === 0 ? {display: 'block'} : {display: 'none'}}>
        <MediaContentDisplayer media={videos} label="videos"/>
      </span>
      {
        galeryContext?.state !== 0 && <MySwiper media={videos} label="videos" />
      }
    </div>
  );
};

export default GaleryVideos;
