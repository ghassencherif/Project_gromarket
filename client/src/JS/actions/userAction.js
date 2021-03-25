import axios from "axios";
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REGISTER_USER,
  LOGIN_USER,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
} from "../constants/actionTypes";

export const register = (newUser) => async (dispatch) => {
  dispatch({
    type: REGISTER_USER,
  });
  try {
    const addRes = await axios.post("/register", newUser);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: addRes.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data,
    });
  }
};

export const login = (cred) => async (dispatch) => {
  dispatch({
    type: LOGIN_USER,
  });
  try {
    const loginRes = await axios.post("/login", cred);
    localStorage.setItem("token", loginRes.data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: loginRes.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};

export const getProfile = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: GET_PROFILE,
  });
  try {
    const isAuth = await axios.get("/profile", config);
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: isAuth.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAIL,
      payload: error.data,
    });
  }
};
export const addFiles = (id, newFile) => (dispatch) => {
  console.log(id, newFile);
  axios
    .post(`/upload/${id}`, newFile)
    .then((res) => dispatch(getProfile()))
    .catch((err) => console.log(err));
};

// export const editUser = (id, editUser) => (dispatch) => {
//   axios
//     .put(`/user/${id}`, editUser)
//     .then((res) => dispatch(getProfile()))
//     .catch((err) => console.log(err));
// };

// export const addAnnonce = (newAnnonce, id) => (dispatch) => {
//   axios
//     .post(`/user/${id}/addannonce`, newAnnonce)
//     .then((res) => dispatch(getProfile()))
//     .catch((err) => console.log("ad cannot add"));
// };

// export const getUserAnnonce = (id) => (dispatch) => {
//   axios
//     .get(`/user/userAnnonce/${id}`)
//     .then((res) => dispatch({ type: GET_USER_ANNONCE, payload: res.data }))
//     .catch((err) => console.log(err));
// };
