const initialState = {
  allTag: null,
  activeTag: localStorage.getItem("active-tag") || null,
};

export default function tagsReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TAGS":
      return { ...state, allTag: action.payload };
    case "ACTIVE_TAGS":
      // console.log(state, "inside tag reducer");
      return {
        ...state,
        activeTag: action.payload,
      };
    default:
      return state;
  }
}
