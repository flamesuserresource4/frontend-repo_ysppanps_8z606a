export default function LandingFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-300">
        <p className="text-sm">© {new Date().getFullYear()} TeachEase. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="/test" className="hover:text-white">System status</a>
        </div>
      </div>
    </footer>
  )
}
