import React, { useRef, useState } from "react";
import "./LoginScreen.css";
import "./SignupScreen.css";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  const emailRef = useRef();

  const handleBackButton = () => {
    setSignIn(false);
  };

  return (
    <div className="loginScreen">
      <div className="loginScreen_gradient">
        <div className="loginScreen_nav">
          <img
            className="loginScreen_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/archive/6/69/20220504140801%21Netflix_logo.svg"
            alt="Netflix logo"
          />
          <button
            onClick={() => setSignIn(true)}
            className="loginScreen_button"
          >
            Sign In
          </button>
        </div>
      </div>
      <div className="loginScreen_body">
        {signIn ? (
          <SignupScreen
            goBack={handleBackButton}
            email={emailRef.current?.value}
          />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more</h1>
            <h2>Watch anywhere. Cancel at anytime</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>
            <div className="loginScreen_input">
              <form action="">
                <input
                  ref={emailRef}
                  type="email"
                  placeholder="Email address"
                />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen_getStarted"
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
