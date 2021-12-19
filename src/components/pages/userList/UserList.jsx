import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { userRows } from "../../../dummyData";
import { useState } from "react";

export default function UserList() {
  const [tableData, setTableData] = useState(userRows);
  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    {
      field: "user",
      headerName: "User",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListUserAvatar"
              src={params.row.avatar}
              alt=""
            />
            <span className="userListUsername">{params.row.username}</span>
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 130 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Spend",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="userListAction">
            <Link to={"/user/" + params.row.id}>
              <button className="userListActionEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListActionDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];
  // The filter() method creates a new array filled with elements that pass a test provided by a function.
  const handleDelete = (id) => {
    setTableData(tableData.filter((item) => item.id !== id));
  };
  return (
    <div className="userList">
      <DataGrid
        disableSelectionOnClick
        rows={tableData}
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
