"use client";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

// Login Component
function Login({ setLoggedIn, setUserName, switchToRegister }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8000/login", {
        name,
        password,
      });
      if (response.status === 200) {
        setUserName(name); // Store the username in the parent component
        setLoggedIn(true); // User authenticated
      }
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div style={authStyles.container}>
      <h2 style={authStyles.title}>Login</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={authStyles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={authStyles.input}
      />
      <button onClick={handleLogin} style={authStyles.button}>
        Login
      </button>
      {error && <p style={authStyles.error}>{error}</p>}
      <p style={authStyles.link} onClick={switchToRegister}>
        Don't have an account? Register here
      </p>
    </div>
  );
}

// Register Component
function Register({ switchToLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:8000/register", {
        name,
        password,
      });
      if (response.status === 200) {
        setSuccess("Registration successful! Please log in.");
        setName("");  // Optionally reset form fields
        setPassword("");
      }
    } catch (err) {
      setError("Registration failed. Try again.");
    }
  };

  return (
    <div style={authStyles.container}>
      <h2 style={authStyles.title}>Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={authStyles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={authStyles.input}
      />
      <button onClick={handleRegister} style={authStyles.button}>
        Register
      </button>
      {success && <p style={authStyles.success}>{success}</p>}
      {error && <p style={authStyles.error}>{error}</p>}
      <p style={authStyles.link} onClick={switchToLogin}>
        Already have an account? Log in here
      </p>
    </div>
  );
}

// Chat Component (Main Chat Interface)
function Chat({ userName }) {
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
    <div style={chatStyles.container}>
      <h1 style={chatStyles.title}> AI-Powered Chat by Sivaprasad </h1>
      <h3>Hello {userName}!</h3>
      <div ref={chatContainerRef} style={chatStyles.chatContainer}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...chatStyles.message,
              alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.role === "user" ? "#0078d7" : "#eaeaea",
              color: msg.role === "user" ? "#fff" : "#000",
            }}
          >
            <strong>{msg.role === "user" ? "You" : "Mistral AI"}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <div style={chatStyles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
          style={chatStyles.input}
        />
        <button onClick={handleSendMessage} style={chatStyles.button}>
          Send
        </button>
      </div>
    </div>
  );
}

// Home Component (Managing Authentication and Chat UI)
export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState(""); // Store the user's name
  const [isRegistering, setIsRegistering] = useState(false);

  const switchToRegister = () => setIsRegistering(true);
  const switchToLogin = () => setIsRegistering(false);

  if (!loggedIn) {
    return isRegistering ? (
      <Register switchToLogin={switchToLogin} />
    ) : (
      <Login setLoggedIn={setLoggedIn} setUserName={setUserName} switchToRegister={switchToRegister} />
    );
  }

  return <Chat userName={userName} />; // Pass the userName prop to Chat
}

// Styles for Authentication Pages
const authStyles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "400px",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "20px",
    marginBottom: "20px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
  success: {
    color: "green",
    marginTop: "10px",
  },
  link: {
    color: "#007bff",
    cursor: "pointer",
    marginTop: "10px",
  },
};

// Styles for Chat Interface
const chatStyles = {
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
