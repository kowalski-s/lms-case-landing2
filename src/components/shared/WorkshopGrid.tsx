import { motion } from 'framer-motion'

export default function WorkshopGrid() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-[45vh] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ transform: 'translateZ(0) rotateX(25deg)' }}
      >
        <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none">
          {[...Array(12)].map((_, i) => {
            const y = 40 + i * 28
            const color = i % 2 === 0 ? 'rgba(169,117,255,0.35)' : 'rgba(78,208,255,0.35)'
            return (
              <motion.path
                key={i}
                d={`M0 ${y} Q 600 ${y + 40} 1200 ${y}`}
                stroke={color}
                strokeWidth={1}
                strokeDasharray="2 6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.03 }}
                style={{ filter: 'blur(0.6px)' }}
              />
            )
          })}
        </svg>
      </motion.div>
    </div>
  )
}