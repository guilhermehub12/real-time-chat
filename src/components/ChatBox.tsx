import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
  QuerySnapshot,
} from "firebase/firestore"
import { db } from "../firebase"

interface MessageProps {
  id: string;
  text: string;
  name: string;
  avatar: string;
  createdAt: any;
  uid: string;
  message: string;
}

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<MessageProps[]>([])
  const scroll = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt"), limit(50));
    const unsubscribe = onSnapshot(q, (querySnapshot: QuerySnapshot<MessageProps>) => {
      let messages: MessageProps[] = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);


  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
    </main>
  );
};

export default ChatBox;