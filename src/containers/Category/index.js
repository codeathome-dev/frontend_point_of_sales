import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumb from "components/BreadCrumb";
import Table from "components/TableWithAction";
import SearchInput from "components/SearchInput";
import { fetchCategory } from "store/actions/category";
import { DotLoader } from "react-spinners";
import { Link } from "react-router-dom";
import axios from "configs";
import { SET_CATEGORY, SET_PAGES } from "store/types";

function Category() {
  const dispatch = useDispatch(); //this hook gives us dispatch method
  const category = useSelector((state) => state.category.category, [] || []); //this hook gives us redux store state
  const loading = useSelector((state) => state.loading.loading); //this hook gives us redux store state
  const pages = useSelector((state) => state.pagination.pages);
  console.log("category");
  console.log(category.rows);
  // state
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(8);

  const getCategory = (page = 1) => {
    // search, page, limit
    return dispatch(fetchCategory("", page, limit));
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handlePageClick = async (data) => {
    let { selected } = data;
    try {
      const token = localStorage.token;

      const category = await axios.get(
        `/category?search=${search}&page=${selected + 1}&limit=${limit}`,
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
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    if (e.key === "Enter") {
      if (e.target.value !== "") {
        dispatch(fetchCategory(e.target.value, 1, limit));
      } else {
        dispatch(fetchCategory("", 1, limit));
      }
    }
  };

  if (!category) return "";
  return (
    <>
      {loading === true ? (
        <DotLoader color={"#123abc"} loading={loading} />
      ) : (
        <div className="container">
          <BreadCrumb secondText="Category" />
          <SearchInput
            search={search}
            handleChange={handleChange}
            keyPress={handleChange}
          />
          <Table
            data={category.rows}
            thead={["No", "Name", "Action"]}
            tbody={["id", "name"]}
            editUrl={"/category/edit"}
            pages={pages}
            handlePageClick={handlePageClick}
          />

          <Link
            to="/admin/category/create"
            className="btn btn-primary"
            style={{ position: "fixed", bottom: "0", right: "0", margin: 20 }}
          >
            Tambah
          </Link>
        </div>
      )}
    </>
  );
}

export default Category;
