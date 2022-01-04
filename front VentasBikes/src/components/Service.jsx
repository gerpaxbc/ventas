import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import styles from './Service.module.css'

import photos1 from '../images/taller-bicis.jpg'
import photos4 from '../images/photos1.jpg'
import photos3 from '../images/profimedia-0282405819-1-1.jpg'
import photos2 from '../images/unnamed.jpg'

export default function Service() {
    return (
        <div>
            <h1>Presupuestos Gratis</h1>
            <div className={styles.slide}>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={photos1} width={800} height={400}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Refacciones</h3>
                        <p>Cambio y reparación de componentes</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={photos2} width={800} height={400}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Ajuste</h3>
                        <p>Todos componentes deben estar a punto</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={photos3} width={800} height={400}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Personalización</h3>
                        <p>Pintura, componentes a su gusto</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>   
            </div>

            <div className="container">
                <main className="container__main">
                    <div className="container__left">
                        <div className={styles.detailsContainer}>
                            <div>
                            Cuando su bicicleta necesite servicio o reparación, llévela a The Bike Way y permítanos ponerlo en marcha nuevamente. Damos servicio a todas las marcas y todo tipo de bicicletas. Ya sea que necesite una revisión de seguridad gratuita o un pinchazo reparado, lo hacemos todo, incluidos los servicios de suspensión y transmisión más técnicos. Ofrecemos presupuestos gratuitos en cualquier momento y lo ayudaremos a encontrar el paquete de servicio o la reparación que mejor se adapte a sus necesidades.
                            </div>
                            <div>
                            ¿En una crisis de tiempo? ¿No tienes ganas de cruzar la ciudad en coche? No hay problema: podemos recoger su bicicleta y devolvérsela cuando esté terminada.
                            </div>
                        </div>
                    </div>

                    <div className="container__middle">
                    </div>

                    <div className="container__right">
                        <img src={photos4} className="imagen" alt=""></img>   
                    </div>
                </main>
            </div>   
            
        </div>
    )
}
