import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { listUser, getInfoUser } from "../../store/actions/index";
import Modal from "../../components/Modal";
import ContentModal from "./ModalUser";

const ListUser = ({ listUser, getInfoUser }) => {
  const UserReduxStore = useSelector((state) => state.user);

  const [state, setState] = useState({
    visible: false,
    currentUser: {},
  });

  useEffect(async () => {
    await listUser("http://localhost:3000/user", UserReduxStore.token);
  }, []);

  const thArr = ["UserName", "Password", "FullName", "Email", "Phone", "Role"];

  const toggleModal = (user) => {
    return () => {
      setState((prev) => ({
        ...prev,
        currentUser: user || {},
        visible: !prev.visible,
      }));
    };
  };

  return (
    <div>
      <h2>List User</h2>
      <table border-collapse="collapse" width="100%">
        <tbody>
          <tr>
            {thArr.map((item, index) => (
              <th
                key={index}
                border="1px solid #dddddd"
                text-align="left"
                padding="8px"
              >
                {item}
              </th>
            ))}
          </tr>
          {UserReduxStore.list?.map((item) => (
            <tr key={item?.id}>
              <th border="1px solid #dddddd" text-align="left" padding="8px">
                <span style={{ cursor: "pointer" }} onClick={toggleModal(item)}>
                  {item?.username}
                </span>
              </th>
              <th border="1px solid #dddddd" text-align="left" padding="8px">
                {item?.password}
              </th>
              <th border="1px solid #dddddd" text-align="left" padding="8px">
                {item?.fullname}
              </th>
              <th border="1px solid #dddddd" text-align="left" padding="8px">
                {item?.email}
              </th>
              <th border="1px solid #dddddd" text-align="left" padding="8px">
                {item?.phone}
              </th>
              <th border="1px solid #dddddd" text-align="left" padding="8px">
                {item?.role}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        visible={state.visible}
        children={
          <ContentModal
            currentUser={state.currentUser}
            toggleModal={toggleModal}
          />
        }
      />
    </div>
  );
};

export default connect(null, {
  listUser,
  getInfoUser,
})(ListUser);
