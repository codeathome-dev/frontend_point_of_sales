import axios from "configs";
import { LOADING, LOADING_FINISH, SET_CATEGORY, SET_PAGES } from "store/types";

export const loading = { type: LOADING };
export const loadingFinish = { type: LOADING_FINISH };

export const fetchCategory = (search, page, limit) => {
  console.log("page");
  console.log(page);
  return async (dispatch) => {
    const token = localStorage.token;
    try {
      dispatch(loading);
      const category = await axios.get(
        `/category?search=${search}&page=${page}&limit=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("redux");
      console.log(category.data.data.rows);

      dispatch({
        type: SET_CATEGORY,
        category: category.data.data,
      });

      dispatch({
        type: SET_PAGES,
        pages: category.data.data.totalPage,
      });

      dispatch(loadingFinish);
    } catch (error) {
      console.log(error);
    }
  };
};

export const categoryCreate = (value, history) => {
  const token = localStorage.token;
  console.log(value);
  axios
    .post(
      "/category",
      { name: value },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      console.log(res);
      history.push("/admin/category");
    })
    .catch((err) => {
      console.log(err.response);
    });
};
