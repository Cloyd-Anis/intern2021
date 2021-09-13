import React, { useState } from "react";
import Validation from "./Validation";
import { Button, Stack, Heading } from "@chakra-ui/react";

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
      <Stack spacing={5} direction="row" align="center">
        <Heading ml="20" size="md" fontweight="semibold" color="black">
          Login Page
        </Heading>
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
            <Button
              colorScheme="teal"
              size="lg"
              type="submit"
              className="btn"
              onClick={handleFormSubmit}
            >
              Login
            </Button>
            <a href="*">
              <Button colorScheme="teal" size="lg">
                Register
              </Button>
            </a>
          </div>
          <div>
            <a href="*">Forgot Password</a>
          </div>
        </form>
      </Stack>
    </div>
  );
};

export default Login;
