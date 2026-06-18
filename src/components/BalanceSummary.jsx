function BalanceSummary({ transactions }) {
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0)

  const balance = totalIncome - totalExpense

  return (
    <div style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
      <div style={{ background: "#1e293b", padding: "16px", borderRadius: "10px", flex: 1 }}>
        <p style={{ color: "#94a3b8", margin: 0 }}>Balance</p>
        <h2 style={{ color: balance >= 0 ? "#10b981" : "#ef4444", margin: "4px 0" }}>
          ₹{balance.toFixed(2)}
        </h2>
      </div>
      <div style={{ background: "#1e293b", padding: "16px", borderRadius: "10px", flex: 1 }}>
        <p style={{ color: "#94a3b8", margin: 0 }}>Income</p>
        <h2 style={{ color: "#10b981", margin: "4px 0" }}>₹{totalIncome.toFixed(2)}</h2>
      </div>
      <div style={{ background: "#1e293b", padding: "16px", borderRadius: "10px", flex: 1 }}>
        <p style={{ color: "#94a3b8", margin: 0 }}>Expenses</p>
        <h2 style={{ color: "#ef4444", margin: "4px 0" }}>₹{totalExpense.toFixed(2)}</h2>
      </div>
    </div>
  )
}

export default BalanceSummary