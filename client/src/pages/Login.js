import React from 'react';
import axios from 'axios'

class Login extends React.Component {
    state = { 
        "username": "",
        "password": ""
     }

     textChangeHandler = (event) =>{
        const text = event.target.value
       
        this.setState({
            ...this.state,
            [event.target.name]: text
        })
    }

    login = (event) =>{
        event.preventDefault()
        axios.post('http://localhost:5000/api/auth/login', this.state) 
        .then( res => {
            console.log(res);
            localStorage.setItem("token", res.data.token)
      
        })
        .catch( error => {
            console.log(error)
        })

        this.setState({
            username : "",
            password: ""
     
        
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

        this.setState({
            username : "",
            password: ""
     
        
    })
    }
    


    render() { 

        return (  
            <div>
                <h1>Login</h1>
                <form onSubmit={this.login}>
                    <input onChange={this.textChangeHandler} name="username" placeholder="username" type="text" value={this.state.username}></input>
                    <input onChange={this.textChangeHandler} name="password" placeholder="password" type="text" value={this.state.password}></input>
                    <button>Submit</button>
                </form>
             
            </div>

        );
    }
}
 
export default Login;