import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { url } from '../App'
import { toast } from 'react-hot-toast'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector(state => state.auth)
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  /**
   * checking isAuthenticated or not
   */

  dispatch({
    type:"checkCookie"
  })

  if (isAuthenticated) {
    navigate("/main")
  }

  // console.log(isAuthenticated)


  /**
   * Saving email and password
   */
  const handler = (e) => {
    const { name, value } = e.target
    setUser(previousValue => (
      { ...previousValue, [name]: value }
    ))
  }



  const submitHandler = async (e) => {
    e.preventDefault()

    /**
     * Options for fetching data
     */

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: 'include',
      body: JSON.stringify(user)
    }


    /**
     * Fetching data
     */

    const login = await fetch(`${url}/user/login`, options)
      .then(res => res.json())
      .then(d => {
        console.log(d)

        /**
         * If true
         */

        if (d.success) {
          toast.success(d.message)
          dispatch({
            type: "loginUser",
            payload: true
          })
          navigate("/main")
        } else {
          /**
           * If False
           */
          toast.error("email or password may incorrect")
          dispatch({
            type: "loginUser",
            payload: false
          })
        }
      })




  }



  return (
    <div className="login">
      <h3>Login</h3>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email <span>*</span></label>
        <input type="email"
          name="email"
          id='email'
          placeholder='Email'
          onChange={handler}
          value={user.email}
        />


        <label htmlFor="password">Password <span>*</span></label>
        <input type="password"
          name='password'
          id='password'
          placeholder='Password'
          onChange={handler}
          value={user.password}
        />

        <p>Don't have an Account ? <Link to={'/signup'}>SIGNUP</Link></p>

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login