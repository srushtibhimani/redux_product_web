import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BiSearch} from 'react-icons/bi';
import {SlHandbag} from 'react-icons/sl';
const header = () => {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container className='py-3'>
        <Navbar.Brand href="#" className='mx-5'><img src={require('./images/logo.webp')}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#" className='menu_margin me-3 text-dark fw-bold'>Home</Nav.Link>
            <Nav.Link href="#" className='me-3 text-dark fw-bold'>Men</Nav.Link>
            <Nav.Link href="#" className='me-3 text-dark fw-bold'>Accessories</Nav.Link>
            <Nav.Link href="#" className='me-3 text-dark fw-bold'> Women</Nav.Link>
            <Nav.Link href="#" className='me-3 text-dark fw-bold'> BLog</Nav.Link>
            <Nav.Link href="#" className='me-3 text-dark fw-bold'> Pages</Nav.Link>
          </Nav>

          <BiSearch className='me-5 bag_size text-dark'></BiSearch>
          <SlHandbag className='me-5 bag_size text-dark' ></SlHandbag>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default header
