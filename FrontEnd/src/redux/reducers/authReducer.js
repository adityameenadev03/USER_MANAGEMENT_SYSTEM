const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: JSON.parse(localStorage.getItem("token")) || null,
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || null,
  error: false,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      localStorage.setItem("user", JSON.stringify(action.payload));
      const { token } = action.payload;
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      console.log("true", action.payload);
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
