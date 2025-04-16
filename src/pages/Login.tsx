import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login, isLoggedIn, username } = useAuth();
  const [uname, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn && username) {
      navigate("/home");
    }
  }, [isLoggedIn, username, navigate]);

  const handleLogin = () => {
    if (uname === "admin" && password === "admin123") {
      login(uname);
      navigate("/home");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          className="w-full p-2 border rounded mb-3"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-full p-2 border rounded mb-2"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}
        <button
          className="w-full bg-blue-600 text-white p-2 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
