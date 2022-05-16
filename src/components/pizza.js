import React, { useState } from "react";

const options = ["Bell Pepper", "Sausage", "Pepperoni", "Pineapple"];

const Pizza = () => {
  const [selected, setSelected] = useState([])

  const toggleTopping = (event) => {
    const clickedTopping = event.target.value;
    setSelected(prev => {
      if (prev.includes(clickedTopping)) {
        return prev.filter(t => t !== clickedTopping)
      } else {
        return [clickedTopping, ...prev]
      }
    })
  };

  return (
    <div>
      <h3>PIZZA TIME !! </h3>
      <p>Add your toppings</p>

      {options.map(option => {
        return <button value={option} onClick={toggleTopping}>
          {selected.includes(option) ? "remove" : "add"} {option}
        </button>
      })}

      <p>You selected :</p>

      <ul>
        {selected.map(s => {
          return <li> {s} </li>
        })}
      </ul>

    </div>
  )
}
export default Pizza
