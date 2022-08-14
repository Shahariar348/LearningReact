
import './App.css';
import CreateComponent from './Component/CreatCopponent';
import StateFullComponent from './Component/StateFullComponent';
import Toggle from './Component/HandlingEvents';
import FormHandle from './Component/FormHandle'

function App() {
  return (
    <div className="App">
         <CreateComponent/>
         <StateFullComponent/>
         <Toggle/>
         <FormHandle/>
    </div>
  );
}

export default App;
