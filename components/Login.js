import React, { useEffect, useState } from "react";
import "./RegistationCSS.css";

const Login = () => {
  const [Mobile_no, setMobile] = useState("");
  const [Password, setPassword] = useState("");
  const [token, setToken] = useState();
  const [login, setLogin] = useState(false);

  const handleSubmit = () => {
    const newRecord = { Mobile_no, Password };
  };
  return (
    <form action="" onSubmit={handleSubmit} className="container, box">
      <br />
      <h1>Login</h1>
      <br />
      <br />
      <div>
        <input
          type="text"
          name="Mobile_no"
          id="Mobile_no"
          placeholder="mobile no"
          value={Mobile_no}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
      </div>

      <div>
        <input
          type="password"
          name="Password"
          id="Password"
          placeholder="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit">Login</button>
      <br />

      <div className="already">
        {" "}
        Create Account ? <a href="/Registation"> Sign Up </a>
      </div>
    </form>
  );
};

export default Login;
