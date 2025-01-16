export default function Message({ message }) {
    return (
      <div
        style={{
          ...styles.message,
          alignSelf: message.role === "user" ? "flex-end" : "flex-start",
          backgroundColor: message.role === "user" ? "#0078d7" : "#eaeaea",
          color: message.role === "user" ? "#fff" : "#000",
        }}
      >
        <strong>{message.role === "user" ? "You" : "Mistral AI"}:</strong> {message.content}
      </div>
    );
  }
  
  const styles = {
    message: {
      maxWidth: "70%",
      padding: "10px",
      borderRadius: "10px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
  };
  