import Message from "./Message";

export default function ChatContainer({ messages, chatContainerRef }) {
  return (
    <div ref={chatContainerRef} style={styles.chatContainer}>
      {messages.map((msg, index) => (
        <Message key={index} message={msg} />
      ))}
    </div>
  );
}

const styles = {
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
};
