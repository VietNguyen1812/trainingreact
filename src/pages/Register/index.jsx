import React, { useState } from "react";
import { signUp } from "../../store/actions";
import { connect, useSelector } from "react-redux";

const Register = ({ signUp }) => {
  const Render = useSelector((res) => res.user);

  const [state, setState] = useState({
    username: "",
    password: "",
    fullName: "",
    email: "",
    phone: "",
    role: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const role = formData.get("role");
    // console.log({ hoten:username, password, fullName, email, phone });

    await signUp("http://localhost:3000/user/signup", {
      username,
      password,
      fullname: fullName,
      email,
      phone,
      role,
    });
  };

  const handleChange = (value, key) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const keyArr = [
    { label: "User", name: "username" },
    { label: "Password", name: "password" },
    { label: "Fullname", name: "fullName" },
    { label: "Email", name: "email" },
    { label: "Phone", name: "phone" },
    { label: "Role", name: "role" },
  ];

  return (
    <div>
      <p> RegisterForm </p>
      <form onSubmit={handleSubmit}>
        {keyArr.map((item, index) => (
          <div key={index}>
            <span> {item.label} </span>
            <input
              name={item.name}
              value={state[`${item.name}`]}
              onChange={(e) => {
                handleChange(e.target.value, item.name);
              }}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      <p>Result : {Render.info.username}</p>
    </div>
  );
};
export default connect(null, {
  signUp,
})(Register);
