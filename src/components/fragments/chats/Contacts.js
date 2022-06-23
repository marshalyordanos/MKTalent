import React, { useState } from "react";

const Contacts = ({ contacts, changeChat }) => {
  const [currentSelected, setCurrentSelected] = useState(undefined);
  const [name, setName] = useState("");

  const [searchUser, setSearchUser] = useState(contacts);
  const [users, setUsers] = useState([]);
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  const handleChange = (e) => {
    // setSearch(e.target.value);
    const xx = contacts.filter((user) =>
      user.user.username.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    console.log("pppppp", xx);
    setSearchUser(xx);
  };
  return (
    <div class="col-12 col-lg-5 col-xl-3 border-right">
      <div class="px-4 d-none d-md-block">
        <div class="d-flex align-items-center">
          <div class="flex-grow-1">
            <input
              onChange={handleChange}
              type="text"
              class="form-control my-3"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>

      {searchUser.map((user, i) => {
        return (
          <div onClick={() => changeCurrentChat(i, user)}>
            <a href="#" class="list-group-item list-group-item-action border-0">
              {/* <div class="badge bg-success float-right">5</div> */}
              <div class="d-flex align-items-start">
                <img
                  src={`/assets/img/profile/${user.profileImage}`}
                  class="rounded-circle mr-1"
                  width="40"
                  height="40"
                />
                <div class="flex-grow-1 ml-3">
                  {user.user.username}
                  <div class="small">
                    <span class="fas fa-circle chat-online"></span> Online
                  </div>
                </div>
              </div>
            </a>
          </div>
        );
      })}

      <hr class="d-block d-lg-none mt-1 mb-0" />
    </div>
  );
};

export default Contacts;
