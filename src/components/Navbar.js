import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar(props) {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className={`mb-3 navbar-${props.mode} bg-${props.mode}`}>
          <Container fluid>
            <Navbar.Brand href="#"><b>{props.title}</b></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                {props.title}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="primary">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
                <Form.Check 
                    type="switch"
                    id="custom-switch"
                    className={`text-${props.light} mx-3`}
                    label={`${props.light} Mode`}
                    onClick={props.toggleMode}
                  />
                 
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;

