import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Card from '../../components/card/Card'
import axios from 'axios'
import SingleProduct from '../singeProduct/SingleProduct'

const Home = () => {
  const[products,setProducts]=useState([])

  const fetchProducts= async()=>{
  const response= await axios.get('https://66024abb9d7276a75552f761.mockapi.io/products')
  // console.log(response)
  if (response.status ===200){
    setProducts(response.data)
  }else{
    alert('something went wrong')
  }
  }

  useEffect(()=>{
    fetchProducts()
  }, [])

  return (
    <>
    <Navbar/>
    <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
     {
      products.length>0 && products.map((product)=>{
        return(
          <Card product={product }/>
         
        )
      })
     } 
     
    </div>
    </>
  )
}

export default Home
