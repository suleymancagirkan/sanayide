'use client'

/*
 * Stats Bileşeni — v3
 * --------------------
 * Amaç: Platform istatistiklerini çarpıcı ama sade şekilde sunar.
 * Dashboard karton görünümü yerine: beyaz/açık arka plan, büyük sayılar,
 * minimal etiketler. Sayaç animasyonu viewport'a girince çalışır.
 * Tasarım: 4 büyük metrik yan yana, altında kısa güven metni.
 *
 * Değişkenler:
 *  - stats: [{value, suffix, label, sub, isDecimal}] — istatistik datası
 *  - CountUp: viewport'a girince 0'dan hedefe animasyonlu sayaç hook'u
 */

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 50000, suffix: '+', label: 'Aktif Usta', sub: 'Her kategoride' },
  { value: 120000, suffix: '+', label: 'Tamamlanan İş', sub: 'Türkiye genelinde' },
  { value: 4.9, suffix: '', label: 'Ortalama Puan', sub: '180K+ yorum', isDecimal: true },
  { value: 98, suffix: '%', label: 'Memnuniyet', sub: 'Kullanıcı oranı' },
]

function CountUp({ target, suffix, isDecimal, started }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    let raf
    const start = performance.now()
    const duration = 1800

    const tick = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      const current = eased * target
      setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [started, target, isDecimal])

  const display = isDecimal
    ? count.toFixed(1)
    : count >= 1000
    ? (count / 1000).toFixed(0) + 'K'
    : count.toString()

  return <>{display}{suffix}</>
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="stats" className="py-24 bg-white border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        {/* Simple centered label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-[11px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-14"
        >
          Rakamlarla Sanayide
        </motion.p>

        {/* Stats grid — 4 columns, no cards, just big numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-zinc-100">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center px-6 lg:px-10 py-6 lg:py-0"
            >
              <span
                className="font-black text-zinc-900 tracking-[-0.05em] leading-none mb-3 tabular-nums"
                style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)' }}
              >
                <CountUp
                  target={s.value}
                  suffix={s.suffix}
                  isDecimal={s.isDecimal}
                  started={inView}
                />
              </span>
              <p className="text-[15px] font-bold text-zinc-900 mb-1">{s.label}</p>
              <p className="text-[12px] font-medium text-zinc-400">{s.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-[13px] font-medium text-zinc-400 mt-14"
        >
          Türkiye'nin 81 ilinde, günde 3.000+ yeni iş talebi işleniyor.
        </motion.p>
      </div>
    </section>
  )
}
