import './App.css';
import Mensaje from './Mensaje';

const App = () => {

  return (
    <div className="App">
      <Mensaje color="red" message="text 1"/>
      <Mensaje color="blue" message="text 2"/>
      <Mensaje color="green" message="text 3"/>
    </div>
  );
}

export default App;
