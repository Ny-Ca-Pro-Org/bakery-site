import "./CSS/Auth.css";
const Auth = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className="login-title">
          Signup <span></span>{" "}
        </h2>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="enter firstname"
        />
        <input
          type="text"
          name="lastname"
          id="larstname"
          placeholder="enter lastname"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="login-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Your Password"
          className="login-input"
        />
        <input
          type="password"
          name="confPass"
          placeholder="Confirm Password"
          className="login-input"
        />
        <div className="login-links">
          <a href="#">Forgot password?</a>
          <a href="login">Already have account?</a>
        </div>
        <button type="submit" className="login-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Auth;
