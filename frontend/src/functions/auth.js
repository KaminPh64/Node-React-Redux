import axios from "axios";

export const register = async (data) => {
  try {
    const res = await axios.post(process.env.REACT_APP_API + "/register", data);
    console.log("Server Response:", res);
    return res;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }

  // await axios.post(process.env.REACT_APP_API + "/register", data);
};

export const login = async (data) => {
  try {
    const res = await axios.post(process.env.REACT_APP_API + "/login", data);
    console.log("Server Response:", res);
    return res;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }

  // await axios.post(process.env.REACT_APP_API + "/login", data);
};

export const currentUser = async (authtoken) => {
  try {
    const res = await axios.post(
      process.env.REACT_APP_API + "/current-user",
      {},
      {
        headers: {
          authtoken,
        },
      }
    );
    console.log("Server Response:", res);
    return res;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};
