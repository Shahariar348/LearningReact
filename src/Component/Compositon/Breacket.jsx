
import React from "react";

export default class Emoji extends React.Component{
   
    addBreacket=(txt)=>{
        return "["+txt+"]"
    }
   
     
    render(){
       
        return this.props.children({addBreacket:this.addBreacket}) 
     }


}