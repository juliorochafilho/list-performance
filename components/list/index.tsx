import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import stringPathToObject from "../../utils/functions";
import Line from "./line";

export default function List({
  elements,
  subElements,
  columns,
  subColumns,
}: any) {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleEdit = (element: any, key: any) => {
    console.log(element);
  };

  const handleClick = (element: any, key: any) => {
    setSelectedRow(element);
  };

  return (
    <div>
      <table>
        {columns.map((column: any, index: number) => (
          <th key={column.key}>{column.heading}</th>
        ))}
        {Object.values(elements).map((element: any, index: number) => (
          <>
            <Line
              element={element}
              columns={columns}
              isRowSelected={element._id === selectedRow}
              handleClick={(element: any, key: any) =>
                handleClick(element, key)
              }
              handleEdit={(element: any, key: any, newData: any) =>
                handleEdit(element, key)
              }
            />
          </>
        ))}
      </table>
    </div>
  );
}
