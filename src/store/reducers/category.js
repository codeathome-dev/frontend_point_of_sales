import { SET_CATEGORY } from "store/types";

const initialState = {
  category: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.category,
      };
    default:
      return state;
  }
}
