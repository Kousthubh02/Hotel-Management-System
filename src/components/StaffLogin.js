import React from 'react'
import './styles/StaffLogin.css'
function StaffLogin() {
  return (
    <div className="container d-flex inline-block justify-content-center align-items-center"style={{height:"100vh"}}>
      <div className="container containerlogin py-4 " style={{width:"fit-content"}}>
        <h1>Login Form</h1>
        <form action="/" method='post'>

        <div className="container d-flex justify-content-center align-items-center">
        <label htmlFor="username" className='form-label mx-2 usr'>Username:</label>
      <input type="text" className='mx-2 my-2 form-control' placeholder='Enter your username'  />
        </div>
        <div className="container d-flex justify-content-center align-items-center">
        <label htmlFor="password" className='form-label mx-2 pass'>Password:</label>
      <input type="password" className='mx-2 my-2 form-control' placeholder='Enter your password' />
        </div>
        <div className="container d-flex justify-content-center my-2 ">
          <button type='button' className='btn btn-outline-primary btn-lg'>Login</button>
        </div>
        </form>
      </div>
    </div>
    
  )
}

export default StaffLogin
