import Button from "./Button";

export default function InputContainer({ input, setInput, handleSendMessage }) {
  return (
    <div style={styles.inputContainer}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message here..."
        style={styles.input}
      />
      <Button handleClick={handleSendMessage} />
    </div>
  );
}

const styles = {
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
};
