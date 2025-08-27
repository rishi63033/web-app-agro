import React, { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
    role: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        role: formData.role.toLowerCase(), // ✅ Ensure role is lowercase
      };

      const response = await axios.post("/users/login", payload);
      console.log("🟢 Server response:", response);

      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        alert("Login Successful");
        navigate("/Dashboard");
      } else {
        console.warn("⚠️ Login response missing token or user");
        alert(response.data?.message || "Login failed - No token provided");
      }
    } catch (error) {
      console.error("❌ Login error caught:", error.response?.data || error.message);
      const msg = error.response?.data?.message || error.message || "Login failed";
      alert(msg);
    }
  };

  const containerStyle = {
    backgroundImage: `url('/harvester.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const cardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    padding: "30px",
    borderRadius: "15px",
    width: "500px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  };

  const inputStyle = {
    width: "90%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
    alignItems: "center",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#2d6a4f",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
  };

  const eyeIconStyle = {
    position: "absolute",
    right: "15px",
    top: "45%",
    cursor: "pointer",
    fontSize: "18px",
  };

  const registerButtonStyle = {
    marginTop: "10px",
    background: "none",
    border: "none",
    color: "#2196F3",
    fontSize: "14px",
    textDecoration: "underline",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <form style={cardStyle} onSubmit={handleLogin}>
        <h2 style={{ marginBottom: "20px" }}>Login</h2>

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <span
            style={eyeIconStyle}
            onClick={() => setShowPassword(!showPassword)}
            title={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? "🔒" : "🔓"}
          </span>
        </div>

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          style={inputStyle}
          required>
          <option value="">Select Role</option>
          <option value="farmer">Farmer</option>
          <option value="harvester">Harvester</option>
        </select>

        <button type="submit" style={buttonStyle}>
          Login
        </button>
        <button
          style={registerButtonStyle}
          onClick={() => navigate("/register")}>
          Don't have an account? Register
        </button>
      </form>
    </div>
  );
};

export default Home;

