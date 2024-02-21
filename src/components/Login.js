import React, { useState } from "react";
import axios from "axios";

const apiUrl = `${process.env.REACT_APP_API_URL}/login`;

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.post(apiUrl, formData);
      const responseData = response.data;

      if (responseData.statusCode === 200) {
        // Successful login
        console.log("Login successful");
        console.log("Token:", responseData.data.token);
        // Handle the token, maybe store it in a state or a global context
      } else {
        // Handle unsuccessful login
        setError(responseData.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Log in"}
      </button>
    </div>
  );
}

export default Login;
