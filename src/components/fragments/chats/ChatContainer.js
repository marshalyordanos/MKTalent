import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../../api/api";
import { useQuery } from "react-query";
import axios from "axios";
const ChatContainer = ({ currentChat }) => {
  const [messages, setMessages] = useState([]);

  const {
    data: chats,
    error,
    isLoading,
  } = useQuery(
    "chats",
    () =>
      api
        .post(
          "/addchats",
          {
            to: currentChat?.user._id,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": true,
              authorization: `Bearer ${data.token}`, /////////////////////////////////////////////////////////////////////////////////
            },
          }
        )
        .then((res) => {
          setMessages(res.data.chats);
          return res.data.chats;
        }),
    {
      refetchInterval: 1000,
      refetchIntervalInBackground: true,
    }
  );
  const data = useSelector((state) => state.userAuth.data);
  const [profile, setProfile] = useState("");
  const [chatData, setChatData] = useState({
    message: "",
    to: "",
  });
  const [input, setInput] = useState();
  const [arrivalMessage, setArrivalMessage] = useState(null);
  console.log(
    "lllllllllllooooooooooooogggggggggggggiiiiiiiiiinmnnnnnnnnnn",
    chats
  );
  console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;", data.data);
  useEffect(() => {
    const feachdata = async () => {
      const x = await JSON.parse(localStorage.getItem("profile"));
      setProfile(x);
    };
    feachdata();
  }, []);
  //   useEffect(() => {
  //     const feachdata = async () => {
  //       const response = await api.post(
  //         "/addchats",
  //         {
  //           to: currentChat?.user._id,
  //         },
  //         {
  //           headers: {
  //             "Access-Control-Allow-Origin": true,
  //             authorization: `Bearer ${data.token}`, /////////////////////////////////////////////////////////////////////////////////
  //           },
  //         }
  //       );
  //       console.log(
  //         "++++++++++++++++++++++++++++++++++++++++++",
  //         response.data,
  //         currentChat?.user._id
  //       );
  //       setMessages(response.data.chats);
  //     };
  //     feachdata();
  //   }, [currentChat]);

  const sendHandler = async (e) => {
    const x = await api.post(
      "/chats",
      {
        message: input,
        to: currentChat.user._id,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": true,
          authorization: `Bearer ${data.token}`, /////////////////////////////////////////////////////////////////////////////////
        },
      }
    );
    setMessages([
      ...messages,
      { message: input, users: [data.data._id, currentChat.user._id] },
    ]);
    setInput("");
  };

  return (
    <div class="flex flex-col col-12 col-lg-7 col-xl-9">
      <div class="py-2 px-4 border-bottom d-none d-lg-block">
        <div class="d-flex align-items-center py-1">
          <div class="position-relative">
            <img
              src={`/assets/img/profile/${currentChat?.profileImage}`}
              class="rounded-circle mr-1"
              alt="Sharon Lessman"
              width="40"
              height="40"
            />
          </div>
          <div class="flex-grow-1 pl-3">
            <strong>{currentChat?.user.username}</strong>
            <div class="text-muted small">
              <em>{/* tping...... */}</em>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          maxHeight: "60vh",
          display: "flex",
          flexDirection: "column-reverse",
        }}
        class="md:w-[600px] overflow-y-scroll flex-1 position-relative flex-1"
      >
        <div class=" p-4">
          {messages.map((message) => {
            return data.data._id == message.users[0] ? (
              <div class="chat-message-right pb-4">
                <div>
                  <img
                    src={`/assets/img/profile/${profile?.profileImage}`}
                    class="rounded-circle mr-1"
                    alt="Chris Wood"
                    width="40"
                    height="40"
                  />
                  <div class="text-muted small text-nowrap mt-2">2:33 am</div>
                </div>
                <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                  <div class="font-weight-bold mb-1">You</div>
                  {message.message}
                </div>
              </div>
            ) : (
              <div class="chat-message-left pb-4">
                <div>
                  <img
                    src={`/assets/img/profile/${currentChat?.profileImage}`}
                    class="rounded-circle mr-1"
                    alt="Sharon Lessman"
                    width="40"
                    height="40"
                  />
                  <div class="text-muted small text-nowrap mt-2">2:44 am</div>
                </div>
                <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                  <div class="font-weight-bold mb-1">
                    {currentChat?.user.username}
                  </div>
                  {message.message}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div class="  flex-grow-0 py-3 px-4 border-top">
        <div class="input-group">
          <form onSubmit={sendHandler} className="flex flex-row w-full">
            <input
              type="text"
              class="form-control "
              value={input}
              placeholder="Type your message"
              onChange={(e) => setInput(e.target.value)}
              onkeydown={(e) => {
                if (e.target.va === "Enter") sendHandler();
              }}
            />
            <button type="submit" class="btn btn-primary ">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
