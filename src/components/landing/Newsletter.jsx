import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [confirmUrl, setConfirmUrl] = useState('')
  const [error, setError] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    setError('')
    setStatus('loading')
    try {
      const res = await fetch(`${API_BASE}/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Subscription failed')
      setConfirmUrl(data.confirm_url)
      setStatus('pending')
    } catch (err) {
      setError(err.message)
      setStatus('error')
    }
  }

  return (
    <section className="py-24">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold">Get product updates</h3>
        <p className="mt-2 text-slate-300 text-sm">Join the newsletter. Confirm your email to opt-in.</p>
        <form onSubmit={onSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            placeholder="you@school.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-indigo-400"
            aria-label="Email address"
          />
          <button disabled={status==='loading'} className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60">Subscribe</button>
        </form>
        {status==='pending' && (
          <div className="mt-4 text-sm text-green-400">
            Please check your email to confirm. For testing, use: <a className="underline" href={confirmUrl} target="_blank" rel="noreferrer">Confirm now</a>
          </div>
        )}
        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
      </div>
    </section>
  )
}
