import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import api from "../../api/api";
import RightSideBarUserCard from "./RightSideBarUserCard";

function UserStatus() {
  const light = useSelector((state) => state.mode.light);
  const [users, setUsers] = useState([]);
  const [searchUser, setSearchUser] = useState([]);

  useEffect(() => {
    const feachData = async () => {
      const users = await api.get("/profile");
      console.log("marshalwwwwwwwwwwwwww", users.data.data);
      setUsers(users.data.data);
      const yy = [
        ...users.data.data.filter((user) => user.user.role == "talent"),
      ];
      console.log("ppppppppppppppppppp", yy);
      yy.sort((a, b) => {
        return b.point - a.point;
      });
      console.log("llllllllll", yy);

      setSearchUser(yy.splice(0, 8));
    };
    feachData();
  }, []);

  console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&", searchUser);
  const pointHandler = () => {};

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
        {searchUser.map((user) => (
          <Link to={`/profile/${user.user._id}/activity/personal`}>
            <RightSideBarUserCard
              image={user.profileImage}
              username={user.username}
              point={user.point}
              userId={user.user._id}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default UserStatus;
