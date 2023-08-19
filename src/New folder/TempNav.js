import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './TempNav.css'


function TempNav(){
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container >
        <Navbar.Brand href="#home" className='text-light'> <h3>ARK FACTORY</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="m-auto ">
          <Nav.Link href="/home" className='text-light'><h6 className='navbar'>HOME</h6></Nav.Link>
          <Nav.Link href="/" className='text-light'><h6 className='navbar'>SERVICES</h6></Nav.Link>
          <Nav.Link href="/" className='text-light'><h6 className='navbar'>FREQUENTLY ASKED QUESTIONS</h6></Nav.Link>
          <Nav.Link href="/" className='text-light'><h6 className='navbar'>ABOUT</h6></Nav.Link>
          <Nav.Link href="/" className='text-light'><h6 className='navbar'>CONTACT US</h6></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TempNav;