import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

interface MessageProps {
  id: string;
  text: string;
  name: string;
  avatar: string;
  createdAt: any;
  uid: string;
  message: string;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const [user] = useAuthState(auth)


  return (
    <div
      className={`chat-bubble ${
        message.uid === user?.uid ? "right" : ""
      }`}
    >
      <img
        className="chat-bubble__left"
        src={message.avatar}
        alt="My user avatar"
      />
      <div className="chat-bubble__right">
        <p className="user-name">{message.name}</p>
        <p className="user-message">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;