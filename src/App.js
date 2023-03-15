import { useState } from 'react';
import './App.css';
import {pizza, toppings} from './pizzaObjects';

function App() {

  const [toppingBeingDragged, setToppingBeingDragged] = useState([])


  const handleOnDrag = (e, toppingType) => {
    e.dataTransfer.setData("text/plain", toppingType)
  }

  const handleOnDrop = (e) => {
    const widgetType = e.dataTransfer.getData("text/plain")
    setToppingBeingDragged([...toppingBeingDragged, widgetType])
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }


  return (
    <>
    <div className='pizza' onDrop={handleOnDrop} onDragOver={handleDragOver}>
      <img alt='pizza crust' src={pizza.crust} />
      <img alt='pizza csauce' src={pizza.sauce} />
      <img alt='pizza cheese' src={pizza.cheese} />
      {
        toppings.map(topping => {
          if(toppingBeingDragged.includes(topping.id)){
            return (
              <img alt='topping' key={topping.id} src={topping.img} />
            )
          }
        })
      }
    </div>
    <div className='topping-options'>
      <div className='topping' draggable onDragStart={(e) => handleOnDrag(e, toppings[0].id)}>
        Bell Pepper
      </div>
      <div className='topping' draggable onDragStart={(e) => handleOnDrag(e, toppings[1].id)}>
        Mushroom
      </div>
      <div className='topping' draggable onDragStart={(e) => handleOnDrag(e, toppings[2].id)}>
        Black Olive
      </div>
      <div className='topping' draggable onDragStart={(e) => handleOnDrag(e, toppings[3].id)}>
        Red Onion
      </div>
      <div className='topping' draggable onDragStart={(e) => handleOnDrag(e, toppings[4].id)}>
        Pepperoni
      </div>
    </div>
    </>
  );
}

export default App;
