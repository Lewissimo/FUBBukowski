import React, { Suspense, useContext, useEffect, useState } from "react";
import photo from "./photos/20240227_155940.jpg";
import { Col, Row } from "react-bootstrap";
import { GaleryContext } from "./GaleryContext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CircularProgress from "@mui/material/CircularProgress";
import { Skeleton } from "@mui/material";
import { mediaElement } from "../../firebase/FirebaseContext";
import Image from "./Image";

const MediaContentDisplayer = ({
  media,
  label,
}: {
  media: mediaElement[] | undefined;
  label: string;
}) => {
  const galeryContext = useContext(GaleryContext);
  const [thumbnails, setThumbnails] = useState<string[]>([]);
  const captureImageAtTime = async (
    videoUrl: string,
    frameTime: number,
    index: number
  ) => {
    const videoElement = document.createElement("video");
    videoElement.crossOrigin = "anonymous";
    videoElement.src = videoUrl;
    videoElement.preload = "metadata";

    videoElement.addEventListener("loadedmetadata", () => {
      videoElement.currentTime = frameTime;
    });

    videoElement.addEventListener("seeked", async () => {
      const canvas = document.createElement("canvas");
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;
      const context = canvas.getContext("2d");
      context?.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

      const imageUrl = canvas.toDataURL("image/png");
      setThumbnails((prev) => {
        const newThumbnails = [...prev];
        newThumbnails[index] = imageUrl;
        return newThumbnails;
      });

      videoElement.remove();
      canvas.remove();
    });

    videoElement.load();
  };

  useEffect(() => {
    if (media) {
      media.forEach((videoUrl, index) => {
        if (!thumbnails[index]) {
          captureImageAtTime(videoUrl.url, 30, index);
        }
      });
    }
  }, [media, label]);

  return (
    <Row className="showBoxAnim">
      {label === "photos"
        ? media?.map((element, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              lg={4}
              xl={3}
              className="mb-3 mediaBox">
              <span
                onClick={() => {
                  galeryContext?.setInitialSlide(index);
                  galeryContext?.setState(1);
                }}>
                <Image path={element.url} />
              </span>
            </Col>
          ))
        : media?.map((element, index) => {
            return (
              <Col
                key={index}
                xs={12}
                sm={6}
                lg={4}
                xl={3}
                className="mb-3 mediaBox">
                <span
                  onClick={() => {
                    galeryContext?.setInitialSlide(index);
                    galeryContext?.setState(1);
                  }}>
                  <Image path={thumbnails[index]} />
                </span>

                <PlayArrowIcon
                  className="playButton"
                  onClick={() => {
                    galeryContext?.setInitialSlide(index);
                    galeryContext?.setState(1);
                  }}
                />
              </Col>
            );
          })}
    </Row>
  );
};

export default MediaContentDisplayer;
