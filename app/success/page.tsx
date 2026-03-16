type Props = {
  searchParams: {
    id?: string;
    username?: string;
    error?: string;
  };
};

export default function SuccessPage({ searchParams }: Props) {
  const { id, username, error } = searchParams;

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#020617",
      color: "white",
      fontFamily: "Arial"
    }}>
      <div style={{
        background: "#111827",
        border: "1px solid #1f2937",
        borderRadius: 16,
        padding: 32
      }}>
        {error ? (
          <>
            <h1>Erro no login</h1>
            <p>{error}</p>
          </>
        ) : (
          <>
            <h1>Login concluído</h1>
            <p><b>Usuário:</b> {username}</p>
            <p><b>ID:</b> {id}</p>
          </>
        )}
      </div>
    </main>
  );
}