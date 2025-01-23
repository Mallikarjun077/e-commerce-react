import React, { useState } from "react";
import "./LoginSignup.css";

function LoginSignup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // Regex patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 characters, 1 letter, 1 number

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate email in real-time
    if (name === "email") {
      if (!emailRegex.test(value)) {
        setErrors((prev) => ({ ...prev, email: "Invalid email format!" }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }

    // Validate password in real-time
    if (name === "password") {
      if (!passwordRegex.test(value)) {
        setErrors((prev) => ({
          ...prev,
          password:
            "Password must be at least 8 characters, with at least 1 letter and 1 number.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, password: "" }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert("All fields are required!");
    } else if (errors.email || errors.password) {
      alert("Please fix the validation errors!");
    } else {
      console.log("Form submitted:", formData);
      alert("Sign up successful!");
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} className="loginsignup-fields">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="input"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
          <button type="submit">Continue</button>
        </form>
        <p className="loginsignup-login">
          Already have an Account? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
