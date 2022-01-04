import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import photos1 from '../images/6583.jpg'
import video from '../images/mixkit-racing-cyclists-in-the-street-1635.mp4'

export default function About() {
    return (
        <div>
            <Container>
                <Row>
                    <br />
                    <h1>The Bike</h1>
                    <Col>
                        <img src={photos1} className="imagen" alt=""></img>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>EL SERVICIO AL CLIENTE ES LO PRIMERO</h3>
                        Desde el principio, nuestro servicio al cliente nos ha diferenciado de todos los demás. Nuestro personal es amable, conocedor y apasionado por el ciclismo. El departamento de servicio de Bike Way puede encargarse de todo, desde cambios de cámaras y neumáticos hasta revisiones de la suspensión y construcciones personalizadas.
                    </Col>
                    <Col xs={5}>
                        <h3>¡El Coffe Lounge Abrirá Pronto!</h3>
                        ¡Ven a tomar una cerveza y pasa el rato con nosotros! Nos complacerá poder ofrecer a nuestros huéspedes una pequeña pero deliciosa selección de bebidas y café.
                    </Col>
                    <Col>
                        <video width='640' height='480' autoPlay controls loop >
                            <source src={video} type='video/mp4' />
                            <source src='movie.webm' type='video/webm' />
                        </video>
                    </Col>
                    <Col xs={5}>
                        <h1>¡Abriremos Pronto!</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
