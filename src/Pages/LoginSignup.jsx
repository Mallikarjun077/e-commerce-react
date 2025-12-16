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

  // ✅ Correct regex patterns
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  ;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[{\]};:'",<.>/?\\|`~]).{8,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Email validation
    if (name === "email") {
      if (!emailRegex.test(value)) {
        setErrors((prev) => ({ ...prev, email: "Invalid email format!" }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }

    // Password validation
    if (name === "password") {
      if (!passwordRegex.test(value)) {
        setErrors((prev) => ({
          ...prev,
          password:
            "Password must be at least 8 characters, include 1 uppercase, 1 lowercase, 1 number, and 1 special character.",
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
      return;
    }

    if (errors.email || errors.password) {
      alert("Please fix the validation errors before submitting.");
      return;
    }

    console.log("Form submitted:", formData);
    alert("Sign up successful!");
    setFormData({ name: "", email: "", password: "" });
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
