import { combineReducers } from "redux";
import users from "./users";
import loading from "./loading";
import category from "./category";
import pagination from "./pagination";

export default combineReducers({
  users,
  loading,
  category,
  pagination,
});
