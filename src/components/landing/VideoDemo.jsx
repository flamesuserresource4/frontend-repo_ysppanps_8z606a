import React, { useState, useCallback, useEffect } from 'react'
import Spline from '@splinetool/react-spline'

function ErrorBoundary({ onError, children }) {
  const Boundary = class extends React.Component {
    constructor(props) {
      super(props)
      this.state = { hasError: false }
    }
    static getDerivedStateFromError() {
      return { hasError: true }
    }
    componentDidCatch(error, info) {
      if (onError) onError(error, info)
    }
    render() {
      if (this.state.hasError) return null
      return this.props.children
    }
  }
  return <Boundary>{children}</Boundary>
}

export default function VideoDemo() {
  const [useFallback, setUseFallback] = useState(false)
  const handleError = useCallback(() => setUseFallback(true), [])

  const sceneUrl = 'https://prod.spline.design/Nwz1pYl-landing/scene.splinecode'

  useEffect(() => {
    let cancelled = false
    // Preflight check to avoid rendering Spline if the scene is not accessible (e.g., 403)
    fetch(sceneUrl, { method: 'GET', mode: 'cors' })
      .then((res) => {
        if (!res.ok && !cancelled) setUseFallback(true)
      })
      .catch(() => {
        if (!cancelled) setUseFallback(true)
      })
    return () => {
      cancelled = true
    }
  }, [sceneUrl])

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">See TeachEase in action</h2>
            <p className="mt-3 text-slate-300">Interact with a lightweight 3D scene or a product video. If the interactive demo can’t load, we automatically show a video instead.</p>
            <ul className="mt-6 space-y-2 text-slate-300 text-sm list-disc list-inside">
              <li>Live, interactive demo embed (with graceful fallback)</li>
              <li>Keyboard and screen-reader friendly</li>
              <li>Play/pause controls for video alternative</li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 aspect-video">
            {useFallback ? (
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                aria-label="Product demo video fallback"
                poster="https://images.unsplash.com/photo-1557264337-e8a93017fe92?q=80&w=1600&auto=format&fit=crop"
              >
                <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <ErrorBoundary onError={handleError}>
                <Spline 
                  scene={sceneUrl}
                  aria-label="Interactive product demo"
                />
              </ErrorBoundary>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
