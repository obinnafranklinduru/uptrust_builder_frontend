import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const apiUrl = `${process.env.REACT_APP_API_URL}/register`;

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post(apiUrl, formData);
      const responseData = response.data;

      if (responseData.statusCode === 200) {
        // Successful signup
        console.log("Signup successful");
        console.log("User data:", responseData.data);
        // Redirect to the login page using navigate
        navigate("/login");
      } else {
        // Handle unsuccessful signup
        console.error("Signup failed:", responseData.message);
        // Update the UI to show an error message or take appropriate action
      }
    } catch (error) {
      console.error("Error signing up:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="header">
      <div className="title">
        <h1>Create an account</h1>
        <h1>
          <span>Uptrust</span>
        </h1>
      </div>
      <div className="signup">
        <input
          type="text"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="phone"
          placeholder="Enter Your Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button onClick={handleSignup} disabled={loading}>
          {loading ? "Signing up..." : "Sign up"}
        </button>
      </div>
    </div>
  );
}

export default Signup;
