/* 
React has a powerful composition model,
and we recommend using composition instead of inheritance to reuse code between components.
*/

import React from "react";

export default class Emoji extends React.Component{
   
    addemoji=(txt,emoji)=>{
        return emoji+txt+emoji
    }
   
     
    render(){
       
        return this.props.children({addEmoji:this.addemoji}) 
     }


}