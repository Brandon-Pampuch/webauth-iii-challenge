import React from 'react';
import axios from 'axios'

class Register extends React.Component {
    state = { 
        "username": "",
        "password": "",
        "department": ""
     }

     textChangeHandler = (event) =>{
        const text = event.target.value
       
        this.setState({
            ...this.state,
            [event.target.name]: text
        })
    }



 
    register = (event) =>{
        event.preventDefault()
        axios.post('http://localhost:5000/api/auth/register', this.state) 
        .then( res => {
            console.log(res);
       
        })
        .catch( error => {
            console.log(error)
        })

    }
    


    render() { 

        return (  
            <div>
                <h1>Register</h1>
                <form onSubmit={this.register}>
                    <input onChange={this.textChangeHandler} name="username" placeholder="username" type="text" value={this.state.username}></input>
                    <input onChange={this.textChangeHandler} name="password" placeholder="password" type="password" value={this.state.password}></input>
                    <input onChange={this.textChangeHandler} name="department" placeholder="department" type="text" value={this.state.department}></input>
                    <button>Submit</button>
                </form>
             
            </div>

        );
    }
}
export default Register;