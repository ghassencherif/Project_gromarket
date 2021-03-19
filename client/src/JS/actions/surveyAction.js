import axios from "axios";
import { GET_SURVEY } from "../constants/actionTypes";

export const getSurvey = () => (dispatch) => {
  axios
    .get("/admin/getAllSurvey")
    .then((res) => dispatch({ type: GET_SURVEY, payload: res.data }))
    .catch((err) => console.log(err));
};

export const deleteQuestion = (id) => (dispatch) => {
  console.log(id);
  axios
    .delete(`/admin/deleteSurvey/${id}`)
    .then((res) => dispatch(getSurvey()))
    .catch((err) => console.log(err));
};

export const addQuestion = (newQuestion) => (dispatch) => {
  console.log(newQuestion);
  axios
    .post("/admin/addSurvey", newQuestion)
    .then((res) => dispatch(getSurvey()))
    .catch((err) => console.log(err));
};
