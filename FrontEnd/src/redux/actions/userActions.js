import { DELETE_USER, ADD_USER, EDIT_USER, GET_ALL_USER } from "./types";

export const fetchAllUsers = (params) => {
  return async (dispatch, getState) => {
    console.log("fetching data");
    try {
      const response = await instance.get(`${params}`);
      const data = await response?.data?.data;
      console.log(data);
      if (data) {
        dispatch(GET_ALL_USER([...data]));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteUser = (param, id) => {
  return async (dispatch, getState) => {
    console.log("fetching data");
    try {
      const response = await instance.delete(`${param}`);
      const data = response;
      console.log(data);
      dispatch(DELETE_USER(id));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addUser = (param, body) => {
  return async (dispatch, getState) => {
    try {
      console.log(param, body);
      const response = await instance.post(`${param}`, body);
      const data = await response?.data?.data;
      console.log(data);
      if (data) {
        dispatch(ADD_USER({ ...data, personId: data.personId }));
      }
    } catch (err) {}
  };
};

export const editUser = (param, body) => {
  return async (dispatch, getState) => {
    try {
      const response = await instance.put(`${param}`, body);
      const data = await response?.data?.data;
      console.log(data);
      if (data) {
        dispatch(EDIT_USER({ ...data, personId: body.personId }));
      }
    } catch (err) {
      console.log(err);
    }
  };
};
