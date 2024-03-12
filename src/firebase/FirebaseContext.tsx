import React, { ReactNode, createContext, useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "./firebase"; // Upewnij się, że zaimportowałeś referencję do Twojego storage

interface aboutType {
  bottomData: { title: string; content: string };
  leftSideData: { content: string; title: string };
  photoData: { path: string };
  rightSideData: { content: string; title: string };
}

enum galeryElementEnum {
  video = "video",
  galery = "galery",
}
export type mediaElement = {
  label: string;
  path: string;
  url: string
};

interface galeryType {
  photos: mediaElement[];
  videos: mediaElement[];
}

interface offerType {
  title: string;
  offerElements: [{ title: string; entry: string; id: string }];
}

interface contactType {
  mail: string;
  phone: string;
  facebookURL: string;
  instagramURL: string;
}

interface dbType {
  aboutData: aboutType | undefined;
  galeryData: galeryType | undefined;
  offerData: offerType | undefined;
  contactData: contactType | undefined
}

const fetchAbout = async () => {
  let docRef = await doc(db, "AboutCollection", "LeftSide");
  const docSnapLeftSide = await getDoc(docRef);
  docRef = await doc(db, "AboutCollection", "RightSide");
  const docSnapRightSide = await getDoc(docRef);
  docRef = await doc(db, "AboutCollection", "bottom");
  const docSnapBottom = await getDoc(docRef);
  docRef = await doc(db, "AboutCollection", "photo");
  const docSnapPhoto = await getDoc(docRef);
  const leftSideData = await docSnapLeftSide.data();
  const rightSideData = await docSnapRightSide.data();
  const bottomData = await docSnapBottom.data();
  const photoDataRes = await docSnapPhoto.data();
  const storageRef = await ref(storage, photoDataRes?.path);
  console.log(photoDataRes?.path);
  const url = await getDownloadURL(storageRef);
  const photoData = {
    path: url
  }
  console.log(photoData);
  if (
    docSnapLeftSide.exists() &&
    docSnapRightSide.exists() &&
    docSnapBottom.exists() &&
    docSnapPhoto.exists()
  ) {
    return {
      leftSideData,
      rightSideData,
      bottomData,
      photoData,
    };
  }
};

const fetchOffer = async () => {
  const offerCollectionRef = collection(db, "Offer");

  const offerCollectionSnapshot = await getDocs(offerCollectionRef);

  const offersOBJ = offerCollectionSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as { title: string; entry: string; value: string }),
  }));

  const offersOBJList = offersOBJ.filter((element) => element.id !== "title");
  const titleOBJ = offersOBJ.find((element) => element.id === "title");

  const offerElements = offersOBJList.map((element) => {
    return {
      id: element.id,
      title: element.title,
      entry: element.entry,
    };
  });
  const result = {
    title: titleOBJ?.value,
    offerElements,
  };
  return result;
};

const fetchGalery = async (): Promise<galeryType> => {
  const galeryCollectionRef = collection(db, "Galery");
  const galeryCollectionSnapShot = await getDocs(galeryCollectionRef);
  
  const promises = galeryCollectionSnapShot.docs.map(async (doc) => {
    const data = doc.data() as mediaElement;
    const storageRef = ref(storage, data.path);
    const url = await getDownloadURL(storageRef);
    return {
      ...data,
      url
    };
  });

  const galeryOBJ = await Promise.all(promises); // Czekamy na wszystkie obietnice

  const photos = galeryOBJ.filter((element) => element.label === "photo");
  const videos = galeryOBJ.filter((element) => element.label === "video");
  return { photos, videos };
};

const fetchContact = async () => {
  const docRef = await doc(db, "ContactDATA", "ContactDATA");
  const docSnapContactData = await getDoc(docRef);
  if (docSnapContactData.exists()) {
    const data = docSnapContactData.data() as contactType;
    const result = {
      instagramURL: data.instagramURL,
      facebookURL: data.facebookURL,
      phone: data.phone,
      mail: data.mail,
    };

    return result;
  }
};

export const FirebaseDatabase = createContext<dbType | undefined>(undefined);

export const FirebaseContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [galeryData, setGaleryData] = useState<galeryType | undefined>(
    undefined
  );
  const [aboutData, setAboutData] = useState<aboutType | undefined>(undefined);
  const [offerData, setOfferData] = useState<offerType | undefined>(undefined);
  const [contactData, setContactData] = useState<contactType | undefined>(
    undefined
  );
  useEffect(() => {
    fetchAbout()
      .then((data) => {
        setAboutData(data as aboutType);
      })
      .catch((err) => console.log(err));

    fetchOffer()
      .then((data) => {
        setOfferData(data as offerType);
      })
      .catch((err) => console.log(err));

    fetchGalery()
      .then((data) => {
        setGaleryData(data as galeryType);
      })
      .catch((err) => console.log(err));

    fetchContact()
      .then((data) => {
        setContactData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const value = {
    aboutData,
    galeryData,
    offerData,
    contactData,
  };
  return (
    <FirebaseDatabase.Provider value={value}>
      {children}
    </FirebaseDatabase.Provider>
  );
};

export default FirebaseContextProvider;
