import React from "react";

const ContentModalUser = (props) => {
  const { currentUser, toggleModal } = props;
  return (
    <div>
      <p>{currentUser.fullname}</p>
      <p>{currentUser.phone}</p>
      <p>{currentUser.email}</p>
      <button onClick={toggleModal()}>Visible Modal</button>
    </div>
  );
};

export default ContentModalUser;
