let initialState = {
  articles: null,
  activeArticle: null,
};

export default function articleReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ARTICLES":
      return { ...state, articles: action.payload };
    case "ACTIVE_ARTICLES":
      return { ...state, activeArticle: action.payload };
    default:
      return state;
  }
}
