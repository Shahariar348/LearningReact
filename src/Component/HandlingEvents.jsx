import React from "react";
class Toggle extends React.Component{
  constructor(props){
    super(props)
     this.state={
      istoggle:true,
      timeZone:""
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


  render(){
    const {istoggle,timeZone}=this.state

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
           <h3>{timeZone}</h3>
         <button type="button" onClick={(e)=>this.handleClick("Bangladesh Time Zone")}>
             {istoggle ? "ON" : "OFF"}
          </button>
                    
      </div>
    )
  }

}

export default Toggle