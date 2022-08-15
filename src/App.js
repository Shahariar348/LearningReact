
import './App.css';
import CreateComponent from './Component/CreatCopponent';
// import StateFullComponent from './Component/StateFullComponent';
// import Toggle from './Component/HandlingEvents';
// import FormHandle from './Component/FormHandle'
// import Emoji from "./Component/Compositon/Emoji"
// import TextDecoratore from './Component/Compositon/TextDeco';
// import Breacket from './Component/Compositon/Breacket'

import TemCalculator from './Component/LiftStateUpProject/CalculateTem';
function App() {
  return (
    <div className="App">

         <CreateComponent/>

         {/* <StateFullComponent/>
         <Toggle/>
         <FormHandle/>

       Composition Example  nested component 
         <Emoji>
          {({addEmoji})=>
              (
                <Breacket>
                  {({addBreacket})=>(
                     <TextDecoratore addemoji={addEmoji} addbreacket={addBreacket}/>
                  )}
                </Breacket>
              )
          }
         </Emoji>  */}

        <TemCalculator/>
    </div>
  );
}

export default App;
