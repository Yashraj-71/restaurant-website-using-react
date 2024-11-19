// LoginForm Component
import React, { useState } from "react";
import "./login.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [saveLogin, setSaveLogin] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
    if (password.length < 8 || password.length > 14) {
      alert("Password must be between 8 and 14 characters");
      return;
    }
    try {
      const response = await fetch("/saveLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, saveLogin }),
      });
      if (response.ok) {
        alert("Login information saved successfully.");
        const responseText = await response.text();
        console.log(responseText);
      } else {
        throw new Error("Failed to save login information.");
      }
    } catch (error) {
      console.error("Error saving login information:", error);
      alert("Error saving login information.");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Login-form</h2>
        <div className="input-field">
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email">Enter email</label>
        </div>
        <div className="input-field">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="password">Enter password</label>
        </div>
        <div className="forget">
          <label htmlFor="Save-login">
            <input
              type="checkbox"
              id="Save-login"
              checked={saveLogin}
              onChange={() => setSaveLogin(!saveLogin)}
            />
            <p>Save login information</p>
          </label>
          <a href="/reset-password">Forgot password?</a>
        </div>
        <button type="submit">Log In</button>
        <div className="Create-account">
          <p>
            Don't have an account? <a href="/signup">Create account</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
