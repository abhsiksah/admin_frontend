import "./draftmerchandise.css";
import { DataGrid } from "@material-ui/data-grid";

import { userRows } from "../../../../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function DraftMerchandise() {
  const [data, setData] = useState(userRows);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Bill Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Approve/Reject</button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="draftmerchandise">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
