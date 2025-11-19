import { motion } from 'framer-motion'
import { useState } from 'react'

export default function FinalCTA() {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')

  return (
    <section className="py-28">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Разберём процессы вашей школы и соберём прототип под ваш формат</h2>
        <p className="mt-4 text-white/70 max-w-2xl">Оставьте контакты — свяжусь с вами лично и покажу возможности AI-разработки.</p>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 glass rounded-[var(--radius-2xl)] p-6 border border-white/10 grid sm:grid-cols-2 gap-4"
          onSubmit={(e) => { e.preventDefault(); alert(`Спасибо! ${name} — свяжусь в ${contact}`) }}
        >
          <div>
            <label className="text-white/60 text-sm">Имя</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-[14px] bg-black/30 border border-white/10 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-[--color-violetAccent]"
              placeholder="Иван"
            />
          </div>
          <div>
            <label className="text-white/60 text-sm">Telegram / Email</label>
            <input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="mt-2 w-full rounded-[14px] bg-black/30 border border-white/10 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-[--color-tealAccent]"
              placeholder="@username / mail@example.com"
            />
          </div>
          <div className="sm:col-span-2 flex justify-end">
            <motion.button whileHover={{ scale: 1.03 }} className="px-6 py-3 rounded-[var(--radius-xl)] glass glow-border">Оставить контакты для связи</motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}