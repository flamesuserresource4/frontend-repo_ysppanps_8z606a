export default function StatCard({ title, value, hint, icon: Icon, color = "indigo" }) {
  const colorMap = {
    indigo: "from-indigo-500 to-blue-500",
    emerald: "from-emerald-500 to-teal-500",
    amber: "from-amber-500 to-orange-500",
    rose: "from-rose-500 to-pink-500",
  };
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white hover:shadow-xl transition-all">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-10 blur-2xl pointer-events-none "
           style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }} />
      <div className="p-5">
        <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${colorMap[color]} text-white flex items-center justify-center shadow`}> 
          {Icon ? <Icon size={18} /> : null}
        </div>
        <div className="mt-3">
          <p className="text-sm text-slate-500">{title}</p>
          <p className="text-2xl font-bold text-slate-800">{value}</p>
          {hint && <p className="text-xs text-slate-400 mt-1">{hint}</p>}
        </div>
      </div>
    </div>
  );
}
