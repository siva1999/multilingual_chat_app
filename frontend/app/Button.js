export default function Button({ handleClick }) {
    return (
      <button onClick={handleClick} style={styles.button}>
        Send
      </button>
    );
  }
  
  const styles = {
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
  