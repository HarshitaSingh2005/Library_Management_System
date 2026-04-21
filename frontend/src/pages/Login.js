import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", form);
      
      localStorage.setItem("token", res.data.token); // save token
      
      navigate("/"); // go to dashboard
    } catch (err) {
  console.log(err.response?.data); // 👈 ADD THIS
  alert("Login failed");
}
  };

  return (
    <div className="container mt-5">
      <h3>Login</h3>

      <input
        className="form-control mb-2"
        placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        className="form-control mb-2"
        placeholder="Password"
        onChange={e => setForm({ ...form, password: e.target.value })}
      />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;