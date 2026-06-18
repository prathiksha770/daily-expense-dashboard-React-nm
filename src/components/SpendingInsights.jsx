function SpendingInsights({ transactions, target }) {
  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0)

  const categoryTotals = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount
      return acc
    }, {})

  const topCategory = Object.entries(categoryTotals).sort((a, b) => b[1] - a[1])[0]
  const progress = Math.min((totalExpense / target) * 100, 100)
  const progressColor = progress > 90 ? "#ef4444" : progress > 70 ? "#f59e0b" : "#10b981"

  const getInsight = () => {
    if (transactions.length === 0) return "Add some transactions to get insights! 💡"
    if (progress > 90) return `⚠️ You've used ${progress.toFixed(0)}% of your monthly budget! Time to slow down.`
    if (topCategory && (topCategory[1] / totalExpense) > 0.5) return `💡 You're spending over 50% on ${topCategory[0]}. Consider balancing it out!`
    if (progress < 50) return `✅ Great job! You've only used ${progress.toFixed(0)}% of your budget so far.`
    return `📊 You've spent $${totalExpense.toFixed(2)} this month. Keep an eye on ${topCategory?.[0] || "your spending"}!`
  }

  return (
    <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px", marginBottom: "24px" }}>
      <h3 style={{ color: "#94a3b8", marginTop: 0 }}>Monthly Target 🎯</h3>
      <div style={{ marginBottom: "16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
          <span style={{ color: "#94a3b8", fontSize: "13px" }}>Spent: ₹{totalExpense.toFixed(2)}</span>
         <span style={{ color: "#94a3b8", fontSize: "13px" }}>Target: ₹{target}</span>
           </div>
        <div style={{ background: "#334155", borderRadius: "99px", height: "10px" }}>
          <div style={{
            height: "10px", borderRadius: "99px",
            width: `${progress}%`,
            background: progressColor,
            transition: "width 0.5s ease"
          }} />
        </div>
        <p style={{ color: progressColor, fontSize: "12px", marginTop: "6px" }}>{progress.toFixed(0)}% of budget used</p>
      </div>
      <div style={{ background: "#0f172a", padding: "12px 16px", borderRadius: "8px", color: "#cbd5e1", fontSize: "14px" }}>
        {getInsight()}
      </div>
    </div>
  )
}

export default SpendingInsights