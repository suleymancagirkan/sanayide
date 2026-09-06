'use client'

/*
 * Hero Bileşeni — v3 (Centered)
 * --------------------------------
 * Amaç: Tam ortalanmış, çok temiz ve güçlü bir hero. Sağ/sol bölme yok.
 * Büyük başlık, kısa açıklama, iki CTA buton — hepsi ortada.
 * Altında gerçek usta isimlerinden oluşan "canlı" küçük profil avatarları + stat.
 * Arka planda çok subtle mesh gradient.
 *
 * Değişkenler:
 *  - avatars: Küçük profil görseli yerine renkli baş harfli avatar öğeleri
 *  - trustLine: Alt güven satırı metni
 */

import { motion } from 'framer-motion'
import { TbArrowRight, TbBolt, TbShieldCheck, TbStar } from 'react-icons/tb'

const avatars = [
  { initials: 'AY', color: 'bg-amber-100 text-amber-700 border-amber-200' },
  { initials: 'MD', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  { initials: 'AK', color: 'bg-rose-100 text-rose-700 border-rose-200' },
  { initials: 'HÇ', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  { initials: '+', color: 'bg-zinc-900 text-white border-zinc-900' },
]

const pills = [
  { icon: TbShieldCheck, text: 'Doğrulanmış Ustalar', color: 'text-emerald-600' },
  { icon: TbStar, text: '4.9 Ortalama Puan', color: 'text-amber-500' },
  { icon: TbBolt, text: 'Ortalama 3 dk Yanıt', color: 'text-zinc-700' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Clean background */}
      <div className="absolute inset-0 bg-[#fafafa]" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #c8c8c8 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          opacity: 0.35,
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-[11px] font-bold text-white tracking-[0.14em] uppercase">
            Türkiye'nin #1 Usta Platformu
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="font-black text-zinc-900 tracking-[-0.045em] leading-[1.03] mb-6"
          style={{ fontSize: 'clamp(3.2rem, 7vw, 6.5rem)' }}
        >
          Ustanı{' '}
          <span className="relative inline-block">
            <span className="relative z-10">swipe'la</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.45, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-1 left-0 right-0 h-[12px] bg-amber-300/60 rounded-sm origin-left -z-0"
            />
          </span>
          {' '}bul.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16 }}
          className="text-zinc-500 font-medium leading-[1.7] mb-10 mx-auto"
          style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', maxWidth: '36rem' }}
        >
          Elektrikçiden boyacıya, doğrulanmış ustalar
          saniyeler içinde karşına çıkar. Hızlı eşleş, anında iletişime geç.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.24 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
        >
          <motion.a
            href="#"
            id="hero-cta-primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative overflow-hidden group flex items-center gap-2.5 px-7 py-4 bg-amber-400 text-zinc-900 text-[15px] font-extrabold rounded-2xl hover:bg-amber-300 transition-colors duration-200"
          >
            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
            <TbBolt className="text-zinc-800 text-base shrink-0" />
            Usta Bul — Ücretsiz
            <TbArrowRight className="text-base group-hover:translate-x-0.5 transition-transform" />
          </motion.a>

          <motion.a
            href="#how-it-works"
            id="hero-cta-secondary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-7 py-4 border-2 border-zinc-200 text-zinc-700 text-[15px] font-bold rounded-2xl hover:border-zinc-400 hover:text-zinc-900 transition-all duration-200 bg-white/60"
          >
            Nasıl Çalışır?
          </motion.a>
        </motion.div>

        {/* Social proof row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* Avatar stack */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {avatars.map((av, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.06 }}
                  className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[11px] font-black ${av.color}`}
                >
                  {av.initials}
                </motion.div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-[13px] font-bold text-zinc-900 leading-none">50.000+ usta</p>
              <p className="text-[11px] text-zinc-400 font-medium mt-0.5">Türkiye genelinde aktif</p>
            </div>
          </div>

          <div className="w-px h-8 bg-zinc-200 hidden sm:block" />

          {/* Pills */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {pills.map(({ icon: Icon, text, color }) => (
              <div key={text} className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-zinc-100 rounded-full shadow-sm">
                <Icon className={`text-sm ${color}`} />
                <span className="text-[12px] font-semibold text-zinc-600">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
