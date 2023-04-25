import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { url } from '../App'
import { toast } from 'react-hot-toast'

function SignUp() {
    const navigate = useNavigate()
    const [newUser, setNewUser] = useState({
        fName: "",
        lName: "",
        email: "",
        password: ""
    })


    /**
     * Change handler
     */


    const changeHandler = (e) => {
        const { name, value } = e.target;
        setNewUser(previousValue => (
            {
                ...previousValue, [name]: value
            }
        ))
    }

    /**
     * Submit Handler
     */

    const sumbitHandler = async (e) => {
        e.preventDefault()


        /**
         * Options for request
         */

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: 'include',
            body: JSON.stringify(newUser)
        }

        /**
         * Request to server
        */

        const RegisterUser = await fetch(`${url}/user/new`, options).then(r => r.json()).then(d => {

            // console.log(d)
            if (d.success) {
                toast.success(d.message)
                navigate("/login")
            } else {
                toast.error(d.message)

            }
        })
    }

    return (
        <div className="login">
            <h3>SignUp</h3>
            <form onSubmit={sumbitHandler}>

                {/* Name */}

                <div className="name">
                    <div>
                        <label htmlFor="name">
                            FirstName <span>*</span>
                        </label>

                        <input
                            type="text"
                            required
                            name="fName"
                            id='fName'
                            placeholder='FirstName'
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="name">
                            LastName
                        </label>
                        <input
                            type="text"
                            required
                            name="lName"
                            id='lName'
                            placeholder='LastName'
                            onChange={changeHandler}
                        />

                    </div>
                </div>

                {/* Email */}

                <label htmlFor="email">
                    Email <span>*</span>
                </label>
                <input
                    required
                    type="email"
                    name="email"
                    id='email'
                    placeholder='Email'
                    onChange={changeHandler}
                />


                {/* Password */}

                <label htmlFor="password">
                    Password <span>*</span>
                </label>
                <input
                    required
                    type="password"
                    name='password'
                    id='password'
                    placeholder='Password'
                    onChange={changeHandler}
                />

                <p>Already have an Account ? <Link to={'/login'}>Login</Link></p>

                <button type='submit'>SignUp</button>
            </form>
        </div>
    )
}

export default SignUp