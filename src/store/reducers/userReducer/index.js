let initialState = {
  userInfo: JSON.parse(localStorage.getItem("userInfo")) || null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, userInfo: action.payload };
    case "LOGOUT":
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
}
