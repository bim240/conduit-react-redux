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

export function fetchUserInfo(props) {
  return function (dispatch) {
    console.log(props, "inside middleware");
    if (localStorage["conduit-token"]) {
      fetch(`https://conduit.productionready.io/api/user`, {
        method: "GET",
        headers: {
          authorization: `Token ${localStorage["conduit-token"]}`,
        },
      })
        .then((res) => res.json())
        // .then(res => console.log(res));
        .then((res) => {
          dispatch(storeUserInfo(res));
        });
    }
  };
}

export function fetchArticles() {
  return function (dispatch) {};
}
