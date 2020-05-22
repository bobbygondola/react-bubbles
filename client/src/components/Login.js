import React, { useState } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';



const Login = () => {
  const history = useHistory()
  const [values, setValues] = useState({
    username: '',
    password: ''
})
  const handleChange = e => {
    setValues({
        ...values,
        [e.target.name]: e.target.value
      })
  }
  const handleLogin = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", values)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload)
        history.push('/BubblePage')
      })
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return(
        <div>
            <form onSubmit={handleLogin} className="loginForm">
                <h3>Login to Colors!</h3>
                Username: <input 
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    />
                    <br />
                Password: <input 
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange} />
                    <br />
                    <button id="submit">Submit</button>
            </form>
        </div>
  )
};

export default Login;
