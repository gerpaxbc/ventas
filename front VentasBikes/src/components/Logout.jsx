import React, { useState } from 'react'
import Form  from 'react-bootstrap/Form'
import Button  from 'react-bootstrap/Button'
import styles from './Logout.module.css'

export default function Login() {
    function handleClick() {
        window.sessionStorage.removeItem('token')
      }

    return (
        <div className={styles.logoutPage}>
            <Form >
                <h1>The Bike</h1>
                <h2>Nos vemos pronto... </h2>
                <Button variant="primary" onClick={handleClick()}  type="submit" href='/'>
                    Logout
                </Button>
            </Form>    
        </div>
    )
}
