import React from "react";
// import Images from "../assets/img/cat.jpg";
import {
  Container,
  Nav,
  Navbar,
  Button,
  Col,
  Form,
  Row,

} from "react-bootstrap";

const Header = () => {
  return (
    <div >
      <section className="header ">
        <Navbar expand="lg" className="bg-body-tertiary pt-4">
          <Container>
            <Navbar.Brand href="#home" className="logo-header ">
              LOGO
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav " className="ms-0 ms-md-5 ">
              <Nav className="me-auto">
                <Form inline className=" t-50">
                  <Row>
                    <Col xs="auto" className="pe-0 ">
                      <Form.Control
                        type="text"
                        placeholder="HEALTHY PETS       Search for ..."
                        className="search-header"
                      />
                    </Col>
                    <Col xs="auto" className="ps-2">
                      <Button type="submit" className="btn-search-header">
                        <i className="fa-regular fa-circle"></i>
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Brand href="#home">
              <button
                type="submit"
                className="btn-signIn-header border border-0"
              >
                SIGN IN
              </button>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </section>

    </div>
  );
};
export default Header;
