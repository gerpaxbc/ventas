import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container, Form } from 'react-bootstrap';
import CartProduct from './CartProduct'
import styles from './Cart.module.css'
import { CartRepository } from '../data/CartData'
 
export default function Cart() {
    const cart = CartRepository();
    const [cartState, setCartState] = useState([])
    const formato = { style: 'currency', currency: 'USD' };
    const nformato = new Intl.NumberFormat('en-US', formato);

    let datos=''
    let token = ''
    let isLoged =false
    let total=0
    let totalprod=0

    try{
        token = window.sessionStorage.getItem('token')
        if (token){
            datos = JSON.parse(token);
            isLoged = true
        }
    }
    catch (err){
        
    }

    useEffect(() => {
        cart.getCart(datos.email)
          .then(setCartState)
      }, [])

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <ul className={styles.bikesGrid}>
                    
                            {cartState.map( (bike)=> (
                                total = total + bike.precio,
                                totalprod = totalprod + bike.cantidad,
                                <CartProduct key={bike._id} bike={bike} />
                            ))}
                        </ul>
                    </Col>
                    <Col >
                        <div className={styles.formaPago}>
                            <h2>Detalle de  la Compra: {nformato.format(total)}</h2>  
                            <h3>Cantidad de productos: {totalprod}</h3>     
                            <br /><br />                  
                            <Form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----" />
                                <input type="image" src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea." />
                                <img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1" />
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

