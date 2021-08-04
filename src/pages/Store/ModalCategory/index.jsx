import React from "react";

const ContentModalCategory = (props) => {
  const { resultCategory, toggleModal } = props;
  return (
    <div>
      <p>{resultCategory.id}</p>
      <p>{resultCategory.name}</p>
      <button onClick={toggleModal()}>Visible Modal</button>
    </div>
  );
};
export default ContentModalCategory;
