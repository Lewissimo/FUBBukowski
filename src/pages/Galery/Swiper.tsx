import React, { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import SwiperCore from "swiper";

import image1 from "./photos/20240227_155903.jpg";
import image2 from "./photos/20240227_160034.jpg";
import image3 from "./photos/Screenshot 2024-02-27 at 15.26.35.png";
import image4 from "./photos/20240227_155903.jpg";
import image5 from "./photos/20240227_155940.jpg";
import image6 from "./photos/20240227_160034.jpg";
import "./Galery.scss";
import { GaleryContext } from "./GaleryContext";
import { mediaElement } from "../../firebase/FirebaseContext";
const MySwiper = ({
  media,
  label,
}: {
  media: mediaElement[] | undefined;
  label: string;
}) => {
  const galeryContext = useContext(GaleryContext);
  const [swiper, setSwiper] = useState<SwiperCore | undefined>(undefined);
  const [currentSlide, setCurrentSlide] = useState<number | null>(null);
  const refTab = useRef<(HTMLVideoElement | null)[]>([]);
  useEffect(() => {
    refTab.current.forEach((element, index) => {
      swiper?.activeIndex === index ? element?.play() : element?.pause();
    });
  }, [currentSlide]);
  return (
    <div className="SwiperBox showBoxAnim">
      <Swiper
        onSlideChange={(swiper: SwiperCore) => {
          setCurrentSlide(swiper.activeIndex);
        }}
        spaceBetween={30}
        slidesPerView={1}
        initialSlide={galeryContext?.initialSlide}
        modules={[Navigation]}
        onSwiper={(swiper: SwiperCore) => setSwiper(swiper)}
        navigation>
        {label === "photos"
          ? media?.map((element) => {
              return (
                <SwiperSlide>
                  <img
                    src={element.url}
                    className="swiperDisp"
                    alt="display photo error"
                  />
                </SwiperSlide>
              );
            })
          : media?.map((element, index) => {
              return (
                <SwiperSlide>
                  <video
                    preload="metadata"
                    className="swiperDisp"
                    controls
                    ref={(el) => (refTab.current[index] = el)}
                    key={index}>
                    <source src={element.url} type="video/mp4" />
                    Twoja przeglądarka nie obsługuje tagu video.
                  </video>
                  :
                </SwiperSlide>
              );
            })}
      </Swiper>
    </div>
  );
};

export default MySwiper;
