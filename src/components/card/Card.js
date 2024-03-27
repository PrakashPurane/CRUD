import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({product}) => {
  return (
    <>
    <div className="card" key={product.id}>
        <img src={product.image} alt="Product Image" className="product-image" />
        <div className="product-details">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">${product.price}</p>
        </div>
        <Link to={`/products/${product.id}`}>See More</Link>
        </div>
        </>
  )
}

export default Card
