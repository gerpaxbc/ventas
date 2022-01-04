import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Form, Button } from 'react-bootstrap';

export default function NavBar() {
    let datos=''
    let token = ''
    let isLoged =false
    try{
        token = window.sessionStorage.getItem('token')
        if (token){
            datos = JSON.parse(token);
            isLoged = true
        }
    }
    catch (err){
        
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">The Bike</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavDropdown title="Tienda" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/Bicis">Bicicletas</NavDropdown.Item>
                        <NavDropdown.Item href="/Refacciones">Refacciones</NavDropdown.Item>
                        <NavDropdown.Item href="/Llantas">Llantas/Cámaras</NavDropdown.Item>
                        <NavDropdown.Item href="/Accesorios">Accesorios</NavDropdown.Item>
                        <NavDropdown.Item href="/Ropa">Ropa</NavDropdown.Item>
                        <NavDropdown.Item href="/Cascos">Cascos</NavDropdown.Item>
                        <NavDropdown.Divider />
                        {isLoged && (
                            <NavDropdown.Item href="/Newproduct">
                                Agregar productos
                            </NavDropdown.Item>
                        )}
                        </NavDropdown>
                        
                        <Nav.Link href="/Servicio">Servicio</Nav.Link>
                        <Nav.Link href="/About">Nosotros</Nav.Link>
                        <Nav.Link href="/Contacto">Contacto</Nav.Link>
                        
                    </Nav>
                    {!isLoged && (
                        <Form className="d-flex">
                            <Button href="/Login" variant="outline-success">Login</Button>
                        </Form>)}
                    {isLoged && (
                        <Form className="d-flex">
                            <Button href="/Logout" variant="outline-success">Logout</Button>
                        </Form>)}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
