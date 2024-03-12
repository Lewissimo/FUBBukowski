import React, { useState } from "react";
import Statistic from "./Statistic";
import AppsPanel from "./AppsPanel";
import EditBox from "./EditBox";
import "../Admin.scss";
import MessagesComponent from "./MessagesPanel/MessagesComponent";
const AdminPanel = () => {
  const [state, setState] = useState(false);
  return (
    <div className="AdminPanel">
      {state ? (
        <>
          <Statistic />
          <EditBox />
          <AppsPanel setState={setState}/>
        </>
      ) : (
        <MessagesComponent setState={setState}/>
      )}
    </div>
  );
};

export default AdminPanel;
