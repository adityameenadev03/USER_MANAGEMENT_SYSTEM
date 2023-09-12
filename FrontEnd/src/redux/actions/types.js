export const SET_USER = (data) => {
  return {
    type: "SET_USER",
    payload: data,
  };
};

export const REMOVE_USER = () => {
  return {
    type: "REMOVE_USER",
  };
};

export const EDIT_USER = (data) => {
  return {
    type: "EDIT_USER",
    payload: data,
  };
};

export const DELETE_USER = (id) => {
  return {
    type: "DELETE_USER",
    payload: id,
  };
};

export const GET_ALL_USER = (data) => {
  return {
    type: "GET_ALL_USER",
    payload: data,
  };
};

export const ADD_USER = (data) => {
  return {
    type: "ADD_USER",
    payload: data,
  };
};
