import React, { useState } from "react";
import { signIn } from "../../store/actions";
import { connect, useSelector } from "react-redux";

import Input from "../../components/Input";
import { useHistory } from "react-router-dom";


const Login = ({ signIn }) => {
  const history = useHistory();
  const userStateRedux = useSelector((state) => state.user);
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // ngan su kien mac dinh cua form
    e.stopPropagation();

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    await signIn("http://localhost:3000/user/signin", {
      username,
      password,
    }).then(() => {
      history.push("/menu");
    });
  };

  const handleChangeInPut = (value, key) => {    
    setState((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      <p>Login Form</p>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <span style={{ marginRight: "20px" }}>Username:</span>
            <Input
              style={{ width: "200px" }}
              name="username"
              onChange={(e) => {
                handleChangeInPut(e.target.value, "username");
              }}
              value={state.username}
            />
          </div>
          <div>
            <span style={{ marginRight: "20px" }}>Password:</span>
            <Input
              style={{ width: "200px", marginTop: "4px" }}
              name="password"
              type="password"
              onChange={(e) => {
                handleChangeInPut(e.target.value, "password");
              }}
              value={state.password}
            />
          </div>
        </div>
        <p style={{ wordBreak: "break-all", width: "300px" }}>
          Token: {userStateRedux.token}
        </p>
        <button type="submit">Login</button>
      </form>    
    </div>
  );
};

export default connect(null, {
  signIn,
})(Login);
