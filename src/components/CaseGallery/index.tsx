import { motion } from 'framer-motion'
import { useState } from 'react'

type Slide = { title: string; description: string; color: string }

const slides: Slide[] = [
  { title: 'Расписание', description: 'Планирование уроков, статусы, преподаватели и интервалы.', color: '#4ED0FF' },
  { title: 'Домашние задания', description: 'Загрузка решений, статусы, проверки, оценки.', color: '#A975FF' },
  { title: 'Прогресс ученика', description: 'Уроки, оценки, активность, таймлайн.', color: '#F29CFF' },
  { title: 'Абонементы', description: 'Планы, продления, статусы и оплаты.', color: '#4ED0FF' },
  { title: 'Уведомления', description: 'Системные и учебные уведомления.', color: '#A975FF' },
]

export default function CaseGallery() {
  const [active, setActive] = useState(0)

  function next(delta: number) {
    setActive((i) => (i + delta + slides.length) % slides.length)
  }

  return (
    <section className="relative py-28">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Как выглядит готовый MVP</h2>
          <p className="mt-6 text-white/70 text-lg max-w-xl">
            <span className="text-white font-semibold">{slides[active].title}:</span> {slides[active].description}
          </p>
        </motion.div>

        <div className="relative stage-perspective" onWheel={(e) => next(Math.sign(e.deltaY))}>
          <div className="relative h-[420px] sm:h-[480px] md:h-[520px]">
            {slides.map((s, i) => {
              const offset = ((i - active + slides.length) % slides.length)
              const z = 100 - Math.abs(offset) * 40
              const rotate = offset === 0 ? 0 : offset > 0 ? -18 : 18
              const scale = offset === 0 ? 1.05 : 0.86
              const x = offset * 80
              return (
                <motion.div
                  key={i}
                  style={{ transformStyle: 'preserve-3d' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.03, rotateY: rotate * 0.1 }}
                    onClick={() => setActive(i)}
                    className="glass rounded-[var(--radius-2xl)] w-[70%] h-[85%] border border-white/10 cursor-pointer"
                    style={{
                      transform: `translateX(${x}px) translateZ(${z}px) rotateY(${rotate}deg)`,
                      boxShadow: offset === 0 ? `0 40px 80px ${s.color}30` : undefined,
                    }}
                  >
                    <div className="h-full w-full rounded-[var(--radius-2xl)]" style={{ background: `linear-gradient(135deg, ${s.color}33, transparent)` }}>
                      <div className="p-6 text-white text-lg font-semibold">{s.title}</div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
          <div className="flex gap-2 mt-4 justify-center">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 w-8 rounded-full ${i === active ? 'bg-white/80' : 'bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}