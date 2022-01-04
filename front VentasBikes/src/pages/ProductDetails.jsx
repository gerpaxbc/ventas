import React, { useState, useEffect }   from 'react'
import styles from './ProductDetails.module.css'
import { Form, Button, Row, Col } from 'react-bootstrap';
import { ProductsRepository } from '../data/PraductsData'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';

export default function ProductDetails() {
    const [formData, setFormData] = useState({})
    const products = ProductsRepository();
    const [productsState, setProductsState] = useState([])
    const { productoId } = useParams()
    const navigate = useNavigate();
    const producto = {_id:'', path:'', nombre:'', precio:'', existencias:'', uso:''}
    
    let datos=''
    let token = ''
    let isLoged =false

    const handleOnChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        evt.stopPropagation()
        
        console.log(formData.cantidad)

        if (formData.cantidad === '0' || formData.cantidad === '' ){
            
        } else {
            axios.post(`http://localhost:4000/cart/`, 
            { // this is the body
                email: datos.email,
                id:  producto._id ,
                nombre: producto.nombre,
                path: producto.path,
                precio: producto.precio,
                cantidad: formData.cantidad, 
            },
            {
                headers: {
                'content-type': 'application/json'
                }
            })
            .then( response => {
                navigate('/');
            })
            .catch (err =>{
                
            })
        }
    }
    
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
        products.getProductId(productoId)
        .then(setProductsState)
      }, [])

    try{
        producto._id = productsState[0]._id
        producto.path = productsState[0].path
        producto.nombre = productsState[0].nombre
        producto.precio = productsState[0].precio
        producto.existencias = productsState[0].existencias
    }
    catch{

    }
    
    return (
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.productImage}`} src={producto.path} alt={producto.nombre} />
            <div className={`${styles.col} ${styles.productDetail}`}>
                <p><strong>Modelo:</strong> {producto.nombre}</p>
                <p><strong>Precio:</strong> {producto.precio}</p>
                <p><strong>Existencias:</strong> {producto.existencias}</p>
                <p><strong>Descripción:</strong>  </p>
                
                <Form className="d-flex" onSubmit={e => handleSubmit(e)}>
                    <Row className="align-items-center">
                        <Col xs="auto" className="my-1">
                            <Form.Label
                                className="me-sm-2"
                                htmlFor="inlineFormCustomSelect"
                                visuallyHidden
                                >
                                Preference
                            </Form.Label>
                            {isLoged && (
                                <Form.Select name='cantidad' className="me-sm-2" id="inlineFormCustomSelect"  onChange={e => handleOnChange(e)}>
                                    <option value="0">Cantidad...</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="4">5</option>
                                </Form.Select>
                            )}
                        </Col>
                        {isLoged && (
                            <Col xs="auto" className="my-1">
                                <Button type="submit">Agregar al Carrito</Button>
                            </Col>
                        )}
                    </Row>
                </Form>
            </div>
        </div>
        
    )
}
