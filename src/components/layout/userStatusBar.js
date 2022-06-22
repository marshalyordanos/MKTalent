import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../api/api";
import RightSideBarUserCard from "./RightSideBarUserCard";

function UserStatus() {
  const light = useSelector((state) => state.mode.light);
  const [searchUser, setSearchUser] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const feachData = async () => {
      const users = await api.get("/profile");
      console.log("marshalwwwwwwwwwwwwww", users.data.data);
      setUsers(users.data.data);
      setSearchUser(users.data.data);
    };
    feachData();
  }, []);
  const [page, setPage] = useState(1);
  const pageNewest = () => {
    setPage(1);
  };
  const pageActive = () => {
    setPage(2);
  };
  const pagePopular = () => {
    setPage(3);
  };
  return (
    <div
      className={` box-content pb-4 ${
        !light ? "dark:text-white dark:bg-[#320064]" : "bg-[#F6F0FC]"
      }  w-[300px] rounded-xl`}
    >
      <h1
        className={`py-2 pt-3 text-xl border-blue-500 w-[73px] border-b-2 mx-3 my-8 ${
          !light && "dark:text-white "
        }`}
      >
        Members
      </h1>

      <div>
        <RightSideBarUserCard
          username="Abebe kebede"
          status="Registered two years ago"
        />
        <RightSideBarUserCard
          username="Abebe kebede"
          status="Registered two years ago"
        />
        <RightSideBarUserCard
          username="Abebe kebede"
          status="Registered two years ago"
        />
        <RightSideBarUserCard
          username="Abebe kebede"
          status="Registered two years ago"
        />
        <RightSideBarUserCard
          username="Abebe kebede"
          status="Registered two years ago"
        />
        <RightSideBarUserCard
          username="Abebe kebede"
          status="Registered two years ago"
        />
        <RightSideBarUserCard
          username="Abebe kebede"
          status="Registered two years ago"
        />
      </div>
    </div>
  );
}

export default UserStatus;
