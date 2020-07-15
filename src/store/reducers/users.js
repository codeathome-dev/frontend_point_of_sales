import { SET_TOKEN } from "store/types";

let token = localStorage.getItem("token");
if (!token) {
  token = "";
}
const initialState = {
  token: token,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
}
