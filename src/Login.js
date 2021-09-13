import "./App.css";
import { useState } from "react";
import LoginForm from "./LoginForm";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged in Admin");
    } else {
      console.log("Details do not match");
    }
  };

  const Logout = () => {
    console.log("Logout");
  };

  return (
    <div className="App">
      {user.email != "" ? (
        <div className="welcome">
          <h2>
            Welcome <span>{user.email}</span>
          </h2>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

export default App;
