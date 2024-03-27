import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
  const [product,setProduct]=useState({})

  const FetchProduct= async()=>{
    const {id}= useParams()
    console.log(id)
   const response= await axios.get("https://66024abb9d7276a75552f761.mockapi.io/products/"+ id)
   if (response.status ===200){
    setProduct(response.data)
   }else{
    alert("something  went wrong")
   }
  }

  useEffect(()=>{
    FetchProduct()
  })

  return (
    <>
    <div class="product-container">
    <div class="product-image">
        <img src={product.image} alt="Product Image"/>
    </div>
    <div class="product-details">
        <h2 class="product-name">{product.name}</h2>
        <p class="product-description">{product.description}</p>
        <p class="product-price">${product.price}</p>
        <button class="add-to-cart-btn">Delete</button>
        <button class="add-to-cart-btn">Edit</button>
    </div>
    </div>
    </>
  )
}

export default SingleProduct
