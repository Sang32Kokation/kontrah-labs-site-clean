export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
        Kontrah Labs
      </h1>
      <p style={{ marginTop: "1rem", fontSize: "1.2rem", color: "#555" }}>
        Performance marketing for brands that want speed, clarity, and scale.
      </p>

      <a 
        href="mailto:hello@kontrahlabs.com"
        style={{
          display: "inline-block",
          marginTop: "2rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#3b82f6",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "600"
        }}
      >
        Work With Us
      </a>
    </main>
  );
}
