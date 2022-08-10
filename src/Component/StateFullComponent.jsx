import React from "react";

class StateFullComponent extends React.Component{
     
    state={
        time:new Date()
    }

   componentDidMount(){
   
    this.timeId=  setInterval(()=>{
        this.trck()
        console.log("Set Interval")
      },1000)

   }
  
 componentWillUnmount(){
    clearInterval(this.timeId)
    console.log("Clear interval")
 }
    
   trck(){
    this.setState({
        time:new Date()
    })
   }

    render(){
        console.log("Rander")
        const {time}=this.state
        return(
            <div>
                <h1>Time : {time.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default StateFullComponent