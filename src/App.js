
import './App.css';
import CreateComponent from './Component/CreatCopponent';
import StateFullComponent from './Component/StateFullComponent';
import Toggle from './Component/HandlingEvents';

function App() {
  return (
    <div className="App">
         <CreateComponent/>
         <StateFullComponent/>
         <Toggle/>
    </div>
  );
}

export default App;
