import React from 'react'
import styles from './CartProduct.module.css'
import { Button, Row, Col } from 'react-bootstrap';
import { CartRepository } from '../data/CartData'
import { useNavigate  } from 'react-router-dom';

export default function CartProduct({bike}) {
    const cart = CartRepository();
    const bici =  bike.path
    let Total = 0
    const formato = { style: 'currency', currency: 'USD' };
    const nformato = new Intl.NumberFormat('en-US', formato);
    const navigate = useNavigate();

    function calcula(x,y){
        let v1 = x
        let v2 = y

        return x*y
    }

    function handleClick(id) {
        console.log(id.target.id)
        cart.deleteProduct(id.target.id)
        navigate('/');
    }

    return <li className={styles.productCard}>
        <img width={230} height={230} className={styles.productImage} src={bici} alt={bike.nombre} />
        
        <div>Descripción: {bike.nombre}</div> 
        <div>Precio: {bike.precio}</div>
        <div>Cantidad: {bike.cantidad}</div>
        <div>
            <h2>
                Total: {nformato.format(calcula(bike.precio,bike.cantidad))}
            </h2>
        </div>
        <div>
            <Col xs="auto" className="my-1">
                <Button type="submit" id={bike._id} onClick={e => handleClick(e)}>Eliminar</Button>
            </Col>
        </div>
    </li>
}