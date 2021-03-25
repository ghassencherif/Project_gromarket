import axios from "axios";
import { GET_BOYS, GET_BOY } from "../constants/actionTypes";

export const getBoys = () => (dispatch) => {
  axios
    .get("/admin/getAllDeliveryBoy")
    .then((res) => dispatch({ type: GET_BOYS, payload: res.data }))
    .catch((err) => console.log(err));
};

export const getBoy = (id) => (dispatch) => {
  axios
    .get(`/admin/getAllDeliveryBoy/profile/${id}`)
    .then((res) => dispatch({ type: GET_BOY, payload: res.data }))
    .catch((err) => console.log(err));
};
