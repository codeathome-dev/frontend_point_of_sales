import { SET_PAGES } from "store/types";

const initialState = {
  pages: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PAGES:
      return {
        ...state,
        pages: action.pages,
      };

    default:
      return state;
  }
}
