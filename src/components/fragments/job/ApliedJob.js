import { Space, Table } from "antd";

import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import api from "../../../api/api";
import porofileApi from "../../../api/profileApi";
const AppliedJob = () => {
  const jobId = useParams().id;
  const userData = useSelector((state) => state.userAuth.data);

  const [profile, setProfile] = useState({});
  console.log(
    "::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;;",
    profile.jobs
  );

  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  useEffect(() => {
    const feachData = async () => {
      const profile = await porofileApi(userData.data._id);
      setProfile(profile);
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

  const data = profile.jobs;

  const columns = [
    {
      title: "jobtitle",
      dataIndex: "jobtitle",
      key: "jobtitle",

      filteredValue: filteredInfo.jobtitle || null,
      onFilter: (value, record) => record.jobtitle.includes(value),
      sorter: (a, b) => a.jobtitle.length - b.jobtitle.length,
      sortOrder: sortedInfo.columnKey === "jobtitle" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Number of Aplied User",
      key: "appliedUser",
      dataIndex: "appliedUser",
      //   defaultSortOrder: "descend",
      sorter: (a, b) => a.appliedUser.length - b.appliedUser.length,
      render: (_, record) => (
        <Space size="middle">
          {/* <button>Invite {record.name}</button> */}

          {record.appliedUser.length}
        </Space>
      ),
    },
    {
      title: "Job Type",
      dataIndex: "jobtype",
      key: "jobtype",
      sorter: (a, b) => a.jobtype.length - b.jobtype.length,
      sortOrder: sortedInfo.columnKey === "jobtype" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Status",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {/* <button>Invite {record.name}</button> */}
          {profile?.approvedJob.includes(record._id) ? (
            <p> Accepted</p>
          ) : (
            <p> Applied</p>
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
          <Link to={`/jobs/${record._id}`} variant="contained" color="success">
            View Description
          </Link>
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
      {/* <div className="p-4">
        <h1>Applied User</h1>
      </div> */}
      <Table
        columns={columns}
        dataSource={data}
        onChange={handleChange}
      ></Table>
    </>
  );
};

export default AppliedJob;
