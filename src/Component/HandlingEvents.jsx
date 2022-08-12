import React from "react";
import HandlingEvent2nd from "./HandlingEvent2nd";

class Toggle extends React.Component{
  constructor(props){
    super(props)
     this.state={
      istoggle:true,
      timeZone:"",
      text:"No, You click me",
      clickCount:0
     }

      //this.handleClick=this.handleClick.bind(this)
  }
  
  handleClick = (tZone)=>{
    this.setState((state)=>(
      {
        istoggle:!state.istoggle,
        timeZone:tZone
      }
    ))
  }

  CustomButton=(text)=>{
     this.setState((state)=>({
       text,
       clickCount:state.clickCount+1
     }))
  }

  render(){
    const {istoggle,timeZone,text,clickCount}=this.state

    return(
      <div>
             {/* 1st  way to changes handle Event using binding */}
        
          {/* <button type="button" onClick={this.handleClick.bind(this)}>
             {istoggle ? "ON" : "OFF"}
          </button> */}

             {/* 2nd way to changes handle Event using Arrow  Function*/}

             {/* <button type="button" onClick={()=>this.handleClick()}>
             {istoggle ? "ON" : "OFF"}
           </button> */}

             {/* 3rd way to changes handle Event using Arrow Function in the method*/}

         {/* <button type="button" onClick={this.handleClick}>
             {istoggle ? "ON" : "OFF"}
          </button> */}
    
          {/*Passing Data in the Event Handler*/}
           
          {/* <h3>{timeZone}</h3>
         <button type="button" onClick={this.handleClick.bind(this,"Bangladesh Time Zone")}>
             {istoggle ? "ON" : "OFF"}
          </button> */}

          {/*Passing  Data 2nd way in the Event Handler*/}
         {
           (
             istoggle ? " ":
             <h3>{timeZone}</h3>

           )
         }
         <button type="button" onClick={(e)=>this.handleClick("Bangladesh Time Zone")}>
             {istoggle ? "ON" : "OFF"}
          </button>

          <h3>{text}, {clickCount} Times</h3>
          
          <HandlingEvent2nd CustomButton={this.CustomButton} buttonPara={"Yes, You click me"}/>


      </div>
    )
  }

}

export default Toggle