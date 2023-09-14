import { DELETE_USER, ADD_USER, EDIT_USER, GET_ALL_USER } from "./types";
import { instance } from "../../services/Service";
import { toast } from "react-toastify";
export const fetchAllUsers = (params) => {
  return async (dispatch, getState) => {
    try {
      const response = await instance.get(`${params}`);
      const data = await response?.data?.data;
      toast.success("Users Fetched");
      console.log(data);
      if (data) {
        dispatch(GET_ALL_USER([...data]));
      }
    } catch (error) {
      console.log(error);
      toast.error("failed to Fetch data");
    }
  };
};

export const deleteUser = (param, id) => {
  return async (dispatch, getState) => {
    try {
      const response = await instance.delete(`${param}`);
      const data = response;
      console.log(data);
      toast.success("User Deleted");
      dispatch(DELETE_USER(id));
    } catch (error) {
      console.log(error);
      toast.error("User Delete failed");
    }
  };
};

export const addUser = (param, body) => {
  return async (dispatch, getState) => {
    console.log("hello");
    try {
      console.log(param, body);
      const response = await instance.post(`${param}`, body);
      const data = await response?.data?.data;
      console.log(data);
      toast.success("Successfully added the user");
      if (data) {
        dispatch(ADD_USER({ ...data, personId: data.personId }));
      }
    } catch (err) {
      console.log(err);
      toast.error("Failed to add the user");
    }
  };
};

export const editUser = (param, body) => {
  return async (dispatch, getState) => {
    try {
      const response = await instance.put(`${param}`, body);
      const data = await response?.data?.data;
      console.log(data);
      toast.success("User Edited Successfully");
      if (data) {
        dispatch(EDIT_USER({ ...data, personId: body.personId }));
      }
    } catch (err) {
      console.log(err);
      toast.error("Failed to Edit User");
    }
  };
};
