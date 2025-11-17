import { BookOpen, Users, GraduationCap } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white shadow-sm">
            <BookOpen size={22} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800">TeachEase</h1>
            <p className="text-xs text-slate-500 -mt-1">SaaS for smart classrooms</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-slate-600">
          <div className="flex items-center gap-2"><Users size={18} /> <span className="text-sm">Students</span></div>
          <div className="flex items-center gap-2"><BookOpen size={18} /> <span className="text-sm">Subjects</span></div>
          <div className="flex items-center gap-2"><GraduationCap size={18} /> <span className="text-sm">Grades</span></div>
        </div>
      </div>
    </header>
  );
}
