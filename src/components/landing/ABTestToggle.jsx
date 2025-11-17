import { useEffect, useState } from 'react'

export default function ABTestToggle({ onVariant }) {
  const [variant, setVariant] = useState('A')

  useEffect(() => {
    const stored = localStorage.getItem('teachease_ab_variant')
    if (stored) {
      setVariant(stored)
      onVariant?.(stored)
      return
    }
    const v = Math.random() < 0.5 ? 'A' : 'B'
    localStorage.setItem('teachease_ab_variant', v)
    setVariant(v)
    onVariant?.(v)
  }, [onVariant])

  return (
    <div className="fixed bottom-4 right-4 text-xs text-slate-300/80">
      Variant: <span className="font-semibold">{variant}</span>
    </div>
  )
}
