import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../api/api";

const Datatable = () => {
  const [data, setData] = useState(userRows);
  const [searchUser, setSearchUser] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const feachData = async () => {
      const users = await api.get("/profile");
      const user = users.data.data.filter((user) => user?.user?.role == "talent");
      console.log("marshalwwwwwwwwwwwwww", users?.data?.data);
      setUsers(user);
      setSearchUser(user);
    };
    feachData();
  }, []);
  const handleDelete = (id) => {
    setUsers(users.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/admin/${params.row.user._id}/profile`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <DataGrid
        className="datagrid w-[150vh]"
        rows={users}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
