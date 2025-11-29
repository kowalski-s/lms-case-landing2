import { motion, useTransform } from 'framer-motion'
import BackgroundGrid from '../shared/BackgroundGrid'
import { Tiltable } from '../shared/Tiltable'
import { useMouseParallax } from '../shared/hooks/useMouseParallax'
import { useTypingLoop } from '../shared/hooks/useTypingLoop'
import { useIsMobile } from '../shared/hooks/useIsMobile'

const typingLines = [
  'AI-разработка позволяет собирать работающие платформы в разы быстрее…',
  'Прототипы создаются в течение дней, а не месяцев…',
  'Настраиваем логику, дизайн и модули под вашу школу без ограничений…',
  'Гибкость и скорость разработки, которые невозможно получить в классическом кодинге…',
  'AI превращает идею в рабочий продукт — за неделю.',
]

export default function Hero() {
  const isMobile = useIsMobile()
  const { x, y, onPointerMove, onPointerLeave } = useMouseParallax(isMobile ? 6 : 12)
  const { text } = useTypingLoop(typingLines, 30, 1400)

  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-start text-center px-6" onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
      <div className="container mx-auto pt-12 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="heading-gradient font-extrabold mx-auto max-w-[640px] text-[clamp(28px,4vw,40px)]"
        >
          MVP образовательной платформы за 7 дней
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          Рабочий прототип с расписанием, уроками, ДЗ, уведомлениями и прогрессом — собранный через AI‑разработку под процессы вашей школы.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.03, y: -2 }}
          transition={{ duration: 0.25 }}
          className="mt-6 inline-flex items-center px-6 py-3 rounded-[var(--radius-xl)] glass soft-glow text-white"
        >
          Обсудить разработку платформы
        </motion.button>

        <div className="relative mt-8 flex flex-col items-center justify-center">
          <Tiltable className="w-[min(480px,92vw)] rounded-[var(--radius-2xl)] shadow-[0_40px_100px_rgba(0,0,0,0.6)] bg-black/30 border border-white/10" maxDeg={isMobile ? 1 : 5}>
            <div className="w-full">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <div className="px-2 py-1 text-xs rounded-full bg-white/5 text-white/70">Workshop</div>
                <div className="w-4 h-4 rounded-full bg-white/15" />
              </div>
              <div className="p-5">
                <div className="rounded-[18px] border border-white/12 bg-black/20 px-4 py-4 glass">
                  <div className="font-mono text-white/90 text-base sm:text-lg">
                    {text}
                    <span className="inline-block w-3 h-5 align-middle bg-white/70 ml-1 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </Tiltable>

          {chips.map((c, i) => (
            <Chip key={i} {...c} x={x} y={y} />
          ))}
        </div>
      </div>

      <BackgroundGrid x={x} y={y} />
    </section>
  )
}

const chips = [
  { label: 'Гибкость', desc: 'Архитектура под процессы школы', pos: { top: -50, left: -160 }, delay: 0 },
  { label: 'Скорость', desc: 'MVP за неделю', pos: { bottom: -46, left: -150 }, delay: 0.6 },
  { label: 'Выгодно', desc: 'Разработка дешевле ×3–5', pos: { top: -50, right: -160 }, delay: 1.2 },
  { label: 'Кастомизация', desc: 'Гибкие модули и логика', pos: { bottom: -42, right: -150 }, delay: 1.8 },
]

function Chip({ label, desc, pos, delay, x, y }: {
  label: string
  desc: string
  pos: Partial<Record<'top' | 'left' | 'right' | 'bottom', number>>
  delay: number
  x: ReturnType<typeof useMouseParallax>['x']
  y: ReturnType<typeof useMouseParallax>['y']
}) {
  const px = useTransform(x, (v) => v)
  const py = useTransform(y, (v) => v)
  return (
    <motion.div
      style={{
        x: px,
        y: py,
        ...(pos.top !== undefined ? { top: pos.top } : {}),
        ...(pos.left !== undefined ? { left: pos.left } : {}),
        ...(pos.right !== undefined ? { right: pos.right } : {}),
        ...(pos.bottom !== undefined ? { bottom: pos.bottom } : {}),
      }}
      className="absolute"
    >
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay }}>
        <motion.div
          whileHover={{ scale: 1.06 }}
          animate={{
            y: [0, -2, 0, 2, 0],
            x: [0, 2, 0, -2, 0],
            rotateZ: [0, 0.4, 0, -0.4, 0],
            scale: [1, 1.02, 1, 1.02, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay }}
          className="glass px-3 py-2 rounded-[16px] border border-white/10 min-w-[160px]"
        >
          <div className="text-white/60 text-[11px]">{label}</div>
          <div className="mt-1 text-white text-sm font-medium">{desc}</div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
