import './App.css'
import { useState } from 'react'
import Mensaje from './Mensaje'

const App = () => {
  // useState retorna un array de 2 posicions on la primera és el valor i la segona un mètode per actualitzar el valor 
  // const counter = useState(0)
  // counter[1](counter[0] + 1)

  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    //setCounter(counter + 1)
    //setCounter((prevCounter) => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  const handleClickReset = () => {
    setCounter(0);
  }

  return (
    <div className="App">
      <Mensaje color="red" message={counter}/>
      <Mensaje color="blue" message={counter + 1}/>
      <Mensaje color="green" message={counter + 2}/>
      <small>Number is: {(counter % 2 === 0 ? "Par" : "Impar")}</small>
      <br/>
      <button onClick={handleClick}>Increment</button>
      <br/>
      <button onClick={handleClickReset}>Reset</button>

    </div>
  );
}

export default App
