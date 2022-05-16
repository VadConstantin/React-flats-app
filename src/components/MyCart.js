import React, { useState } from 'react'

const MyCart = () => {
  const products = ["pomme", "banane", "cerise", "prune", "framboise"]

  const [cart, setCart] = useState([])

  const updateCart = (event) => {
    const selectedItem = event.target.value
    if (cart.includes(selectedItem)) {
      setCart(prev => {
        return prev.filter(t => t !== selectedItem)
      })
    } else {
      setCart(prev => {
        return [selectedItem, ...prev]
      });
    }
  }

  return (
    <div>
      <h1>
        ADD products
      </h1>
      <ul>
      {products.map(product => {
        return <button onClick={updateCart} value={product}>
          {product}
        </button>
      })}
      </ul>
      <p>my cart</p>
      <ul>
        {cart.map(item => {
          return <li>{item}</li>
        })}
      </ul>

    </div>
  )
}

export default MyCart;
