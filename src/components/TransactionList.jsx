function TransactionList({ transactions }) {
  if (transactions.length === 0) {
    return <p style={{ color: "#475569" }}>No transactions yet. Add one above!</p>
  }

  return (
    <div style={{ marginBottom: "24px" }}>
      <h3 style={{ color: "#94a3b8" }}>Recent Transactions</h3>
      {transactions.map((t) => (
        <div
          key={t.id}
          style={{
            background: "#1e293b",
            padding: "14px 18px",
            borderRadius: "8px",
            marginBottom: "8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderLeft: `4px solid ${t.type === "income" ? "#10b981" : "#ef4444"}`,
          }}
        >
          <div>
            <p style={{ margin: 0, fontWeight: "bold" }}>{t.description}</p>
            <p style={{ margin: 0, fontSize: "12px", color: "#64748b" }}>
              {t.category} · {t.date}
            </p>
          </div>
          <span style={{ color: t.type === "income" ? "#10b981" : "#ef4444", fontWeight: "bold", fontSize: "16px" }}>
            {t.type === "income" ? "+" : "-"}${t.amount.toFixed(2)}
          </span>
        </div>
      ))}
    </div>
  )
}

export default TransactionList