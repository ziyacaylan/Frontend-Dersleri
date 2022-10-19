import { useRef, useEffect } from "react";
import { useChat } from "../context/ChatContext";
import ChatItem from "./ChatItem";
import styles from "./styles.module.css";

function ChatList() {
  const { messages, setMessages } = useChat();

  // console.log(messages);
  return (
    <div className={`${styles.chatlist}`}>
      <div>
        {messages.map((item, key) => (
          <ChatItem key={key} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ChatList;
