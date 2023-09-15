import {
  ADD_USER,
  GET_ALL_USER,
  DELETE_USER,
  EDIT_USER,
} from "../actions/types";

const initialState = {
  dataArray: JSON.parse(localStorage.getItem("dataArray")) || [],
  error: null,
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER:
      console.log(action.payload);
      localStorage.setItem("dataArray", JSON.stringify(action.payload));
      return { ...state, dataArray: [...action.payload] };

    case ADD_USER:
      console.log(action.payload);
      let newDataArray = [...state.dataArray, action.payload];
      localStorage.setItem("dataArray", JSON.stringify(newDataArray));
      return { ...state, dataArray: [...newDataArray] };

    case DELETE_USER:
      console.log(action.payload);
      let dataArrayAfterDelete = [...state.dataArray].filter((item) => {
        console.log(item._id);
        return item._id !== action.payload;
      });
      console.log(dataArrayAfterDelete);
      localStorage.setItem("dataArray", JSON.stringify(dataArrayAfterDelete));
      return { ...state, dataArray: [...dataArrayAfterDelete] };

    case EDIT_USER:
      let dataArrayAfterEdit = [...state.dataArray].map((item) =>
        item._id == action.payload._id ? { ...action.payload } : item
      );
      localStorage.setItem("dataArray", JSON.stringify(dataArrayAfterEdit));
      console.log("dispatch");
      console.log("to be edit array", { ...action.payload });
      console.log("after edit", dataArrayAfterEdit);
      return { ...state, dataArray: [...dataArrayAfterEdit] };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    case "SET_LOADING":
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};

export default userReducer;
