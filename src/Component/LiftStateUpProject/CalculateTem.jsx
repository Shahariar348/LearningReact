import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import InputTemperature from "./InputTemperature";
import {ToConvert,ToCelsius,ToFahrenheit} from "./lib"




export default class TemCalculator extends React.Component{
   
    constructor(props){
        super(props)
        this.state={
            inTemperature:"",
            scale:"calsius" 
        }
    }

    handleTemperature=(e,scale)=>{
        this.setState({
            inTemperature:e.target.value,
            scale
        })
      
      
    }

  render(){
        const {inTemperature,scale}=this.state

        const calsiusScale = scale ==='fahrenheit'? ToConvert(ToCelsius,inTemperature):inTemperature
        const fahrenheitScale = scale ==='calsius'? ToConvert(ToFahrenheit,inTemperature):inTemperature
        
       
     return (
        <div>
             <InputTemperature inTemperature={calsiusScale} handleTemperature={(e)=>this.handleTemperature(e,"calsius")} setscale={'c'}/>
             <InputTemperature inTemperature={fahrenheitScale} handleTemperature={(e)=>this.handleTemperature(e,"fahrenheit")} setscale={'f'}/>
             <BoilingVerdict temperature={calsiusScale}/>
        </div>
     )
  }
}