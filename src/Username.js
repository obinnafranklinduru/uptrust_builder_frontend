import React, { useState } from "react";

const Username = () => {
  

  const [username, setUsername] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handlePostRequest = async () => {
    const response = await fetch(
      "https://uptrust-service-api.onrender.com/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      setResponseMessage(data.message);
    } else {
      console.error(
        "Error making POST request:",
        response.status,
        response.statusText
      );
      // Handle error here if needed
    }
  };

  return (
    <div>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <button onClick={handlePostRequest}>Submit</button>

      {responseMessage && (
        <div>
          <strong>Response:</strong> {responseMessage}
        </div>
      )}
    </div>
  );
};

export default Username;
