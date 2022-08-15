
import React from "react";

export default class ControlledComponent extends React.Component{
  
    constructor(props){
        super(props)
        this.state={
            username:"",
            useremail:"",
            userinfo:{}
        }
    }

    ChangeHandler =(e)=>{
        this.setState({
          [e.target.name]:e.target.value,
         
        })
    }
    
    hadleSubmit=(e)=>{
        e.preventDefault()
        const reUser={
            name:this.state.username,
            email:this.state.useremail
        }
        this.setState({
            userinfo:reUser
        })
    }
    render(){
        const {username,useremail,userinfo} =this.state
        
        return(
           <div>
            <h3>Registration</h3>
               <form onSubmit={this.hadleSubmit}>
               <label>Name : </label>
                  <input 
                   type="text"
                   name="username" 
                   placeholder="Enter User Name"
                   value={username}
                   onChange={(e)=>this.ChangeHandler(e)}
                   />
                   <br /> <br />
                 <label>Email : </label>
                  <input 
                   type="text"
                   name="useremail" 
                   placeholder="Enter User Email"
                   value={useremail}
                   onChange={(e)=>this.ChangeHandler(e)}
                   />
                     <br /> <br />
                   <input
                    type="submit"
                    value="Submit "
                   />
               </form>

             <div>

                <h3>Name : {userinfo.name}</h3>
                <h3>Email : {userinfo.email}</h3>

             </div>

           </div> 
        )
    }

}

