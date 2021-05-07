import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/Layout'
import Card from '../../components/UI/Card'
import "./style.css";
import { signin} from '../../actions/auth.actions'
import { Redirect } from 'react-router';

/**
* @author
* @function LoginPage
**/

const LoginPage = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  // useEffect(() => {
  //   if(auth.authenticated){
  //     dispatch(isLoggedInUser)
  //   }
  // },[])


  const userLogin = (e) => {

    e.preventDefault();
    if(email === ""){
      alert("email is required");
      return;
    }
    if(password === "") {
      alert("Password is required");
      return;
    }

    dispatch(signin({email,password})); 

  }

  if(auth.authenticated){
    return <Redirect to="/"/>
  }

  return(
    <Layout>
    <div className="loginContainer">
    <Card>
    <form onSubmit={userLogin}>

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
      <button>Login</button>
      </div>

    </form>
    </Card>
    </div>
    </Layout>
   )

 }

export default LoginPage