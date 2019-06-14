import React from 'react';
import axios from 'axios';




axios.interceptors.request.use(config =>{

}, error =>{
    return Promise.reject(error)
})

export default function (Component) {


    return class Authenticated extends React.Component{
        render (){
            const token = localStorage.getItem("jwt")
            const notLoggedIN = <h4>please login to see our useres</h4>
                return <> {token ? <Component {...this.props} /> : notLoggedIN}</>
        }


    }
}