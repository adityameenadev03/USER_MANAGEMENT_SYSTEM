import { instance } from "../../services/Service";
export const signupUser = async (param, data) => {
  const response = await instance.post(`${param}`, data);
  return response?.data;
};

export const loginUser = async (param, data) => {
  const response = await instance.post(`${param}`, data);
  return response?.data;
};
