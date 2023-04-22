import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
    return (
        <div className="login">
            <h3>SignUp</h3>
            <form action="">
                <div className="name">
                    <div>
                        <label htmlFor="name">FirstName <span>*</span></label>
                        <input type="text" name="fName" id='fName' placeholder='FirstName' />
                    </div>
                    <div>
                        <label htmlFor="name">LastName</label>
                        <input type="text" name="lName" id='lName' placeholder='LastName' />
                    </div>
                </div>

                <label htmlFor="email">Email <span>*</span></label>
                <input type="email" name="email" id='email' placeholder='Email' />

                <label htmlFor="password">Password <span>*</span></label>
                <input type="password" name='password' id='password' placeholder='Password' />

                <p>Already have an Account ? <Link to={'/login'}>Login</Link></p>

                <button type='submit'>SignUp</button>
            </form>
        </div>
    )
}

export default SignUp