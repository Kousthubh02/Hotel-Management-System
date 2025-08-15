function handleLogin(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const loginData = Object.fromEntries(data);

  console.log('Sending login data:', loginData); // Debug log

  fetch('/stafflogin/', {
    method: 'POST',
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
        window.location.href='/StaffPortal/';
        // Login successful, redirect to StaffPortal
      } else {
        // Login failed, display error message
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
    <form className="container d-flex inline-block justify-content-center align-items-center" style={{height:"100vh"}} onSubmit={handleLogin}>
      <div className="container containerlogin py-4 " style={{width:"fit-content"}}>
        <h1>Login</h1>
        <div className="container d-flex justify-content-center align-items-center">
          <label htmlFor="username" className='form-label mx-2 usr'>Username:</label>
          <input type="text" className='mx-2 my-2 form-control' placeholder='Enter your username' name="username" />
        </div>
        <div className="container d-flex justify-content-center align-items-center">
          <label htmlFor="password" className='form-label mx-2 pass'>Password:</label>
          <input type="password" className='mx-2 my-2 form-control' placeholder='Enter your password' name="password" />
        </div>
        <div className="container d-flex justify-content-center my-2 ">
          <button type='submit' className='btn btn-outline-primary btn-lg'>Login</button>
        </div>
      </div>
    </form>
  )
}

export default StaffLogin;