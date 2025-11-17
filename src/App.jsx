import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import StatCard from "./components/StatCard.jsx";
import QuickActions from "./components/QuickActions.jsx";
import Modal from "./components/Modal.jsx";
import { Users, BookOpen, Calendar, GraduationCap } from "lucide-react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

async function api(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export default function App() {
  const [students, setStudents] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [grades, setGrades] = useState([]);
  const [lectures, setLectures] = useState([]);

  const [openModal, setOpenModal] = useState(null); // 'student' | 'subject' | 'lecture' | 'grade'
  const [form, setForm] = useState({});

  const loadAll = async () => {
    const [st, su, gr, le] = await Promise.all([
      api("/students"),
      api("/subjects"),
      api("/grades"),
      api("/lectures"),
    ]);
    setStudents(st);
    setSubjects(su);
    setGrades(gr);
    setLectures(le);
  };

  useEffect(() => {
    loadAll().catch(() => {});
  }, []);

  const stats = useMemo(() => ([
    { title: "Students", value: students.length, icon: Users, color: "indigo" },
    { title: "Subjects", value: subjects.length, icon: BookOpen, color: "emerald" },
    { title: "Lectures", value: lectures.length, icon: Calendar, color: "amber" },
    { title: "Grades", value: grades.length, icon: GraduationCap, color: "rose" },
  ]), [students, subjects, lectures, grades]);

  const submitHandlers = {
    student: async () => {
      await api("/students", { method: "POST", body: JSON.stringify(form) });
      setOpenModal(null); setForm({}); loadAll();
    },
    subject: async () => {
      await api("/subjects", { method: "POST", body: JSON.stringify(form) });
      setOpenModal(null); setForm({}); loadAll();
    },
    lecture: async () => {
      await api("/lectures", { method: "POST", body: JSON.stringify(form) });
      setOpenModal(null); setForm({}); loadAll();
    },
    grade: async () => {
      await api("/grades", { method: "POST", body: JSON.stringify(form) });
      setOpenModal(null); setForm({}); loadAll();
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-emerald-50">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <StatCard key={s.title} title={s.title} value={s.value} icon={s.icon} color={s.color} />
          ))}
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-800">Quick actions</h2>
          <QuickActions
            onAddStudent={() => { setOpenModal('student'); setForm({}); }}
            onAddSubject={() => { setOpenModal('subject'); setForm({}); }}
            onScheduleLecture={() => { setOpenModal('lecture'); setForm({}); }}
            onRecordGrade={() => { setOpenModal('grade'); setForm({}); }}
          />
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-800">Recent Students</h3>
            <div className="mt-3 divide-y">
              {students.slice(-5).reverse().map((s) => (
                <div key={s.id} className="py-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-700">{s.first_name} {s.last_name}</p>
                    <p className="text-xs text-slate-400">{s.roll_number} {s.class_name ? `• ${s.class_name}` : ""}</p>
                  </div>
                  <span className="text-xs rounded-full bg-indigo-50 text-indigo-600 px-2 py-1">{s.status}</span>
                </div>
              ))}
              {students.length === 0 && <p className="text-sm text-slate-500">No students yet.</p>}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-800">Upcoming Lectures</h3>
            <div className="mt-3 divide-y">
              {lectures.slice(-5).reverse().map((l) => (
                <div key={l.id} className="py-3">
                  <p className="text-sm font-medium text-slate-700">{l.topic}</p>
                  <p className="text-xs text-slate-400">{l.subject_code} {l.scheduled_at ? `• ${new Date(l.scheduled_at).toLocaleString()}` : ""}</p>
                </div>
              ))}
              {lectures.length === 0 && <p className="text-sm text-slate-500">No lectures scheduled.</p>}
            </div>
          </div>
        </section>
      </main>

      <Modal
        open={!!openModal}
        title={openModal === 'student' ? 'Add Student' : openModal === 'subject' ? 'Add Subject' : openModal === 'lecture' ? 'Schedule Lecture' : 'Record Grade'}
        onClose={() => setOpenModal(null)}
        onSubmit={submitHandlers[openModal]}
        submitLabel={openModal === 'grade' ? 'Record' : 'Save'}
      >
        {openModal === 'student' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input className="input" placeholder="First name" onChange={(e)=>setForm(f=>({...f, first_name:e.target.value}))} />
            <input className="input" placeholder="Last name" onChange={(e)=>setForm(f=>({...f, last_name:e.target.value}))} />
            <input className="input" placeholder="Roll number" onChange={(e)=>setForm(f=>({...f, roll_number:e.target.value}))} />
            <input className="input" placeholder="Class (e.g., Grade 8 - A)" onChange={(e)=>setForm(f=>({...f, class_name:e.target.value}))} />
            <input className="input sm:col-span-2" placeholder="Email (optional)" onChange={(e)=>setForm(f=>({...f, email:e.target.value}))} />
          </div>
        )}
        {openModal === 'subject' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input className="input" placeholder="Name" onChange={(e)=>setForm(f=>({...f, name:e.target.value}))} />
            <input className="input" placeholder="Code" onChange={(e)=>setForm(f=>({...f, code:e.target.value}))} />
            <input className="input sm:col-span-2" placeholder="Description" onChange={(e)=>setForm(f=>({...f, description:e.target.value}))} />
          </div>
        )}
        {openModal === 'lecture' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input className="input" placeholder="Subject code" onChange={(e)=>setForm(f=>({...f, subject_code:e.target.value}))} />
            <input className="input" placeholder="Topic" onChange={(e)=>setForm(f=>({...f, topic:e.target.value}))} />
            <input className="input sm:col-span-2" type="datetime-local" onChange={(e)=>setForm(f=>({...f, scheduled_at:new Date(e.target.value).toISOString()}))} />
          </div>
        )}
        {openModal === 'grade' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input className="input" placeholder="Roll number" onChange={(e)=>setForm(f=>({...f, roll_number:e.target.value}))} />
            <input className="input" placeholder="Subject code" onChange={(e)=>setForm(f=>({...f, subject_code:e.target.value}))} />
            <input className="input" placeholder="Marks obtained" type="number" onChange={(e)=>setForm(f=>({...f, marks_obtained:parseFloat(e.target.value)}))} />
            <input className="input" placeholder="Exam title (optional)" onChange={(e)=>setForm(f=>({...f, exam_title:e.target.value}))} />
          </div>
        )}
      </Modal>

      <style>{`
        .input { width: 100%; border: 1px solid rgb(226 232 240); border-radius: 0.75rem; padding: 0.625rem 0.875rem; font-size: 0.875rem; color: #0f172a; }
        .input:focus { outline: none; border-color: rgb(99 102 241); box-shadow: 0 0 0 3px rgba(99,102,241,0.15); }
      `}</style>
    </div>
  );
}
