const initialState = {
  user: null,
  token: null,
  isLoggedIn: null,
  error: false,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.payload) {
    case "SET_USER":
      localStorage.setItem("user", JSON.stringify(action.payload));
      const { token } = action.payload;
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      return {
        ...state,
        user: { ...action.payload },
        token: token,
        isLoggedIn: true,
      };

    case "REMOVE_USER":
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("isLoggedIn");

      return {
        ...state,
        user: null,
        token: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
