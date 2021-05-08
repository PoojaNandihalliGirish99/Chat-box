import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Card from "../../components/UI/Card"
import "./style.css"
import { signup } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import {Redirect} from 'react-router-dom'
/**
* @author
* @function RegisterPage
**/

const RegisterPage = (props) => {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  const registerUser = (e) => {
    
    e.preventDefault();
    const user = {
      firstName, lastName, email, password
    }
    
    dispatch(signup(user))
  }
  
  if(auth.authenticated){
    return <Redirect to="/"/>
  }

  return(
    <Layout>
    <div className="registerContainer">
    <Card>
    <form onSubmit={registerUser}>
    
    <h3>Sign Up</h3>

    <input type="text" 
    value={firstName} 
    name="firstName"
    onChange={(e)=>setFirstName(e.target.value)}
    placeholder="First Name"
    className="email"
    />

    <input type="text" 
    value={lastName} 
    name="lastName"
    onChange={(e)=>setLastName(e.target.value)}
    placeholder="Last Name"
    className="email"
    />



    <input type="email" 
      value={email} 
      name="email"
      onChange={(e)=>setEmail(e.target.value)}
      placeholder="Email"
      className="email"
      />

      <input type="password" 
      value={password} 
      name="password"
      onChange={(e)=>setPassword(e.target.value)}
      placeholder="Password"
      className="email"
      />

      <div>
      <button>Sign Up</button>
      </div>

    </form>
    </Card>
    </div>
    </Layout>
   )

 }

export default RegisterPage