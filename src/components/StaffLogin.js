import React from 'react';

function handleLogin(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const loginData = Object.fromEntries(data);

  console.log('Sending login data:', loginData); // Debug log

  fetch('/stafflogin/', {
    method: 'POST',

    body: JSON.stringify(Object.fromEntries(data)),
    headers: { 'Content-Type': 'application/json' },
=======
    body: JSON.stringify(loginData),
    headers: {
      'Content-Type': 'application/json',
    },

  })
    .then(response => {
      console.log('Response status:', response.status); // Debug log
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Response data:', data); // Debug log
      if (data.success) {
        window.location.href = '/StaffPortal/';
      } else {
        alert('Incorrect username or password. Please try again.');
      }
    })
    .catch(error => {
      console.error('Login error:', error);
      alert(`An error occurred while logging in: ${error.message}`);
    });
}

function StaffLogin(props) {
  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 via-yellow-100 to-amber-100 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white/80 backdrop-blur-md border border-gray-300 shadow-lg rounded-xl p-4 w-full max-w-xs mx-auto"
      >
        <h1 className="text-xl font-semibold text-center text-gray-800 mb-4">Staff Login</h1>

        <input type="hidden" name="csrfmiddlewaretoken" value={props.csrfToken} />

        <div className="mb-3">
          <label htmlFor="username" className="block text-gray-700 text-xs font-medium mb-1">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-400 focus:outline-none text-sm"
            placeholder="Enter your username"
            required
          />
=======
    <form className="container d-flex inline-block justify-content-center align-items-center" style={{height:"100vh"}} onSubmit={handleLogin}>
      <div className="container containerlogin py-4 " style={{width:"fit-content"}}>
        <h1>Login</h1>
        <div className="container d-flex justify-content-center align-items-center">
          <label htmlFor="username" className='form-label mx-2 usr'>Username:</label>
          <input type="text" className='mx-2 my-2 form-control' placeholder='Enter your username' name="username" />

        </div>

        <div className="mb-5">
          <label htmlFor="password" className="block text-gray-700 text-xs font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-400 focus:outline-none text-sm"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-1.5 rounded-md hover:bg-emerald-600 transition duration-300 text-sm font-medium"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default StaffLogin;
