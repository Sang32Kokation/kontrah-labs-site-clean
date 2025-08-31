export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#0f172a",
      color: "white",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
        Kontrah Labs
      </h1>
      <p style={{ marginTop: "1rem", fontSize: "1.3rem", color: "#94a3b8" }}>
        Performance marketing for brands that want speed, clarity, and scale.
      </p>
      <div style={{ marginTop: "2rem" }}>
        <a href="mailto:hello@kontrahlabs.com" style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#3b82f6",
          borderRadius: "8px",
          color: "white",
          textDecoration: "none",
          fontWeight: "600"
        }}>
          Work With Us
        </a>
      </div>
    </main>
  );
}
