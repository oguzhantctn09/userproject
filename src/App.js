import React, {useState} from 'react';
import './App.css';
import CreateUser from './components/CreateUser';
import {Row, Col, Container, Modal, Button, Navbar, NavDropdown, Nav} from "react-bootstrap";
import UserList from './components/UserList';
import 'react-slideshow-image/dist/styles.css'
import Cards from './components/Cards'
import Footer from './components/Footer'
import WhoAreWe from './components/WhoAreWe';
import { PersonPlus } from 'react-bootstrap-icons';

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div className="App">
      {/* NAVBAR */}
      <Navbar style={{cursor: 'pointer'}} bg="dark" variant="dark" expand="lg"> {/* expand cheeseburger menu sağlıyor */}
        <Container> 
        <Navbar.Brand href="#home">
        <img
          alt=""
          src= '/images/logo2.svg'
          width="90"
          height="40"
          className="d-inline-block align-top"
      />{' '}
      Kullanıcı Giriş Demosu
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Anasayfa</Nav.Link>
              <Nav.Link onClick={handleShow}>Yeni Kullanıcı</Nav.Link>
              <NavDropdown title="Kullanıcı İşlemleri" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleShow}>Kaydol</NavDropdown.Item>
                <NavDropdown.Item href="#home">Giriş Yap</NavDropdown.Item>
                <NavDropdown.Item href="#home">Kullanıcı Listesi</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://www.primeit.com.tr/tr/">İletişim</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Biz Kimiz Bloğu */}
      <Container>
      <Col>
            <WhoAreWe />
          </Col>
          {/* Cards */}
          <Row style={{marginTop:'60px'}}>
            <Col><Cards className="mt-5"/></Col>
            <Col><Cards className="mt-5"/></Col>
            <Col><Cards className="mt-5"/></Col>
          </Row>
        
        <Row className="justify-content-md-center">

          <Col>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header >
                <Modal.Title>Kullanıcı Ekle</Modal.Title>
                <Button onClick={handleClose}> X </Button>
              </Modal.Header>

              <Modal.Body>
              <CreateUser />
              </Modal.Body>

              <Modal.Footer>
                <Button onClick={handleClose} variant="secondary">Close</Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
      {/* Kullanıcı Listesi Bloğu */}
      <Container  style={{marginTop:'100px'}}>
        <h1 className="mt-8">Kullanıcı Listesi</h1>
        <UserList />
        
      </Container>
      <Container>
        <Button className="mb-5 text-white" variant="warning" style={{fontSize: 24}} onClick={handleShow}> Kullanıcı Ekle <PersonPlus/> </Button>
      </Container>
      <Footer />
    </div>);
};

export default App;
