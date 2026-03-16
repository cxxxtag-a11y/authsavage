export default function HomePage() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#0f172a",
      color: "white",
      fontFamily: "Arial, sans-serif",
      padding: 24,
    }}>
      <div style={{
        width: "100%",
        maxWidth: 520,
        background: "#111827",
        border: "1px solid #1f2937",
        borderRadius: 16,
        padding: 32,
        boxShadow: "0 10px 30px rgba(0,0,0,0.35)"
      }}>
        <h1 style={{ fontSize: 30, marginBottom: 12 }}>Login com Discord</h1>
        <p style={{ color: "#cbd5e1", marginBottom: 24 }}>
          Clique no botão abaixo para autenticar com Discord.
        </p>

        <a href="/api/auth/discord"
           style={{
             display: "inline-block",
             background: "#5865F2",
             color: "white",
             textDecoration: "none",
             padding: "14px 18px",
             borderRadius: 12,
             fontWeight: 700
           }}>
          Entrar com Discord
        </a>
      </div>
    </main>
  );
}