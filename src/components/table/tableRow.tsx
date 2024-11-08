import React from "react";

interface TableRowProps {
  name: string;
  width: any;
}

const TableRow: React.FC<TableRowProps> = ({ name, width }) => {
  return (
    <td className="rows" style={{ maxWidth: `${width}%` }}>
      {name}
    </td>
  );
};

export default TableRow;
