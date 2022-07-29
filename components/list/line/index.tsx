import { useState } from "react";

export default function Line({
  element,
  columns,
  isRowSelected,
  handleClick,
  handleEdit,
}: any) {
  const [editingData, setEditingData] = useState("");
  const [editingKey, setEditingKey] = useState("");

  const handleClickEdit = (element: any, key: any) => {
    handleClick(element, key);
    setEditingKey(key);
  };

  return (
    <tr style={{ textAlign: "center" }} key={element._id}>
      {columns.map((column: any) => (
        <td
          onClick={() => handleClickEdit(element._id, column.key)}
          style={{ textAlign: "center" }}
          key={column.heading}
        >
          {isRowSelected && column.editable && column.key === editingKey ? (
            <input
              type="text"
              placeholder={element[column.key]}
              value={editingData}
              onChange={(e) => setEditingData(e.target.value)}
              onFocus={() => setEditingKey(column.key)}
            />
          ) : (
            element[column.key]
          )}
        </td>
      ))}
      <td>
        <button onClick={() => handleEdit(editingData, editingKey)}>
          Editar
        </button>
      </td>
    </tr>
  );
}
