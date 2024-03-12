import React from "react";
import MessageIcon from "@mui/icons-material/Message";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
import { Col, Row } from "react-bootstrap";
import Badge from '@mui/material-next/Badge';

const AppsPanel = ({setState}:{setState: (value: boolean) => void}) => {
  return (
    <div className="AppsPanel">
      <Row>
        <Col className="iconBox" onClick={()=>{setState(false)}}>
        <Badge badgeContent={4} color="primary">
          <MessageIcon className="icon" />
        </Badge>
        </Col>
        <Col className="iconBox">
          <FlipCameraAndroidIcon className="icon" />
        </Col>
      </Row>
    </div>
  );
};

export default AppsPanel;
