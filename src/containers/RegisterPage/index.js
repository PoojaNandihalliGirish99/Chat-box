import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Card from "../../components/UI/Card"
import "./style.css"
import { signup } from '../../actions'
import { useDispatch } from 'react-redux'

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


  const registerUser = (e) => {
    
    e.preventDefault();
    const user = {
      firstName, lastName, email, password
    }
    
    dispatch(signup(user))
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
    placeholder="First Name"/>

    <input type="text" 
    value={lastName} 
    name="lastName"
    onChange={(e)=>setLastName(e.target.value)}
    placeholder="Last Name"/>



    <input type="email" 
      value={email} 
      name="email"
      onChange={(e)=>setEmail(e.target.value)}
      placeholder="Email"/>

      <input type="password" 
      value={password} 
      name="password"
      onChange={(e)=>setPassword(e.target.value)}
      placeholder="Password"/>

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