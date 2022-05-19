import {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  const [states, setStates] = useState({counterLeft: 0, counterRight: 0})
  const [clicks, setClicks] = useState([])

  const handleClickLeft = () => {
    setStates({
      ...states,
      counterLeft: states.counterLeft + 1
    })

    setClicks([
      ...clicks,
      "L"
    ])
  }

  const handleClickRight = () => {
    setStates(prevState => ({
      ...prevState,
      counterRight: prevState.counterRight + 1
    }))

    setClicks(prevState => ([
      ...prevState.concat("R")
    ]))

    console.log("dreta");
  }

  const NoRecords = () => {
    return <p>YOU HAVE NOT CLICKED ON ANY BUTTON</p>
  }

  const totalClicks = states.counterLeft + states.counterRight;

  return (
    <div className="App">
      <span>{states.counterLeft}</span>
      <button onClick={handleClickLeft}>Left</button>
      <button onClick={handleClickRight}>Right</button>
      <span>{states.counterRight}</span>
      <p>Total clicks: {totalClicks}</p>
      {totalClicks === 0 ? <NoRecords/> : clicks}
    </div>
  );
}

export default App;
