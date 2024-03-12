import React, {
  MutableRefObject,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import video1 from "./Galery/Highlight001.mp4";
import video2 from "./Galery/Highlight002.mp4";
import video3 from "./Galery/Highlight008.mp4";
import video4 from "./Galery/Highlight004.mp4";
import video5 from "./Galery/Highlight005.mp4";
import video6 from "./Galery/Highlight006.mp4";
import "./Galery/Galery.scss";
import { PagesContext } from "./PagesContext";
import { GaleryContext } from "./Galery/GaleryContext";
import GaleryPhotos from "./Galery/GaleryPhotos";
import GaleryVideos from "./Galery/GaleryVideos";
import { Link } from "react-router-dom";
const Galery = () => {
  const pagesContext = useContext(PagesContext);
  const galeryContext = useContext(GaleryContext);
  const galeryRef = useRef<HTMLDivElement | null>(null);
  const [isMoviesVisible, setIsMoviesVisible] = useState(false);
  useEffect(() => {
    if (galeryRef.current && pagesContext?.showElementValue(galeryRef)) {
      setIsMoviesVisible(true);
    } else {
      setIsMoviesVisible(false);
    }
  }, [pagesContext]);
  return (
    <div
      id="galery"
      ref={galeryRef}
      className="row"
      style={{ justifyContent: "center", margin: 0 }}>
      <Link
        to="/galeryvideos"
        className="galerySide col-12 col-sm-6"
        onClick={() => {
          galeryContext?.setLabel("videos");
          galeryContext?.setState(0);
          galeryContext?.setActualScroll(window.scrollY);
        }}>
        Pokaż galerię filmów
        <LiveTvIcon className="icon" />
      </Link>
      <Link
        to="/galeryphotos"
        className="galerySide col-12 col-sm-6"
        onClick={() => {
          galeryContext?.setLabel("photos");
          galeryContext?.setState(0);
          galeryContext?.setActualScroll(window.scrollY);
        }}>
        Pokaż Galerię zdjęć
        <PhotoLibraryIcon className="icon" />
      </Link>
    </div>
  );
};

export default Galery;
