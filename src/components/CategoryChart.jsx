import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"

const COLORS = {
  "Food & Dining": "#10b981",
  "Transport": "#3b82f6",
  "Shopping": "#f59e0b",
  "Health & Medical": "#ec4899",
  "Entertainment": "#8b5cf6",
  "Education": "#f97316",
  "Rent & Housing": "#06b6d4",
  "Utilities & Bills": "#64748b",
  "Groceries": "#84cc16",
  "Personal Care": "#e879f9",
  "Travel": "#38bdf8",
  "Savings": "#34d399",
  "Salary": "#06b6d4",
  "Freelance": "#fbbf24",
  "Other": "#94a3b8",
}


function CategoryChart({ transactions }) {
  const expenses = transactions.filter((t) => t.type === "expense")

  if (expenses.length === 0) {
    return (
      <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px", marginBottom: "24px" }}>
        <h3 style={{ color: "#94a3b8", marginTop: 0 }}>Spending by Category</h3>
        <p style={{ color: "#475569" }}>Add some expenses to see the chart!</p>
      </div>
    )
  }

  const data = Object.entries(
    expenses.reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount
      return acc
    }, {})
  ).map(([name, value]) => ({ name, value: parseFloat(value.toFixed(2)) }))

  return (
    <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px", marginBottom: "24px" }}>
      <h3 style={{ color: "#94a3b8", marginTop: 0 }}>Spending by Category</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={70} outerRadius={110} paddingAngle={3} dataKey="value">
            {data.map((entry) => (
              <Cell key={entry.name} fill={COLORS[entry.name] || "#64748b"} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ background: "#0f172a", border: "1px solid #334155", borderRadius: "8px", color: "white" }}
            formatter={(value) => [`$${value}`, ""]}
          />
          <Legend iconType="circle" wrapperStyle={{ color: "#94a3b8", fontSize: "13px" }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CategoryChart