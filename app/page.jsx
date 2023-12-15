"use client";
import {
  receiveMessage,
  resetCurrentMessage,
  sendMessage,
  setCurrentMessage,
  setReceiveMessage,
  socket,
} from "@/store/features/chat/chat-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
// const socket = io("wss://moisaic.onrender.com/", {
//   transports: ["websocket"],
//   auth: {
//     authorization: "Bearer " + "localS",
//   },
// });
export default function Home() {
  const { currentMessage, messages } = useSelector((state) => state.chat);
  console.log(messages);
  const dispatch = useDispatch();

  // const sendMessage = async () => {
  //   if (currentMessage !== "") {
  //     const messageData = {
  //       message: currentMessage,
  //     };

  //     socket.emit("send-message", messageData);
  //     console.log("message sent");
  //     setCurrentMessage("");
  //   }
  // };

  useEffect(() => {
    // dispatch(receiveMessage());

    socket.on("receive-message", (data) => {
      console.log("message received");
      console.log(data);
      dispatch(setReceiveMessage(data));
    });
    return () => {
      socket.off("receive-message");
    };
  }, [socket]);

  return (
    <>
      <h1>home page</h1>
      <div className="chat-window">
        <div className="chat-header">
          <p>Live Chat</p>
        </div>
        <div className="chat-body">
          {messages.map((val, key) => {
            return (
              <div
                key={key}
                className="chat-message"
                style={{
                  backgroundColor:
                    val?.message === currentMessage ? "#F0F0F0" : "#FFF",
                }}
              >
                <p>{val?.message ? val?.message : val}</p>
              </div>
            );
          })}
        </div>
        <div className="chat-footer">
          <input
            type="text"
            placeholder="Hey..."
            onChange={(e) => {
              dispatch(setCurrentMessage(e.target.value));
            }}
            value={currentMessage}
          />
          <button
            onClick={() => {
              dispatch(sendMessage(currentMessage));
              dispatch(resetCurrentMessage(currentMessage));
            }}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}
