import React from 'react';

function handleLogin(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const loginData = Object.fromEntries(data);

  console.log('Sending login data:', loginData);

  fetch('/stafflogin/', {
    method: 'POST',
    body: JSON.stringify(loginData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      console.log('Response status:', response.status);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Response data:', data);
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
  const backgroundStyle = {
    backgroundImage: 'linear-gradient(to bottom right, #A1C298, #C6EBC5, #FBF2CF, #F9F5E7)',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
  };

  return (
    <form
      className="flex items-center justify-center min-h-screen"
      style={backgroundStyle}
      onSubmit={handleLogin}
    >
      <div
        className="rounded-xl p-8 w-96 border-1 border-gray-500 shadow-lg"
        style={backgroundStyle}
      >
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Staff Login</h1>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-medium mb-1">
            Username
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            required
            className="w-full px-3 py-1.5 border border-gray-400 rounded-md text-sm focus:outline-none focus:ring focus:ring-green-200"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            className="w-full px-3 py-1.5 border border-gray-400 rounded-md text-sm focus:outline-none focus:ring focus:ring-green-200"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md transition duration-200"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
}

export default StaffLogin;
