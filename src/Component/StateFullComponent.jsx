import React from "react";


class StateFullComponent extends React.Component{
     
    state={
        time:new Date()
    }

   componentDidMount(){
   
    this.timeId=  setInterval(()=>{
        this.trck()
    
      },1000)

   }
  
 componentWillUnmount(){
    clearInterval(this.timeId)
 
 }
    
   trck(){
    // Using state correctly  
    // this.state.time  never do that 
     
    this.setState((state,props)=>({
        time:new Date()
    }))
     
   }
 

    
    render(){
     
        const {time}=this.state
       
        return(
            <div>
                <h1>Time : {time.toLocaleTimeString()}</h1>      
            </div>
        )
    }
}

export default StateFullComponent