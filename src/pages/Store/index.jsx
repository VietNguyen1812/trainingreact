import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { listCategory, getInfoCategory } from "../../store/actions/index";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";
import ContentModal from "./ModalCategory";

const ListCategory = ({ listCategory, getInfoCategory }) => {
  const CategoryUserStore = useSelector((res) => res.user);

  const [state, setState] = useState({
    visible: false,
    resultCategory: {},
  });
  useEffect(async () => {
    const getListCategory = await listCategory(
      "http://localhost:3000/store",
      CategoryUserStore.token
    );
    console.log(getListCategory);
  }, []);
  const toggleModal = (user) => {
    return () => {
      setState((prev) => ({
        ...prev,
        resultCategory: user || {},
        visible: !prev.visible,
      }));
    };
  };

  const listArray = ["CategoryId", "CategoryName", "IsActive"];

  return (
    <div>
      <h2>List Category</h2>
      <table border-collapse="collapse" width="100%">
        <tbody>
          <tr>
            {listArray.map((item, index) => (
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
          {CategoryUserStore.listCategory?.map((item) => (
            <tr key={item?.id}>
              <th border="1px solid #dddddd" text-align="left" padding="8px">
                {item?.id}
              </th>
              <th border="1px solid #dddddd" text-align="left" padding="8px">
              <span style={{ cursor: "pointer" }} onClick={toggleModal(item)}>
                  {item?.name}
                </span>
              </th>
              <th border="1px solid #dddddd" text-align="left" padding="8px">
                {item?.isActive ? "True" : "False"}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        visible={state.visible}
        children={
          <ContentModal
          resultCategory={state.resultCategory}
            toggleModal={toggleModal}
          />
        }
      />
    </div>
  );
};
export default connect(null, {
  listCategory,
  getInfoCategory,
})(ListCategory);
