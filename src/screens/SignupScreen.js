import React, { useRef, useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../firebase";
import { useNavigate } from "react-router-dom";

function SignUpScreen({ goBack, email }) {
  const [error, setError] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        navigate("/");
      })
      .catch((error) => {
        setError("Invalid credentials, try again");
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((user) => {
        navigate("/");
      })
      .catch((error) => {
        setError("Wrong email/password, try again");
      });
  };

  return (
    <div className="signupScreen">
      <form action="">
        <span onClick={goBack} className="back_arrow">
          &#8592;Back
        </span>
        <h2>Sign In</h2>
        {error !== "" && <span className="error">{error}</span>}
        <input
          defaultValue={email}
          ref={emailRef}
          type="email"
          placeholder="Email"
        />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <button onClick={signIn} type="submit">
          Sign In
        </button>
        <h5>
          <span>New to Netflix? </span>
          <span onClick={register} className="signup_now">
            Sign Up NOW!
          </span>
        </h5>
      </form>
    </div>
  );
}

export default SignUpScreen;
