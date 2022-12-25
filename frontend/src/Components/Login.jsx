import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import '../Styles/Login.css';


export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("CHECKING IF UPDATES ARE HAPPENING",login);

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history("/");
    } catch {
      setError("Failed to log in");
      setTimeout(() => {setError("")},5000);
    }

    setLoading(false);
  }

  return (
    <div id="page">
      <div id="outer">
        <h1 id="team-title">Staff Portal</h1>
        <div id="form-outer">
          <div id="form-outer-body" >
            <form onSubmit={handleSubmit} id="form-body">
               <label id="email-text">EMAIL:</label>
                <input id="email-box" type="email" ref={emailRef} required />
                <label id="pw-text">PASSWORD:</label>
                <input id="pw-box" type="password" ref={passwordRef} required />
              <button disabled={loading} id="submit-btn" type="submit">
                LOG IN
              </button>
            </form>
            <div id="forgot-pw">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </div>
        </div>
      </div>
      {error && <div id="loginerr" className="alert alert-danger" role="alert">{error}</div>}
    </div>
  
  
  )
 
}

