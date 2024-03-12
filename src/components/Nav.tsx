import React, {useContext, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import './Nav.scss'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Logo from './Logo';
import { FirebaseDatabase } from '../firebase/FirebaseContext';

const MainNav = () => {
  const [expanded, setExpanded] = useState(false);
  const firebaseContext = useContext(FirebaseDatabase);
  return (
    <Navbar className='MainNav' id='nav' bg="light" expand="lg">
    <Navbar.Brand href="#about">
      <Logo />
    </Navbar.Brand>
    <div className='contactNavBox'>
      <a href={`tel:${firebaseContext?.contactData?.phone}`}><LocalPhoneIcon /></a>
      <a href={`mailto:${firebaseContext?.contactData?.mail}`}><EmailIcon /></a>
    </div>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#top">Strona główna</Nav.Link>
        <Nav.Link href="#about">O firmie</Nav.Link>
        <Nav.Link href="#galery">Realizacje</Nav.Link>
        <Nav.Link href="#offer">Oferta</Nav.Link>
        <Nav.Link href="#contact">Kontakt</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default MainNav