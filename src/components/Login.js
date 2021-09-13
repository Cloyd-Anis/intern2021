import React, { useState } from "react";
import Validation from "./Validation";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // setErrors(Validation(user));
    // alert(Validation(user));
    if (Validation(user) === 0) {
      alert("Login Successful");
    } else {
      alert("Error in Loggin In");
    }
  };

  return (
    <div>
      <div>
        <h1 style={{ color: "black", fontSize: 30 }}> Login</h1>
      </div>
      <form>
        <div>
          <label for="email">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Email Address..."
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password..."
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit" className="btn" onClick={handleFormSubmit}>
            Login
          </button>
          <a href="*">
            <button>Register</button>
          </a>
        </div>
        <div>
          <a href="*">Forgot Password</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
