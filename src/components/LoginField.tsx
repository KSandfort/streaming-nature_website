import { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("YOUR_LOGIN_API_ENDPOINT", {
        username,
        password,
      });
      console.log("Login successful!", response.data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="container p-5">
      <div className="col-3">
        <h1 className="text-light">Login</h1>
        <div className="mb-3">
          <label htmlFor="username" className="form-label text-light">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label text-light">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-secondary text-light" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
