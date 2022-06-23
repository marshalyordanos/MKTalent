import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../api/api";

import { useQuery } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Contacts from "../components/fragments/chats/Contacts";
import ChatContainer from "../components/fragments/chats/ChatContainer";

const ChatPage = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const currentUser = useSelector((state) => state.userAuth.data.data);

  const [searchUser, setSearchUser] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const feachdata = async () => {
      if (currentUser) {
        if (currentUser) {
          const data = await api.get(`/profile/allusers/${currentUser?._id}`);

          setContacts(data.data);
          setSearchUser(data.data);
          // console.log("}}}}}}}}}}}}}}}}}}}}}}}}}}", data);
        } else {
          // navigate("/setAvatar");
        }
      }
    };

    feachdata();
  }, [currentUser]);
  const handleChange = (e) => {
    // setSearch(e.target.value);
    const xx = contacts.filter((user) =>
      user.user.username.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    console.log("pppppp", xx);
    setSearchUser(xx);
  };
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  return (
    <div className="">
      <main class="content">
        <div class="container p-0">
          <h1 class="h3 mb-3">Messages</h1>

          <div class="card">
            <div class="row g-0">
              {/* /**************************************************************************************** *********************/}
              <Contacts
                handleChange={handleChange}
                searchUser={searchUser}
                contacts={contacts}
                changeChat={handleChatChange}
              />
              <ChatContainer currentChat={currentChat} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatPage;
