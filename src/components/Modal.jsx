export default function Modal({ open, title, children, onClose, onSubmit, submitLabel = "Save" }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-slate-900/50" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-[90%] max-w-lg p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">✕</button>
        </div>
        <div className="mt-4 space-y-3">
          {children}
        </div>
        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50">Cancel</button>
          <button onClick={onSubmit} className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 shadow">{submitLabel}</button>
        </div>
      </div>
    </div>
  );
}
