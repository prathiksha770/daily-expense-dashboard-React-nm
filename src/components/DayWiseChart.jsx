import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function DayWiseChart({ transactions }) {
  const data = DAYS.map((day) => ({
    day: day.slice(0, 3),
    amount: +transactions
      .filter((t) => t.type === "expense" && t.date === day)
      .reduce((sum, t) => sum + t.amount, 0)
      .toFixed(2),
  }))

  return (
    <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px", marginBottom: "24px" }}>
      <h3 style={{ color: "#94a3b8", marginTop: 0 }}>Day-wise Spending 📅</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
          <XAxis dataKey="day" tick={{ fill: "#64748b", fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "#64748b", fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} />
          <Tooltip
            contentStyle={{ background: "#0f172a", border: "1px solid #334155", borderRadius: "8px", color: "white" }}
            formatter={(v) => [`$${v}`, "Spent"]}
          />
          <Bar dataKey="amount" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DayWiseChart