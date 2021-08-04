import React from "react";
import { Redirect } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <p>HomePage</p>
      <Redirect to="/login">
        <span>to Login</span>
      </Redirect>
    </div>
  );
};

export default HomePage;
