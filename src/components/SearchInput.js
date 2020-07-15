import React from "react";

const SearchInput = (props) => {
  const { search, handleChange, keyPress } = props;
  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Masukkan Pencarian Disini"
        name="search"
        value={search}
        onKeyDown={keyPress}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
