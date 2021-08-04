import axios from "axios";

const header = (token) => {
  if (!token) return { "Content-Type": "application/json" };
  return {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };
};

export const fetchData = async (API_URL, token) => {
  try {    
    const headers = header(token);    
    const { data } = await axios.request({
      headers,
      method: "GET",
      url: API_URL,
    });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const postData = async (API_URL, data, token) => {
  try {
    const headers = header(token);
    const res = await axios.request({
      headers,
      method: "POST",
      url: API_URL,
      data,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const delData = async (API_URL, data,token) => {
  try {
    const headers = header(token);
    const res = await axios.request({
      headers,
      method: "DELETE",
      url: API_URL,
      data,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

