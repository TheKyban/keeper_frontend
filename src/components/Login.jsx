import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="login">
        <h3>Login</h3>
        <form action="">
            <label htmlFor="email">Email <span>*</span></label>
            <input type="email" name="email" id='email' placeholder='Email'/>
            
            <label htmlFor="password">Password <span>*</span></label>
            <input type="password" name='password' id='password' placeholder='Password'/>

            <p>Don't have an Account ? <Link to={'/signup'}>SIGNUP</Link></p>

            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login