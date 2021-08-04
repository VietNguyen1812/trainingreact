import React from "react";
import { connect, useSelector } from "react-redux";
const DetailCategory = () => {
  const useReduxStoreCategory = useSelector((state) => state.user);
  console.log(useReduxStoreCategory.resultCategory);

  return (
    <div>
      <h2>List Category</h2>
      <p>{useReduxStoreCategory.resultCategory.name}</p>
      <p>{useReduxStoreCategory.resultCategory.id}</p>
    </div>
  );
};
export default connect(null)(DetailCategory);
