import React, { useContext, useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { detectSystem } from "./helpers/detectSys";
import MainNav from "./components/Nav";
import Home from "./pages/Home";
import { PagesContext } from "./pages/PagesContext";
import backgroundOP1 from "./assets/backgroundOP1.jpg";
import bgOP2 from "./assets/bgOP2.jpg";
import Galery from "./pages/Galery";
import Offer from "./pages/Offer";
import Contact from "./pages/Contact";
import GaleryPhotos from "./pages/Galery/GaleryPhotos";
import GaleryVideos from "./pages/Galery/GaleryVideos";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import MediaContentDisplayer from "./pages/Galery/MediaContentDisplayer";
import { GaleryContext } from "./pages/Galery/GaleryContext";
import TopButton from "./components/TopButton";
import AdminPanel from "./pages/AdminPanel/AdminComponents/AdminPanel";

function App() {
  const isMobile = detectSystem();
  const [scrollState, setScrollState] = useState<number>(0);
  const pagesContext = useContext(PagesContext);
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const galeryContext = useContext(GaleryContext);

  useEffect(() => {
    galeryContext?.changeScroll &&
      window.scrollTo(0, galeryContext?.actualScroll as number);
    galeryContext?.setChangeScroll(false);
  }, [galeryContext?.changeScroll]);

  useEffect(() => {
    if (pagesContext) {
      if (backgroundRef.current) {
        if (pagesContext.totalScroll > 520) {
          backgroundRef.current.style.backgroundImage = `url(${backgroundOP1})`;
        } else {
          backgroundRef.current.style.backgroundImage = `url(${bgOP2})`;
        }
      }
    }
  }, [pagesContext, backgroundRef]);

  return (
    <div className="App">
      <div className="background-box" ref={backgroundRef}></div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="page-space">
                <MainNav />
                <Home />
                <Galery />
                <Offer />
                <Contact />
              </div>
            }
          />
          <Route path="/galeryphotos" element={<GaleryPhotos />} />
          <Route path="/galeryvideos" element={<GaleryVideos />} />
        </Routes>
      </BrowserRouter>
      {pagesContext?.totalScroll && pagesContext?.totalScroll > 700 && (
        <TopButton />
      )}

      {/* <AdminPanel /> */}
    </div>
  );
}

export default App;
