import React from 'react';
import axios from 'axios'


const Users = () => {


const getUsers = () =>{
    localStorage.getItem("token") // get token form local storage?
    const config = {
        method: 'get',
        url: 'http://localhost:5000/api/user/',
        headers:{
            // put it into the headers?
        }
    }
    axios.get(config.ur)
    .then(res =>{
        console.log(res)

    })
    .catch(err =>{
        console.log(err)
    })
}

    return ( 
        <div>
            <h1>Get Users Data</h1>
            <button onClick={()=>{getUsers()}}>Call</button>
        </div>
     );
}
 
export default Users;