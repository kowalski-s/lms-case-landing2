import { motion } from 'framer-motion'

const items = [
  { t: '⚡ Скорость', d: 'MVP за неделю' },
  { t: '🎯 Гибкость', d: 'Архитектура адаптируется под процессы школы' },
  { t: '💸 Выгодно', d: 'В 3–5 раз ниже стоимость' },
  { t: '🧩 Кастомизация', d: 'Не ограничена рамками ProgressMe и GetCourse' },
  { t: '🔒 Контроль', d: 'Ваши данные — ваша логика' },
  { t: '🚀 Масштабируемость', d: 'MVP → полноценная платформа' },
]

export default function AiBenefits() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Почему разработка через ИИ — это быстрее, гибче и выгоднее?</h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((it, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
              className="glass p-6 rounded-[var(--radius-xl)] border border-white/10"
            >
              <div className="text-white font-semibold">{it.t}</div>
              <div className="mt-2 text-white/70">{it.d}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}