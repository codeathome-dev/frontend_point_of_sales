import React from "react";
import { Link } from "react-router-dom";
function TbodyWithAction({
  data,
  display,
  editUrl,
  deleteAction,
  customAction,
  actionNotDisplay,
}) {
  // supaya bisa dinamis kita butuh cek data nya dengan membandingan display dan data yang dikirim dari pages
  // Object.keys(data).map((key) => {
  //   if (display.indexOf(key) > -1) {
  if (!data) return "";
  // console.log(display.indexOf());
  return (
    <tbody>
      {data.length ? (
        data.map((data, index) => {
          return (
            <tr key={index}>
              {/* cek jika key lebih dari -1 makan kita tampilin data nya */}
              {Object.keys(data).map((key) => {
                if (display.indexOf(key) > -1) {
                  return (
                    <td key={data[key]}>
                      {data[key] === "id" ? data[key] + 1 : data[key]}
                    </td>
                  );
                }
              })}
              {!actionNotDisplay && (
                <td>
                  {editUrl && (
                    <Link
                      className="btn btn-warning"
                      to={`${editUrl}/${data.id}`}
                    >
                      <svg
                        className="bi bi-pencil"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
                        />
                      </svg>
                    </Link>
                  )}
                </td>
              )}
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan={display.length + 1} style={{ textAlign: "center" }}>
            Tidak Ditemukan Data
          </td>
        </tr>
      )}
    </tbody>
  );
}

export default TbodyWithAction;
