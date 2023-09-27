
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function FooterMenu() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
       
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="d-flex justify-content-end ">
                  <Nav.Link href="#home" className="fs-4 text-black">Home</Nav.Link>
                  <Nav.Link href="#link" className="fs-4 text-black">SHOP</Nav.Link>
                  <Nav.Link href="#link" className="fs-4 text-black">MEDIA</Nav.Link>
                  <Nav.Link href="#link" className="fs-4 text-black">CONTACT US</Nav.Link>
                  <Nav.Link href="#link" className="fs-4 text-black">SIGN IN</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default FooterMenu;
