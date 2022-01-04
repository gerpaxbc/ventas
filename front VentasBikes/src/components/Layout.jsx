import React from 'react'
import fondo from '../images/fondo.jpg'
import parked from '../images/parked.jpg'
import woman from '../images/woman.jpg'
import photos2 from '../images/photos2.jpg'

import bikes from '../imagesbikes/bianchi-arcadex-gr-x600-386465-1.jpg'
import helmet from '../imageshel/scott-spunto-kid-cpsc-helmet-384159-12.jpg'
import ropa from '../imagesclo/pearl-izumi-mens-cargo-liner-shorts-349385-1.jpg'
import refacciones from '../images/h4.png'

import { Form, Button } from 'react-bootstrap';

export default function Layout() {
    return (
        <div>
            <div className="container">
                <main className="container__main">
                    <div className="container__left">
                        <h1>Ciclismo, un estilo de vida!</h1><br /><br />
                        <h1>Ven a tomar café con nosotros..!</h1>
                        Estamos muy felicies de anunciar la apertura de nuestro coffe bar <br />
                        Ven a tomar una cerveza y pasa el rato.

                        <br />
                        <br />
                        <Form className="d-flex">
                            <Button variant="primary" href="Registro">Registro</Button>
                        </Form>
                    </div>

                    <div className="container__middle">
                        <img src={parked} className="imagen" id="parked" alt=""></img>
                    </div>

                    <div className="container__right">
                        <img src={fondo} className="imagen" alt=""></img>
                        <br /><br />
                        <img src={woman} className="imagen" alt=""></img>
                        <br /><br />
                        <img src={photos2} className="imagen" alt=""></img>
                    </div>
                </main>
            </div>   
            
            <br /><br />
            
            <div className="container">
                <ul className='imgGrid'>
                    <li className="imagen40">
                        <a href="Bicis">
                            <img  width={200} height={200} src={bikes}  alt=""  />
                        </a>
                        <div>Bicicletas</div>
                    </li>
                    <li className="imagen40">
                        <a href="Cascos">
                            <img width={200} height={200}   src={helmet}  alt=""></img>
                        </a>
                        <div>Cascos</div>
                    </li>
                    <li className="imagen40">
                        <a href="Ropa">
                            <img width={200} height={200}   src={ropa}  alt=""></img>
                        </a>
                        <div>Ropa</div>
                    </li>
                    <li className="imagen40">
                        <a href="Accesorios">
                            <img width={200} height={200}   src={refacciones}  alt=""></img>
                        </a>
                        <div>Accesorios</div>
                    </li>
                </ul> 
            </div>
        </div>
    )
}


