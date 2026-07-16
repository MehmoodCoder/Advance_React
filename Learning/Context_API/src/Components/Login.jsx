import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";
import './Styles.css'

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
    console.log(username, password);
    
  };

  return (
    <>
      <div className="login">
        <h3>Login</h3>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br/>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default Login;
