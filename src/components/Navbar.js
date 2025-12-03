import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';


function NavbarPrincipal() {
  return (
    <Navbar expand="lg" className="navbar-personalizado" style={{textShadow:'2px 2px 8px rgba(0,0,0,0.6)'}} >
      <Container>
        <Navbar.Brand href="#home" style={{textAlign:'left'}}>
          <img src='/assets/HelioAndes.png' style={{ width: '15%',textAlign:'center'}}/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{fontSize:'1.2rem'}}>Inicio</Nav.Link>
            <Nav.Link href="#sectionServicios" style={{fontSize:'1.2rem'}}>Servicios</Nav.Link>
            <Nav.Link href="#sectionSoluciones" style={{fontSize:'1.2rem'}}>Soluciones</Nav.Link>  
            <Nav.Link href="#demo_calculadora" style={{fontSize:'1.2rem'}}>DEMO</Nav.Link>  
            <Nav.Link href="#sectionPlanes" style={{fontSize:'1.2rem'}}>Planes</Nav.Link>  
            <Nav.Link href="#sectionTestimonios" style={{fontSize:'1.2rem'}}>Testimonios</Nav.Link>  
            <Nav.Link href="#sectionFaq" style={{fontSize:'1.2rem'}}>FAQ</Nav.Link>  
            <Nav.Link href="#sectionContacto" style={{fontSize:'1.2rem'}}>Contacto</Nav.Link>  

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPrincipal;