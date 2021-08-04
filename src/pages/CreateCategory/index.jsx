import React, { useState } from "react";
import { createCategory } from "../../store/actions";
import { connect, useSelector } from "react-redux";

const CreateCategory = ({ createCategory }) => {
  const useReduxstore = useSelector((result) => result.user);
  const [state, setState] = useState({
    name: "",
  });

  const handleChange = (value) => {
    setState((prev) => ({ ...prev, name: value }));
  };

  const handleClick = async () => {
    const category = await createCategory(
      "http://localhost:3000/store",
      { name: state.name },
      useReduxstore.token
    );
  };

  return (
    <div>
      <p>Create Category</p>
      <span>Name Category</span>
      <input
        name="nameCategory"
        value={state.name}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
      <button onClick={handleClick}>Submit</button>
      <p>Result : {useReduxstore.result.name}</p>
    </div>
  );
};
export default connect(null, { createCategory })(CreateCategory);
