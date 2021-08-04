import { fetchData, postData } from "../../api/index";

export const signIn = (url, data) => async (dispatch) => {
  try {
    const { token } = await postData(url, data);
    await dispatch({
      type: "signin",
      payload: { token },
    });
    return token;
  } catch (err) {
    console.log(err);
  }
};

export const signUp = (url, data) => async (dispatch) => {
  try {
    const user = await postData(url, data);
    if (user.exception) return;

    await dispatch({
      type: "signup",
      payload: { user },
    });
    return user;
  } catch (err) {
    console.log(err);
  }
};

export const listUser = (url, token) => async (dispatch) => {
  try {
    const list = await fetchData(url, token);
    if (list.exception) return;

    await dispatch({
      type: "getListUser",
      payload: { listUser: list },
    });
    return list;
  } catch (err) {
    console.log(err);
  }
};

export const listCategory = (url, token) => async (dispatch) => {
  try {
    const getList = await fetchData(url, token);
    if (getList.exception) return;
    await dispatch({
      type: "getListCategory",
      payload: { listCategory: getList },
    });
    return getList;
  } catch (err) {
    console.log(err);
  }
};
export const createCategory = (url, data, token) => async (dispatch) => {
  try {
    const createCategory = await postData(url, data, token);
    if (createCategory.exception) return;
    await dispatch({
      type: "createCategory",
      payload: { createCategory },
    });
    return createCategory;
  } catch (err) {
    console.log(err);
  }
};

export const getInfoUser = (user) => async (dispatch) => {
  await dispatch({
    type: "getDetailUser",
    payload: { user },
  });
};
export const getInfoCategory = (createCategory) => async (dispatch) => {
  await dispatch({
    type: "getDetailCategory",
    payload: { createCategory },
  });
};
