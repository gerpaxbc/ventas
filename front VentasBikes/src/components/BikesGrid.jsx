import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import styles from './BikesGrid.module.css'
import { ProductsRepository } from '../data/PraductsData'

export default function BikesGrid(props) { 
    const products = ProductsRepository();
    const [productsState, setProductsState] = useState([])
    
    useEffect(() => {
        products.getProducts(props.tipo)
          .then(setProductsState)
      }, [])

    return ( 
        <div>
            <h1 className='bikesTitle'>{props.tipo}</h1>
            <ul className={styles.bikesGrid}>
                
                {productsState.map( (bike)=> (
                    <ProductCard key={bike._id} bike={bike} />
                ))}
            </ul>
        </div>
    )
}
