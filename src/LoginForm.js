import React, { useState } from "react";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="text" name="password" id="password" />
        </div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default LoginForm;
