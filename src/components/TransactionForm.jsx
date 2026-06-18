import { useState } from "react"

function TransactionForm({ onAdd }) {
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const [type, setType] = useState("expense")
  const [category, setCategory] = useState("Food & Dining")
  const [mood, setMood] = useState("😊")

  const handleSubmit = () => {
    if (!description || !amount) return
    onAdd({
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      type,
      category,
      mood,
      date: new Date().toLocaleDateString("en-US", { weekday: "long" }),
    })
    setDescription("")
    setAmount("")
  }

  return (
    <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px", marginBottom: "24px" }}>
      <h3 style={{ color: "#94a3b8", marginTop: 0 }}>Add Transaction</h3>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <input placeholder="Description" value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ padding: "8px", borderRadius: "6px", border: "1px solid #334155", background: "#0f172a", color: "white", flex: 1 }} />
        <input placeholder="Amount" type="number" value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ padding: "8px", borderRadius: "6px", border: "1px solid #334155", background: "#0f172a", color: "white", width: "120px" }} />
        <select value={type} onChange={(e) => setType(e.target.value)}
          style={{ padding: "8px", borderRadius: "6px", border: "1px solid #334155", background: "#0f172a", color: "white" }}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)}
          style={{ padding: "8px", borderRadius: "6px", border: "1px solid #334155", background: "#0f172a", color: "white" }}>
          <option>Food & Dining</option>
          <option>Transport</option>
          <option>Shopping</option>
          <option>Health & Medical</option>
          <option>Entertainment</option>
          <option>Education</option>
          <option>Rent & Housing</option>
          <option>Utilities & Bills</option>
          <option>Groceries</option>
          <option>Personal Care</option>
          <option>Travel</option>
          <option>Savings</option>
          <option>Salary</option>
          <option>Freelance</option>
          <option>Other</option>
        </select>
        <select value={mood} onChange={(e) => setMood(e.target.value)}
          style={{ padding: "8px", borderRadius: "6px", border: "1px solid #334155", background: "#0f172a", color: "white" }}>
          <option>😊</option>
          <option>😐</option>
          <option>😬</option>
          <option>😢</option>
          <option>🤑</option>
        </select>
        <button onClick={handleSubmit}
          style={{ padding: "8px 20px", borderRadius: "6px", border: "none", background: "#10b981", color: "white", fontWeight: "bold", cursor: "pointer" }}>
          + Add
        </button>
      </div>
    </div>
  )
}

export default TransactionForm