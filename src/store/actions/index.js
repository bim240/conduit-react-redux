export function storeArticles(payload) {
  return { type: "ADD_ARTICLES", payload: payload };
}

export function storeUserInfo(payload) {
  if (payload) {
    return { type: "LOGIN", payload: payload };
  } else return { type: "LOGOUT", payload: null };
}
export function storeAllTag(payload) {
  return { type: "ADD_TAGS", payload: payload };
}
export function upDateActiveTag(payload) {
  return { type: "ACTIVE_TAGS", payload: payload };
}
