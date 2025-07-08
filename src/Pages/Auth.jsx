import React from "react";
import { useNavigate } from "react-router"; // or "react-router-dom" depending on your version
import { apiLogin } from "../services/auth";
import { Link } from "react-router"; // consider using "react-router-dom"

const Auth = () => {
  const navigate = useNavigate(); // ✅ FIXED

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const payload = Object.fromEntries(formData.entries()); // ensure you send JSON, not FormData

    try {
      const response = await apiLogin(payload);

      localStorage.setItem("token", response.data.token);

      console.log(response);
      navigate("/admin-onion-dashboard"); // ✅ FIXED
      alert("successful");
    } catch (error) {
      console.log(error);
      alert("failed");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">
          Login <span></span>
        </h2>
        <input
          type="text"
          name="username"
          placeholder="username"
          className="login-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Your Password"
          className="login-input"
        />

        <button type="submit" className="login-button">
          Sign In {/* or "Login" */}
        </button>
      </form>
    </div>
  );
};

export default Auth;

// import React from "react";
// import { useNavigate } from "react-router";
// import { apiLogin } from "../services/auth";
// import { Link } from "react-router";

// const Auth = () => {
//   const nagivate = useNavigate();
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     try {
//       const response = await apiLogin(formData);

//       localStorage.setItem("token", response.data.accessTokenLogin);

//       console.log(response);
//       nagivate("/admin-onion-dashboard");
//       alert("successful");
//     } catch (error) {
//       console.log(error);
//       alert("failed");
//     }
//   };
//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2 className="login-title">
//           Login <span></span>{" "}
//         </h2>
//         <input
//           type="text"
//           name="username"
//           placeholder="username"
//           className="login-input"
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Your Password"
//           className="login-input"
//         />

//         <button type="submit" className="login-button">
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Auth;
