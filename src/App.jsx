import { useState } from "react"
import BalanceSummary from "./components/BalanceSummary"
import TransactionForm from "./components/TransactionForm"
import TransactionList from "./components/TransactionList"
import CategoryChart from "./components/CategoryChart"
import SpendingInsights from "./components/SpendingInsights"
import DayWiseChart from "./components/DayWiseChart"

function App() {
  const [transactions, setTransactions] = useState([])
  const [target, setTarget] = useState(2000)
  const [targetInput, setTargetInput] = useState("")

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction])
  }

  return (
    <div style={{ background: "#0f172a", minHeight: "100vh", padding: "24px", color: "white" }}>
      <h1 style={{ textAlign: "center", marginBottom: "32px" }}>💰 Expense Analytics Dashboard</h1>

      {/* Target Setter */}
      <div style={{ background: "#1e293b", padding: "16px 20px", borderRadius: "10px", marginBottom: "24px", display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={{ color: "#94a3b8", fontSize: "14px" }}>Set Monthly Target:</span>
        <input
          type="number"
          placeholder="e.g. 10000"
          value={targetInput}
          onChange={(e) => setTargetInput(e.target.value)}
          style={{ padding: "8px", borderRadius: "6px", border: "1px solid #334155", background: "#0f172a", color: "white", width: "140px" }}
        />
        <button
          onClick={() => { if (targetInput) setTarget(parseFloat(targetInput)) }}
          style={{ padding: "8px 16px", borderRadius: "6px", border: "none", background: "#10b981", color: "white", fontWeight: "bold", cursor: "pointer" }}
        >
          Set ✓
        </button>
        <span style={{ color: "#475569", fontSize: "13px" }}>Current: ₹{target}</span>
      </div>

      <BalanceSummary transactions={transactions} />
      <SpendingInsights transactions={transactions} target={target} />
      <TransactionForm onAdd={addTransaction} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        <CategoryChart transactions={transactions} />
        <DayWiseChart transactions={transactions} />
      </div>
      <TransactionList transactions={transactions} />
    </div>
  )
}

export default App