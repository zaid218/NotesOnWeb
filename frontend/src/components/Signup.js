
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import { host } from "../apiconfig";

const Signup = (props) => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    name: "",
    cpassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = credentials;

    if (password !== cpassword) {
      props.showAlert("password does not match", "danger");
      return;
    }

    try {
      const response = await axios.post(`${host}/api/auth/createuser`, {
        email,
        password,
        name,
      });

      const json = response.data;
      console.log(json);

      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        navigate("/success");
        props.showAlert("account created successfully", "success");
      } else {
        props.showAlert("invalid credentials", "danger");
      }
    } catch (error) {
      console.error("Signup error:", error);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            value={credentials.name}
            onChange={onChange}
            name="name"
            type="text "
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            onChange={onChange}
            value={credentials.email}
            name="email"
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onChange={onChange}
            value={credentials.password}
            name="password"
            type="password"
            className="form-control"
            id="password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            onChange={onChange}
            value={credentials.cpassword}
            name="cpassword"
            type="password"
            className="form-control"
            id="cpassword"
            minLength={1}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;