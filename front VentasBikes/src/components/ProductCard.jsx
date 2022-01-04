import React from 'react'
import styles from './ProductCard.module.css'
import { Link } from 'react-router-dom'

export default function ProductCard({bike}) {
    const bici =  bike.path
    return <li className={styles.productCard}>
        <Link to={'/producto/'+ bike._id}>
            <img width={230} height={230} className={styles.productImage} src={bici} alt={bike.nombre} />
        </Link>
        <div>Descripción: {bike.nombre}</div> 
        <div>Precio: {bike.precio}</div>
    </li>
}
