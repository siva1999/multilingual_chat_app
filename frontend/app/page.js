"use client";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatContainerRef = useRef(null);

  const handleSendMessage = async () => {
    if (!input.trim()) return; // Prevent sending empty messages

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await axios.post("http://localhost:8000/chat", {
        messages: newMessages,
      });
      setMessages([
        ...newMessages,
        { role: "assistant", content: response.data.response },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat container when messages update
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>AI-Powered Chat by Sivaprasad</h1>
      <div ref={chatContainerRef} style={styles.chatContainer}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.role === "user" ? "#0078d7" : "#eaeaea",
              color: msg.role === "user" ? "#fff" : "#000",
            }}
          >
            <strong>{msg.role === "user" ? "You" : "Mistral AI"}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
          style={styles.input}
        />
        <button onClick={handleSendMessage} style={styles.button}>
          Send
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#d9f2ff", 
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
  chatContainer: {
    width: "100%",
    height: "400px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    backgroundColor: "#f9f9f9",
  },
  message: {
    maxWidth: "70%",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  inputContainer: {
    marginTop: "20px",
    display: "flex",
    width: "100%",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#0078d7",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

