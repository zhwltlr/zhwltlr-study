"use client";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const apiUrl = "http://localhost:3000/api/login";
      const data = { email };
      const response = await fetch(apiUrl, {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      });
      // const response = await axios.post(apiUrl, data);
      console.log("API 응답:", response);
    } catch (error) {
      console.error("API 요청 중 오류 발생:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
