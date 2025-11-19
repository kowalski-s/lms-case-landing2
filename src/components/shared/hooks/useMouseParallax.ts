import { useMotionValue, useTransform } from 'framer-motion'

export function useMouseParallax(strength: number = 20) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const x = useTransform(mx, (v) => v * strength)
  const y = useTransform(my, (v) => v * strength)

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