import React, { useState } from 'react'
import Form  from 'react-bootstrap/Form'
import Button  from 'react-bootstrap/Button'
import { useNavigate  } from 'react-router-dom';
import axios from 'axios'
import Alert from 'react-bootstrap/Alert'
import video from '../images/mixkit-two-cyclists-biking-outdoors-1637.mp4'

export default function Registro() {
    const [formData, setFormData] = useState({})
    const [isError, setIsError] = useState(false)
    const navigate = useNavigate();
    
    const handleOnChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        evt.stopPropagation()
        setIsError(false)

        console.log(formData.categoria)

        if (formData.categoria === ''){
            setIsError(true)
        } else {
            axios.post(`http://localhost:4000/products/`, 
            { // this is the body
                nombre: formData.nombre, 
                path: formData.path, 
                precio: formData.precio, 
                existencias: formData.existencias, 
                categoria: formData.categoria, 
            },
            {
                headers: {
                'content-type': 'application/json'
                }
            })
            .then( response => {
                console.log(response)
                navigate('/');
            })
            .catch (err =>{
                setIsError(true)    
            })
        }
    }

    return (
        <div>
            <div className="container">
                <main className="container__main">
                    <div className="container__middle">

                        <br /><br />
                        <h3>Nuevo Producto</h3>
                        
                        <Form onSubmit={e => handleSubmit(e)}>
                            <Form.Group className="mb-3">
                                <Form.Control 
                                    onChange={e => handleOnChange(e)}
                                    name='nombre' 
                                    type="text" 
                                    placeholder="Nombre Producto" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control 
                                    onChange={e => handleOnChange(e)}
                                    name='path' 
                                    type="text" 
                                    placeholder="http://path.com/ejemplo.jpg" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                            </Form.Group>   
                            <Form.Group className="mb-3">
                                <Form.Control 
                                    onChange={e => handleOnChange(e)}
                                    name='precio' 
                                    type="number" 
                                    placeholder="Precio" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control 
                                    onChange={e => handleOnChange(e)}
                                    name='existencias' 
                                    type="number" 
                                    placeholder="Existencias" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                            </Form.Group>
                            <Form.Group   className="mb-3" onChange={e => handleOnChange(e)}>
                                <Form.Select name='categoria' aria-label="Default select example">
                                    <option>Tipo de Producto</option>
                                    <option value="bike">Bike</option>
                                    <option value="Helmets">Helmets</option>
                                    <option value="Refacciones">Refacciones</option>
                                    <option value="Accesorios">Accesorios</option>
                                    <option value="Llantas">Llantas</option>
                                    <option value="Ropa">Ropa</option>
                                </Form.Select>
                            </Form.Group>
                            
                            <Button variant="primary"  type="submit">Enviar</Button>
                            {isError && (
                                <Alert variant='warning'>
                                    Las contraseñas no coinciden
                                </Alert>
                                
                            )}
                        </Form>  
                        
                        <br /><br />
                        </div>
                        <div className="container__sep">
                            
                        </div>
                        <div className="container__left">
                            <br /><br />
                            <h1>Ciclismo, un estilo de vida!</h1>
                            <video width='640' height='480' autoPlay controls loop >
                                <source src={video} type='video/mp4' />
                                <source src='movie.webm' type='video/webm' />
                            </video>
                        </div>
                </main>
            </div>      
        </div>
    )
}
