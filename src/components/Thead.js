import React from "react";

function Thead({ text }) {
  return (
    <thead>
      <tr>
        {text.map((text, index) => {
          return (
            <th key={index} scope="col">
              {text}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default Thead;
