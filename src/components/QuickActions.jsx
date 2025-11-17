import { Plus, Calendar, FileSpreadsheet, UserPlus } from "lucide-react";

export default function QuickActions({ onAddStudent, onAddSubject, onScheduleLecture, onRecordGrade }) {
  const actions = [
    { label: "Add Student", icon: UserPlus, color: "indigo", onClick: onAddStudent },
    { label: "Add Subject", icon: Plus, color: "emerald", onClick: onAddSubject },
    { label: "Schedule Lecture", icon: Calendar, color: "amber", onClick: onScheduleLecture },
    { label: "Record Grade", icon: FileSpreadsheet, color: "rose", onClick: onRecordGrade },
  ];
  const colorMap = {
    indigo: "from-indigo-500 to-blue-500",
    emerald: "from-emerald-500 to-teal-500",
    amber: "from-amber-500 to-orange-500",
    rose: "from-rose-500 to-pink-500",
  };
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {actions.map((a) => (
        <button key={a.label} onClick={a.onClick}
          className={`group relative overflow-hidden rounded-xl border border-slate-200 bg-white hover:shadow-lg transition-all p-4 text-left`}
        >
          <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${colorMap[a.color]} text-white flex items-center justify-center shadow`}> 
            <a.icon size={16} />
          </div>
          <div className="mt-2">
            <p className="text-sm font-medium text-slate-700">{a.label}</p>
            <p className="text-xs text-slate-400">Quick action</p>
          </div>
        </button>
      ))}
    </div>
  );
}
