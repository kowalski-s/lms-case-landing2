import { useMotionValue, useTransform, useSpring } from 'framer-motion'

export function useMouseParallax(max: number = 12) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const xRaw = useTransform(mx, (v) => v * max)
  const yRaw = useTransform(my, (v) => v * max)

  const x = useSpring(xRaw, { stiffness: 120, damping: 20 })
  const y = useSpring(yRaw, { stiffness: 120, damping: 20 })

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    mx.set(px)
    my.set(py)
  }

  function onPointerLeave() {
    mx.set(0)
    my.set(0)
  }

  return { x, y, onPointerMove, onPointerLeave }
}