import { useNavigate } from "react-router";
import "./CSS/Auth.css";
import { apiSignupVendor } from "../services/auth";
const Auth = () => {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const payload = Object.fromEntries(formData.entries()); // Converts FormData to plain JS object

    try {
      const res = await apiSignupVendor(payload);
      alert("this load was successfull");
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("failed");
    }
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">
          Signup <span></span>{" "}
        </h2>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="user name"
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
          name="confirmPassword"
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
