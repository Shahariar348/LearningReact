
export default function InputTemperature(props){
 
    const {inTemperature,handleTemperature,setscale}=props
    
  const getscale={
      c:"Celsius",
      f:"Fahrenheit"
    }
    return(
        <>
          <fieldset>
                  <legend>
                      Enter Temperature in {getscale[setscale]} : 
                  </legend>  
                  <input 
                   value={inTemperature}
                   onChange={handleTemperature}
                  />
           </fieldset>
        </>
    )
}