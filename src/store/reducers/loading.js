import { LOADING, LOADING_FINISH } from "store/types";

const initialState = {
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };

    case LOADING_FINISH:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
