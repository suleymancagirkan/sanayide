'use client'

/*
 * HowItWorks Bileşeni — v2
 * ------------------------
 * Amaç: 3 adımlı süreci anlatır. Yeni tasarımda her adım horizontal layout'ta
 * büyük numara + ikon + içerik şeklinde. Karton/kağıt gibi gölgeli,
 * içinde küçük detay öğeler var. Tipografi: güçlü tracking, hierarchy.
 * Adımlar arasında dashed bağlantı çizgisi yerine subtle ok animasyonu.
 *
 * Değişkenler:
 *  - steps: Adım bilgileri (numara, icon, başlık, açıklama, detaylar, renk paleti)
 */

import { motion } from 'framer-motion'
import { TbSearch, TbCards, TbMessageCircle, TbCheck } from 'react-icons/tb'

const steps = [
  {
    num: '01',
    icon: TbSearch,
    title: 'İhtiyacını seç',
    subtitle: 'Kategorini belirle, konumunu ayarla',
    desc: 'Aklındaki işi seç, şehrini gir. Saniyeler içinde o bölgedeki doğrulanmış ustalar karşına çıkar.',
    details: ['Elektrikçi, Boyacı, Tesisatçı…', 'Konum bazlı filtreleme', 'Fiyat aralığı belirleme'],
    numColor: 'text-zinc-100',
    iconBg: 'bg-zinc-900',
    iconColor: 'text-amber-400',
    accent: 'bg-amber-400',
    cardBg: 'bg-white',
    border: 'border-zinc-100',
  },
  {
    num: '02',
    icon: TbCards,
    title: 'Swipe et & eşleş',
    subtitle: 'Hızlıca göz at, beğendiklerine eşleşme talebi gönder',
    desc: 'Usta profillerini tek tek incele, puanlarını ve yorumlarını gör. Beğendiklerine kalp at, eşleşmeyi başlat.',
    details: ['Sağa — Beğen', 'Sola — Geç', 'Anlık bildirim'],
    numColor: 'text-zinc-100',
    iconBg: 'bg-zinc-900',
    iconColor: 'text-amber-400',
    accent: 'bg-zinc-900',
    cardBg: 'bg-white',
    border: 'border-zinc-100',
  },
  {
    num: '03',
    icon: TbMessageCircle,
    title: 'Mesajlaş & başlat',
    subtitle: 'Anında iletişim, güvenli ödeme',
    desc: 'Eşleştiğin ustayla direkt mesajlaş. Teklif al, randevu oluştur ve işi güvenle başlat.',
    details: ['Şifreli mesajlaşma', 'Güvenli ödeme sistemi', '7/24 destek'],
    numColor: 'text-zinc-100',
    iconBg: 'bg-zinc-900',
    iconColor: 'text-amber-400',
    accent: 'bg-emerald-500',
    cardBg: 'bg-white',
    border: 'border-zinc-100',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mb-18"
        >
          <span className="inline-block text-[11px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">
            Nasıl Çalışır?
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="font-extrabold text-zinc-900 tracking-[-0.035em] leading-[1.1]"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
            >
              3 adımda
              <br />
              ustanı bul.
            </h2>
            <p className="text-zinc-400 text-[15px] font-medium leading-relaxed max-w-xs md:text-right">
              Karmaşık prosedürler yok.
              <br />Saniyeler içinde doğru ustayla eşleş.
            </p>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -3 }}
                className={`group relative flex flex-col md:flex-row gap-8 items-start md:items-center
                  ${step.cardBg} border ${step.border} rounded-3xl p-8 md:p-10
                  shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.09)]
                  transition-all duration-300 overflow-hidden`}
              >
                {/* Huge background number */}
                <span
                  className={`absolute right-6 top-1/2 -translate-y-1/2 font-black select-none pointer-events-none leading-none ${step.numColor}`}
                  style={{ fontSize: 'clamp(5rem, 10vw, 9rem)' }}
                >
                  {step.num}
                </span>

                {/* Left: Icon block */}
                <div className={`${step.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg`}>
                  <Icon className={`text-2xl ${step.iconColor}`} />
                </div>

                {/* Middle: Text */}
                <div className="flex-1 relative z-10">
                  <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.18em] mb-1">
                    {step.subtitle}
                  </p>
                  <h3 className="text-[1.5rem] font-extrabold text-zinc-900 tracking-tight mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-zinc-500 text-[14px] font-medium leading-relaxed max-w-md">
                    {step.desc}
                  </p>
                </div>

                {/* Right: Detail chips */}
                <div className="flex flex-col gap-2 shrink-0 relative z-10">
                  {step.details.map((d) => (
                    <div key={d} className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full ${step.accent} flex items-center justify-center shrink-0`}>
                        <TbCheck className="text-white text-[9px]" />
                      </div>
                      <span className="text-[13px] font-semibold text-zinc-600 whitespace-nowrap">{d}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
