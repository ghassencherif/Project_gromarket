import axios from "axios";
import { GET_MARKETS } from "../constants/actionTypes";

export const getMarkets = () => (dispatch) => {
  axios
    .get("/all")
    .then((res) => dispatch({ type: GET_MARKETS, payload: res.data }))
    .catch((err) => console.log(err));
};

export const addMarket = (newMarket) => (dispatch) => {
  axios
    .post("/admin/addsupermarket", newMarket)
    .then((res) => dispatch(getMarkets()))
    .catch((err) => console.log(err));
};

export const deleteMarket = (id) => (dispatch) => {
  console.log(id);
  axios
    .delete(`/admin/deleteMarket/${id}`)
    .then((res) => dispatch(getMarkets()))
    .catch((err) => console.log(err));
};
