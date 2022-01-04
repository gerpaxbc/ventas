import React, { useState } from 'react'
import Form  from 'react-bootstrap/Form'
import Button  from 'react-bootstrap/Button'
import styles from './Login.module.css'
import axios from 'axios'
import Alert from 'react-bootstrap/Alert'
import { useNavigate  } from 'react-router-dom';

export default function Login() {
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

        axios.post(`http://localhost:4000/users/email`, 
        { // this is the body
        email: formData.email, 
        password: formData.password
        },
        {
            headers: {
            'content-type': 'application/json'
            }
        })
        .then( response => {
            window.sessionStorage.setItem('token', JSON.stringify(response.data))
            
            navigate('/');
        })
        .catch (err =>{
            setIsError(true)    
        })
    }

    return (
        <div className={styles.loginPage}>
            <Form onSubmit={e => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        onChange={e => handleOnChange(e)}
                        name='email' 
                        type="email" 
                        placeholder="name@example.com" />
                    <Form.Text className="text-muted">
                    Nunca compartiremos su correo electrónico
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        onChange={e => handleOnChange(e)}
                        name='password' 
                        type="password" 
                        placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
                <br />
                <br />
                {isError && (
                    <Alert variant='warning'>
                        Usuario o contraseña no válidos
                    </Alert>
                    
                )}
            </Form>    
        </div>
    )
}
