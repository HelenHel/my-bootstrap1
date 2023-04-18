import React from 'react'
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import "../App.css"

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><Link to={'/'}>A&B</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to={'/'}>ГЛАВНАЯ</Link></Nav.Link>
            <Nav.Link><Link to={'/favorites'}>ИЗБРАННОЕ</Link></Nav.Link>
            <Nav.Link><Link to={'/cart'}>КОРЗИНА</Link></Nav.Link>
            <Nav.Link><Link to={'/description'}>ОПИСАНИЕ</Link></Nav.Link>
          </Nav>
          <Nav>
            <Button variant="primary">Войти</Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header