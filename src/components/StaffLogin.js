import React from 'react';

function handleLogin(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);

  fetch('/stafflogin/', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(data)),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        window.location.href = '/StaffPortal/';
      } else {
        alert('Incorrect username or password. Please try again.');
      }
    })
    .catch(error => {
      console.error(error);
      alert('An error occurred while logging in.');
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
