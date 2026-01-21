function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🚧 Em Construção 🚧</h1>

      <p style={styles.text}>
        Este site ainda está sendo preparado com muito carinho.
      </p>

      <span style={styles.footer}>
        © {new Date().getFullYear()} • Em breve novidades
      </span>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f0f0f, #1a1a1a)",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "20px",
  },
  text: {
    fontSize: "1.2rem",
    maxWidth: "500px",
    marginBottom: "15px",
    opacity: 0.9,
  },
  footer: {
    marginTop: "30px",
    fontSize: "0.9rem",
    opacity: 0.6,
  },
};

export default Home;
