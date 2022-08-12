import React from "react";

class HandlingEvent2nd extends React.Component{
    
    render(){
        const{CustomButton,buttonPara}=this.props
        return(
            <div>
                <button type="button" onClick={()=>CustomButton(buttonPara)}> Click me ? </button>
               
            </div>
        )
    }
}

export default HandlingEvent2nd