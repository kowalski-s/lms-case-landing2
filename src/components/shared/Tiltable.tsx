import { motion } from 'framer-motion'
import { useTilt } from './hooks/useTilt'

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