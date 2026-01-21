function Home() {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>🚧 Em Construção 🚧</h1>

      <p style={styles.text}>Este site está sendo preparado.</p>

      <footer style={styles.footer}>© {new Date().getFullYear()}</footer>
    </main>
  );
}

const styles = {
  container: {
    position: "fixed", // TRAVA no tamanho da viewport
    inset: 0, // top/right/bottom/left = 0
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#0f0f0f",
    color: "#fff",
    textAlign: "center",
    fontFamily: "system-ui, sans-serif",
    overflow: "hidden", // impede qualquer sobra
  },

  title: {
    fontSize: "clamp(2rem, 6vw, 3rem)",
    marginBottom: "0.75rem",
    lineHeight: 1.1,
  },

  text: {
    fontSize: "clamp(0.95rem, 3vw, 1.1rem)",
    opacity: 0.75,
    maxWidth: "90vw", // nunca ultrapassa a tela
  },

  footer: {
    position: "absolute",
    bottom: "1rem",
    fontSize: "0.8rem",
    opacity: 0.4,
  },
};

export default Home;
