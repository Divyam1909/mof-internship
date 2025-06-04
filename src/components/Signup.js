import React from 'react';

const Signup = () => {
  return (
    <div>
      <h2>Sign Up Page</h2>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;