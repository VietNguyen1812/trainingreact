import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { listCategory ,getInfoCategory} from "../../store/actions/index";
import { Link } from "react-router-dom";

const ListCategory = ({ listCategory ,getInfoCategory}) => {
  const CategoryUserStore = useSelector((res) => res.user);

  useEffect(async () => {
    const getListCategory = await listCategory(
      "http://localhost:3000/store",
      CategoryUserStore.token
    );
    console.log(getListCategory);
  }, []);
  const getDetailCategory = (user) => {
    return async () => {
      await getInfoCategory(user);
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
              <Link to={{ pathname: "/detailcategory" }}>
                  <span onClick={getDetailCategory(item)}>{item?.name}</span>
                </Link>
              </th>
              <th border="1px solid #dddddd" text-align="left" padding="8px">
                {item?.isActive ? "True" : "False"}
              </th>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
};
export default connect(null, {
  listCategory,getInfoCategory,
})(ListCategory);
