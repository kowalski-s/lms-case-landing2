import { useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export function useTilt(maxDeg: number = 5) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateY = useTransform(x, [-1, 1], [maxDeg, -maxDeg])
  const rotateX = useTransform(y, [-1, 1], [-maxDeg, maxDeg])

  function onMouseMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    x.set(px * 2 - 1)
    y.set(py * 2 - 1)
  }

  function onMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave }
}

export const Tiltable = (
  { children, className, maxDeg = 5 }: { children: React.ReactNode; className?: string; maxDeg?: number }
) => {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(maxDeg)
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
