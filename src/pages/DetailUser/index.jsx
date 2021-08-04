import React, { useState } from "react";
import { connect, useSelector } from "react-redux";


const DetailUser = () => {
  const userStore = useSelector((state) => state.user);
  console.log(userStore.currentUser);

  const [state, setState] = useState({
    visible: true,
  });

  

  return (
    <>
     
     
    </>
  );
};

export default connect(null)(DetailUser);
