import { useEffect, useState } from 'react'

type Phase = 'typing' | 'pause' | 'deleting'

export function useTypingLoop(lines: string[], speed = 35, pause = 1500) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState<Phase>('typing')

  useEffect(() => {
    let t: number
    const current = lines[index]

    if (phase === 'typing') {
      if (text.length < current.length) {
        t = window.setTimeout(() => setText(current.slice(0, text.length + 1)), speed)
      } else {
        t = window.setTimeout(() => setPhase('pause'), pause)
      }
    } else if (phase === 'pause') {
      t = window.setTimeout(() => setPhase('deleting'), pause / 3)
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        t = window.setTimeout(() => setText(current.slice(0, text.length - 1)), speed)
      } else {
        t = window.setTimeout(() => {
          setPhase('typing')
          setIndex((i) => (i + 1) % lines.length)
        }, 10)
      }
    }

    return () => clearTimeout(t)
  }, [text, phase, index, lines, speed, pause])

  return { text, phase }
}