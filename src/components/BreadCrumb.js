import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = (props) => {
  const { secondText, thirdText, secondUrl } = props;
  return (
    <nav aria-label="breadcrumb" className="mt-3">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {!thirdText && (
          <li className="breadcrumb-item active" aria-current="page">
            {secondText}
          </li>
        )}
        {thirdText && (
          <li className="breadcrumb-item" aria-current="page">
            <Link to={secondUrl}>{secondText}</Link>
          </li>
        )}
        {thirdText && (
          <li className="breadcrumb-item active" aria-current="page">
            {thirdText}
          </li>
        )}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
