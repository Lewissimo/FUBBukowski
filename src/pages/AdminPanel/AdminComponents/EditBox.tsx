import React, { useState } from "react";
import { Button, Card, Col, Form, ListGroup, Row } from "react-bootstrap";
import EditBoxContactEdit from "./EditBoxContactEdit";
const EditBox = () => {
    const [passwordData, setPasswordData] = useState({
        oldPass: '',
        newPass: '',
        newPassComfirm: ''
    });
    const [editPhone, setEditPhone] = useState(true);
    const [editEmail, setEditEmail] = useState(false);
    const [editFacebookLink, setEditFacebookLink] = useState(false);
    const [editInstagramLink, setEditInstagramLink] = useState(false);

    const handleSubmitPassword = () => {

    }
  return (
    <Row className="EditBox">
      <Col className="EditPassword" xs={12} lg={6}>
        <Card className="EditFormBox">
          <Card.Body>
            <h2 className="text-center">Zmień hasło</h2>
            <Form onSubmit={handleSubmitPassword}>
              <Form.Group controlId="formOldPass">
                <Form.Label>Stare hasło</Form.Label>
                <Form.Control
                  type="password"
                  name="oldPass"
                  value={passwordData.oldPass}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                    const { name, value } = e.target;
                    setPasswordData(prevState => ({
                      ...prevState,
                      [name]: value
                    }));
                  }}
                />
              </Form.Group>
              <Form.Group controlId="newPass">
                <Form.Label>Nowe Hasło</Form.Label>
                <Form.Control
                  type="password"
                  name="newPass"
                  value={passwordData.oldPass}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                    const { name, value } = e.target;
                    setPasswordData(prevState => ({
                      ...prevState,
                      [name]: value
                    }));
                  }}
                />
              </Form.Group>
              <Form.Group controlId="newPassConfirm">
                <Form.Label>Powtórz nowe hasło</Form.Label>
                <Form.Control
                  type="password"
                  name="newPassConfirm"
                  value={passwordData.oldPass}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                    const { name, value } = e.target;
                    setPasswordData(prevState => ({
                      ...prevState,
                      [name]: value
                    }));
                  }}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                    Zmień hasło
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Col className="EditContactData" xs={12} lg={6}>
      <Card className="EditFormBox">
          <Card.Body>
            <h2 className="text-center">Zmień hasło</h2>
        <ListGroup>
            <ListGroup.Item>Numer: 
            <EditBoxContactEdit name="numer" value="515135106"/>
            </ListGroup.Item>
            <ListGroup.Item>Email:
                <EditBoxContactEdit name="email" value="kml.lewinski3@gmail.com"/>
            </ListGroup.Item>
            <ListGroup.Item>
                Facebook:
                <EditBoxContactEdit name="instagram" value="link"/>
            </ListGroup.Item>
            <ListGroup.Item>
                Instagram:
                <EditBoxContactEdit name="facebook" value="link"/>
            </ListGroup.Item>
        </ListGroup>
        </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default EditBox;
