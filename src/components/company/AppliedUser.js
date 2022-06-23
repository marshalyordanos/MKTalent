import { Space, Table } from "antd";

import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../api/api";
import { useSelector } from "react-redux";
const AppliedUser = () => {
  const jobId = useParams().id;
  const userData = useSelector((state) => state.userAuth.data);

  const [job, setJob] = useState({});
  console.log("::::::::::::::::::::::::::::::::::::::::::::::", job);

  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  useEffect(() => {
    const feachData = async () => {
      const job = await api.get(`/job/${jobId}`);
      setJob(job.data.data);
    };
    feachData();
  }, []);
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

  const setAgeSort = () => {
    setSortedInfo({
      order: "descend",
      columnKey: "age",
    });
  };

  const approveHandler = async (record) => {
    console.log(
      "**********************************************************************************",
      job
    );
    const x = await api.patch(
      `/job/updatejob/${job._id}`,
      {
        approvedUser: [...job.approvedUser, record._id],
      },
      {
        headers: {
          "Access-Control-Allow-Origin": true,
          authorization: `Bearer ${userData?.token}`, /////////////////////////////////////////////////////////////////////////////////
        },
      }
    );

    const yy = await api.get(
      `/profile/filter/${record._id}`,

      {
        headers: {
          "Access-Control-Allow-Origin": true,
          authorization: `Bearer ${userData?.token}`, /////////////////////////////////////////////////////////////////////////////////
        },
      }
    );
    console.log(
      "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",
      yy
    );
    const y = await api.patch(
      `/profile/${yy.data.data._id}`,
      {
        approvedJob: [...yy.data.data.approvedJob, job._id],
      },
      {
        headers: {
          "Access-Control-Allow-Origin": true,
          authorization: `Bearer ${userData?.token}`, /////////////////////////////////////////////////////////////////////////////////
        },
      }
    );
    setJob({ ...job, approvedUser: [...job.approvedUser, record._id] });
  };

  const data = job.appliedUser;

  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",

      filteredValue: filteredInfo.username || null,
      onFilter: (value, record) => record.username.includes(value),
      sorter: (a, b) => a.username.length - b.username.length,
      sortOrder: sortedInfo.columnKey === "username" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "email",
      dataIndex: "email",
      key: "emial",

      filteredValue: filteredInfo.email || null,
      onFilter: (value, record) => record.email.includes(value),
      sorter: (a, b) => a.email.length - b.email.length,
      sortOrder: sortedInfo.columnKey === "email" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      sorter: (a, b) => a.gender.length - b.gender.length,
      sortOrder: sortedInfo.columnKey === "gender" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Status",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {/* <button>Invite {record.name}</button> */}
          {job?.approvedUser.includes(record._id) ? (
            <Button variant="contained" color="success">
              Approved
            </Button>
          ) : (
            <Button onClick={() => approveHandler(record)} color="secondary">
              Approve
            </Button>
          )}
        </Space>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {/* <button>Invite {record.name}</button> */}
          <Link
            to={`/company/${record._id}/profile`}
            variant="contained"
            color="success"
          >
            View Profile
          </Link>
        </Space>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {/* <button>Invite {record.name}</button> */}
          <Button
            onClick={() => approveHandler(record)}
            variant="contained"
            color="error"
          >
            Cancel
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <>
      {/* <Space
        style={{
          marginBottom: 16,
        }}
      >
        <Button onClick={setAgeSort}>Sort age</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space> */}
      <div className="p-4">
        <h1>Applied User</h1>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        onChange={handleChange}
      ></Table>
    </>
  );
};

export default AppliedUser;
