import { useState } from "react";

export default function Line({
  element,
  columns,
  isRowSelected,
  handleClickRow,
}: any) {
  const [editingData, setEditingData] = useState("");
  const [editingElement, setEditingElement] = useState({});
  const [editingColumn, setEditingColumn] = useState({
    key: null,
    handleEdit: (
      editingElement: any,
      editingColumn: any,
      editingData: any
    ) => {},
  });

  const handleClickEdit = (element: any, column: any) => {
    handleClickRow(element);
    setEditingColumn(column);
    setEditingElement(element);
  };

  return (
    <tr style={{ textAlign: "center" }} key={element._id}>
      {columns.map((column: any) => (
        <td
          onClick={() => handleClickEdit(element, column)}
          style={{ textAlign: "center" }}
          key={column.heading}
        >
          {isRowSelected &&
          column.editable &&
          column.key === editingColumn.key ? (
            <input
              type="text"
              placeholder={element[column.key]}
              value={editingData}
              onChange={(e) => setEditingData(e.target.value)}
              onFocus={() => setEditingColumn(column)}
            />
          ) : (
            element[column.key]
          )}
        </td>
      ))}
      <td>
        <button
          onClick={() =>
            editingColumn.handleEdit(editingElement, editingColumn, editingData)
          }
        >
          Editar
        </button>
      </td>
    </tr>
  );
}
