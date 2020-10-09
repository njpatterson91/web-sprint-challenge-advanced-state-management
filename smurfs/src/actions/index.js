import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const ADD_DATA = "ADD_DATA";
export const ADD_SUCCESS = "ADD_SUCCESS";

export const fetchData = () => (dispatch) => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then((res) => {
      console.log("data is here");
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addData = (value) => (dispatch) => {
  dispatch({ type: ADD_DATA });
  axios
    .post("http://localhost:3333/smurfs", {
      name: value.name,
      age: value.age,
      height: value.height,
    })
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: ADD_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
