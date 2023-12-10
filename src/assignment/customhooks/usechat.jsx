// useChat.js
import { useState, useEffect } from 'react';

const useChat = (initialMessages = []) => {
  const [messages, setMessages] = useState(initialMessages);

  const sendMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  useEffect(() => {
    // Additional logic can be added here, e.g., connecting to a chat server
    // For simplicity, we're just logging the messages to the console in this example.
    console.log('New Message:', messages[messages.length - 1]);
  }, [messages]);

  return { messages, sendMessage };
};

export default useChat;
