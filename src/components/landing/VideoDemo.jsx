import Spline from '@splinetool/react-spline'

export default function VideoDemo() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">See TeachEase in action</h2>
            <p className="mt-3 text-slate-300">Interact with a lightweight 3D scene or swap for a product video. This section is fully responsive and accessible.</p>
            <ul className="mt-6 space-y-2 text-slate-300 text-sm list-disc list-inside">
              <li>Live, interactive demo embed</li>
              <li>Keyboard and screen-reader friendly</li>
              <li>Play/pause controls for video alternative</li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 aspect-video">
            <Spline scene="https://prod.spline.design/Nwz1pYl-landing/scene.splinecode" aria-label="Interactive product demo" />
          </div>
        </div>
      </div>
    </section>
  )
}
