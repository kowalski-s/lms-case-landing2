export default function FutureFeatures() {
  const items = [
    { icon: '💳', text: 'Оплата занятий в платформе' },
    { icon: '📊', text: 'Финансы и отчёты' },
    { icon: '🤖', text: 'Интеграция ИИ в обучение' },
    { icon: '🧩', text: 'Кастомизация под запросы клиента' },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Готово к развитию в полноценную платформу</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((i, idx) => (
            <div key={idx} className="glass rounded-[var(--radius-xl)] p-5 border border-white/10">
              <div className="text-xl">{i.icon}</div>
              <div className="mt-2 text-white/80">{i.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}