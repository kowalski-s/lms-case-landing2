import { motion, useTransform, MotionValue, useMotionValue } from 'framer-motion'

export default function BackgroundGrid({ x, y }: { x?: MotionValue<number>; y?: MotionValue<number> }) {
  const defaultX = useMotionValue(0)
  const defaultY = useMotionValue(0)
  const baseX = x || defaultX
  const baseY = y || defaultY
  const x1 = useTransform(baseX, (v) => v * 0.6)
  const y1 = useTransform(baseY, (v) => v * -0.4)
  const x2 = useTransform(baseX, (v) => v * 0.3)
  const y2 = useTransform(baseY, (v) => v * -0.2)

  return (
    <div className="absolute inset-x-0 bottom-0 h-[52vh] pointer-events-none overflow-hidden">
      <Layer styleX={x1} styleY={y1} colorA="rgba(169,117,255,0.75)" colorB="rgba(78,208,255,0.75)" rows={14} speed={18} blur={0.8} />
      <Layer styleX={x2} styleY={y2} colorA="rgba(169,117,255,0.45)" colorB="rgba(78,208,255,0.45)" rows={12} speed={26} blur={1.1} />
      <Layer styleX={x2} styleY={y2} colorA="rgba(169,117,255,0.30)" colorB="rgba(78,208,255,0.30)" rows={10} speed={34} blur={1.6} />
    </div>
  )
}

function Layer({ styleX, styleY, colorA, colorB, rows, speed, blur }: {
  styleX?: MotionValue<number>
  styleY?: MotionValue<number>
  colorA: string
  colorB: string
  rows: number
  speed: number
  blur: number
}) {
  return (
    <motion.div style={{ x: styleX, y: styleY }} className="absolute inset-0" >
      <svg className="w-full h-full" viewBox="0 0 1200 500" fill="none">
        {[...Array(rows)].map((_, i) => {
          const y = 80 + i * 30
          const color = i % 2 === 0 ? colorA : colorB
          return (
            <motion.path
              key={i}
              d={`M0 ${y} Q 600 ${y + 60} 1200 ${y}`}
              stroke={color}
              strokeWidth={1}
              strokeDasharray="2 8"
              style={{ filter: `blur(${blur}px)` }}
              initial={{ strokeDashoffset: 0, opacity: 0 }}
              animate={{ strokeDashoffset: 80, opacity: 1 }}
              transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
            />
          )
        })}
      </svg>
    </motion.div>
  )
}