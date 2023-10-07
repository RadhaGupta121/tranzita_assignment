import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import img1 from './tranzita.jpeg';

function MyNavbar() {

  return (
    <div style={{marginBottom:"3rem"}}>
    <Navbar expand="lg" className="bg-body-tertiary nav"  >
      <Container fluid>
        <Navbar.Brand href="/"><img src={img1} style={{height:"4rem",width:"5rem"}}/></Navbar.Brand>
      <Navbar.Brand href="/"> <i className='fa fa-home fa-3x' ></i></Navbar.Brand>
      </Container>
    </Navbar>
    </div>
  );
}

export default MyNavbar;

