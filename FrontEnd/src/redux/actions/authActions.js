import { instance } from "../../services/Service";
import { SET_USER, REMOVE_USER } from "./types";
import { toast } from "react-toastify";

// /

// export const loginUser = async (param, data) => {
//   const response = await instance.post(`${param}`, data);
//   return response?.data;
// };

export const loginUser = (param, data) => {
  console.log("hello, login");

  const loginUserAction = (data) => {
    return {
      type: SET_USER,
      payload: data,
    };
  };
  return async (dispatch, getState) => {
    try {
      const response = await instance.post(`${param}`, data);
      const result = await response?.data;
      toast.success("User LoggedIN");
      console.log(result);
      if (result) {
        dispatch(loginUserAction({ ...result }));
      }
    } catch (error) {
      console.log(error);
      toast.error("failed to Login user");
    }
  };
};

export const signupUser = (param, data) => {
  const signupUserAction = (data) => {
    return {
      type: SET_USER,
      payload: data,
    };
  };
  return async (dispatch, getState) => {
    try {
      const response = await instance.post(`${param}`, data);
      const result = await response?.data;
      toast.success("User signed up");
      console.log(result);
      if (result) {
        dispatch(signupUserAction({ ...result }));
      }
    } catch (error) {
      console.log(error);
      toast.error("failed to signup user");
    }
  };
};
