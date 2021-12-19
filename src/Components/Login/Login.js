import React,{useState,useContext} from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import { FirebaseContext } from '../../store/Context';

import {useHistory} from 'react-router-dom'


function Login() {
  
  const [email,setEmail]=useState('')
  const [password,setpassword]=useState('')
  const {firebase}=useContext(FirebaseContext)
  const history = useHistory()
  const handleSubmit =(e)=>{

    e.preventDefault()
  
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{

    history.push('/')

    }).catch((err)=>{

      alert(err.message)

    })



  }


  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}  >
          <label htmlFor="fname">Email</label>
          <br />
          <input style={{padding:5}}
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input style={{padding:5}}
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}

            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button> Login</button>
        </form>
        <a> <button onClick={()=>{history.push('/signup')}}> Signup </button></a>
      </div>
    </div>
  );
}


export default Login;
