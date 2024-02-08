import React from 'react'

export default function LoginForm() {
    return (
        <div className='loginform'>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label ">Enter your username or email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Username or email address'/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Enter your Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password'/>
                </div>
                
                <button  className="btn btn-primary" >Sign in</button>
            </form>
        </div>
    )
}
