import React, { useContext, useEffect, useState } from "react";
import { PagesContext } from "../PagesContext";
import { FirebaseDatabase } from "../../firebase/FirebaseContext";

const Article = () => {
  const pagesContext = useContext(PagesContext);
  const firebaseContext = useContext(FirebaseDatabase);
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    
  },[]);
  useEffect(() => {
    if (pagesContext?.totalScroll && pagesContext?.totalScroll > 300) {
      setState(true);
    } else {
      setState(false);
    }
  }, [pagesContext]);
  return (
    <article className="row">
      <div
        className={
          state
            ? "LeftDescription col-12 col-sm-6 showAnimClass"
            : "LeftDescription col-12 col-sm-6"
        }>
        <h3>{firebaseContext?.aboutData?.leftSideData.title}</h3>
        {firebaseContext?.aboutData?.leftSideData.content}
      </div>
      <div
        className={
          state
            ? "RightDescription col-12 col-sm-6 showAnimClass"
            : "RightDescription col-12 col-sm-6"
        }>
        <h3>{firebaseContext?.aboutData?.rightSideData.title}</h3>
        {firebaseContext?.aboutData?.rightSideData.content}
      </div>
      <div
        className={state ? "downSide col-12 showAnimClass" : "downSide col-12"}>
        <h3>{firebaseContext?.aboutData?.bottomData.title}</h3>
        {firebaseContext?.aboutData?.bottomData.content}
        <a href="#offer">oferta</a>
      </div>
    </article>
  );
};

export default Article;
