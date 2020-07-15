import React from "react";
import Thead from "components/Thead";
import Tbody from "components/TbodyWithAction";
import Pagination from "components/Pagination";

function TableWithAction({
  thead,
  data,
  tbody,
  editUrl,
  handlePageClick,
  pages,
}) {
  return (
    <div className="table-responsive">
      <table className="table">
        <Thead text={thead} />
        <Tbody data={data} display={tbody} editUrl={editUrl} />
      </table>
      <Pagination pages={pages} handlePageClick={handlePageClick} />
    </div>
  );
}

export default TableWithAction;
