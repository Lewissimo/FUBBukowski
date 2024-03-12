import React, { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";

const Image = ({ path }: { path: string }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadImage = async () => {
      if (path) {
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
  }, [path]);
  return(
  <>
    {loading ? (
      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        variant="rectangular"
        width={256}
        height={400}
        className="loadingImage"
      />
    ) : (
      <img className="img-fluid mediaDisp" src={path} alt="" />
    )}
  </>)
};

export default Image;
