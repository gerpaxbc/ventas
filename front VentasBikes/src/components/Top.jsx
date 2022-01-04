import React, { useEffect } from 'react'
import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './Top.module.css'
import carrito from '../images/carrito.png'
import logo from '../images/logo.jpg'

export default function Top() {
    let datos = ''
    
    let isLoged =false
    let token = ''
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
        <div className={styles.TopPage}>
            <Container >
            <Row>
                <Col sm>
                    <a href="/">
                        <img width={50} height={50} src={logo}  alt=""></img>
                    </a>
                </Col>
                <Col sm>
                    {isLoged && (
                        <h1>Bienvenido</h1>
                    )}
                </Col>
                <Col sm></Col>
                <Col sm>
                    <div>{datos?.user}</div>    
                    <div>{datos?.email}</div>    
                </Col>
                <Col sm>
                    {isLoged && (
                        <a href="/Cart">
                            <img src={carrito}  alt=""></img>
                        </a>
                    )}
                </Col>
            </Row>
            </Container>    
        </div>
    )
}
