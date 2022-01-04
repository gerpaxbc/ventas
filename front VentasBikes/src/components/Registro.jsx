import React, { useState } from 'react'
import Form  from 'react-bootstrap/Form'
import Button  from 'react-bootstrap/Button'
import { useNavigate  } from 'react-router-dom';
import axios from 'axios'
import Alert from 'react-bootstrap/Alert'
import video from '../images/mixkit-race-cyclists-in-the-street-1638.mp4'

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

        if (formData.password !== formData.passwordConf){
            setIsError(true)
        } else {
            axios.post(`http://localhost:4000/users/`, 
            { // this is the body
                nombre: formData.nombre, 
                direccion: formData.direccion, 
                estado: formData.estado, 
                celular: formData.celular, 
                email: formData.email, 
                password: formData.password, 
                comentarios: formData.comentarios
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
                        <h3>Registrese para recibir información, Rodadas, Promociones y Eventos</h3>
                        
                        <Form onSubmit={e => handleSubmit(e)}>
                            <Form.Group className="mb-3">
                                <Form.Control 
                                    onChange={e => handleOnChange(e)}
                                    name='nombre' 
                                    type="text" 
                                    placeholder="Nombre" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control 
                                    onChange={e => handleOnChange(e)}
                                    name='direccion' 
                                    type="text" 
                                    placeholder="Dirección" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                            </Form.Group>   
                            <Form.Group className="mb-3">
                                <Form.Control 
                                    onChange={e => handleOnChange(e)}
                                    name='estado' 
                                    type="text" 
                                    placeholder="Estado" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control 
                                    onChange={e => handleOnChange(e)}
                                    name='celular' 
                                    type="text" 
                                    placeholder="Celular" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control 
                                    onChange={e => handleOnChange(e)}
                                    name='email' 
                                    type="email" 
                                    placeholder="name@example.com" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control 
                                    onChange={e => handleOnChange(e)}
                                    name='password' 
                                    type="password" 
                                    placeholder="Password"
                                    autoComplete="on" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control 
                                    onChange={e => handleOnChange(e)}
                                    name='passwordConf' 
                                    type="password" 
                                    placeholder="Confirmar Password" 
                                    autoComplete="on"/>
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control 
                                    onChange={e => handleOnChange(e)}
                                    name='comentarios' 
                                    type="text" 
                                    placeholder="comentarios" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
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
