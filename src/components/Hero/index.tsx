import { motion } from 'framer-motion'
import WorkshopGrid from '../shared/WorkshopGrid'
import { Tiltable } from '../shared/hooks/useTilt'
import { useMouseParallax } from '../shared/hooks/useMouseParallax'
import { useTypingLoop } from '../shared/hooks/useTypingLoop'

const typingLines = [
  'AI-разработка позволяет собирать работающие платформы в разы быстрее…',
  'Прототипы создаются в течение дней, а не месяцев…',
  'Настраиваем логику, дизайн и модули под вашу школу без ограничений…',
  'Гибкость и скорость разработки, которые невозможно получить в классическом кодинге…',
  'AI превращает идею в рабочий продукт — за неделю.',
]

export default function Hero() {
  const { x, y, onPointerMove, onPointerLeave } = useMouseParallax(25)
  const { text } = useTypingLoop(typingLines, 30, 1400)

  return (
    <section className="relative min-h-[100vh] flex items-center">
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-10" onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col justify-center"
        >
          <h1 className="heading-gradient text-4xl sm:text-5xl md:text-6xl font-extrabold">
            MVP образовательной платформы за 7 дней
          </h1>
          <p className="mt-6 text-white/70 text-lg sm:text-xl leading-relaxed max-w-xl">
            Рабочий прототип с расписанием, уроками, ДЗ, уведомлениями и прогрессом — собранный через AI-разработку под процессы вашей школы.
          </p>
          <motion.button
            whileHover={{ scale: 1.04 }}
            className="mt-10 inline-flex items-center px-6 py-3 rounded-[var(--radius-xl)] glass glow-border text-white"
          >
            Обсудить разработку платформы
          </motion.button>
        </motion.div>

        <div className="relative stage-perspective">
          <Tiltable className="glass glow-border p-6 rounded-[var(--radius-2xl)]" maxDeg={5}>
            <div className="relative h-[360px] sm:h-[420px] md:h-[480px] flex items-center justify-center">
              <motion.div style={{ x, y }} className="absolute inset-0 rounded-[var(--radius-2xl)]" />
              <div className="absolute inset-0 rounded-[var(--radius-2xl)] bg-gradient-to-br from-white/10 to-transparent" />

              <div className="w-[80%] sm:w-[75%] md:w-[70%] glass p-5 rounded-[var(--radius-xl)] border border-white/10">
                <div className="text-xs uppercase tracking-wide text-white/50">Workshop-like</div>
                <div className="mt-4 rounded-[var(--radius-xl)] p-4 border border-white/10 bg-black/20">
                  <div className="text-white/80 font-mono text-base sm:text-lg">
                    {text}
                    <span className="inline-block w-3 h-5 align-middle bg-white/70 ml-1 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </Tiltable>

          <motion.div style={{ x, y }} className="absolute -left-10 bottom-8">
            <Benefit label="Скорость" desc="MVP за неделю" />
          </motion.div>
          <motion.div style={{ x, y }} className="absolute left-2 top-6">
            <Benefit label="Гибкость" desc="Архитектура под процессы школы" />
          </motion.div>
          <motion.div style={{ x, y }} className="absolute right-2 top-4">
            <Benefit label="Выгодно" desc="Разработка дешевле ×3–5" />
          </motion.div>
          <motion.div style={{ x, y }} className="absolute -right-8 bottom-6">
            <Benefit label="Кастомизация" desc="Гибкие модули и логика" />
          </motion.div>
        </div>
      </div>

      <WorkshopGrid />
    </section>
  )
}

function Benefit({ label, desc }: { label: string; desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.03 }}
      className="glass px-4 py-3 rounded-[18px] border border-white/10 min-w-[180px]"
    >
      <div className="text-white/60 text-xs">{label}</div>
      <div className="mt-1 text-white font-medium">{desc}</div>
    </motion.div>
  )
}
