"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    // Add user message to the messages state
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    try {
      // Send messages to the FastAPI backend
      const response = await axios.post("http://localhost:8000/chat", {
        messages: newMessages,
      });
      // Add AI response to the messages state
      setMessages([
        ...newMessages,
        { role: "assistant", content: response.data.response },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div>
      <h1>AI-Powered Chat</h1>
      <div style={{ marginBottom: "20px" }}>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.role === "user" ? "You" : "AI"}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}
