'use client'

/*
 * Header Bileşeni — v5
 * --------------------
 * Amaç: İlk scroll'dan itibaren (scrollY > 8) bordered floating pill box görünür.
 * Hero'da transparan, scroll başlar başlamaz hemen box'a girer.
 * Daha kompakt yükseklik (h-11), rafine border ve backdrop blur.
 * Nav linkleri pill box içinde değil, bağımsız — daha sade.
 *
 * Değişkenler:
 *  - navLinks: Menü linkleri
 *  - scrolled: scrollY > 8 → box aktif
 *  - mobileOpen: Mobil menü durumu
 */

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TbHammer, TbMenu2, TbX } from 'react-icons/tb'

const navLinks = [
  { label: 'Nasıl Çalışır?', href: '#how-it-works' },
  { label: 'Özellikler', href: '#features' },
  { label: 'Ustalar', href: '#masters' },
  { label: 'İstatistikler', href: '#stats' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-3">
        <motion.div
          animate={scrolled ? {
            backgroundColor: 'rgba(255,255,255,0.95)',
            borderColor: 'rgba(228,228,231,0.8)',
            boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
            backdropFilter: 'blur(18px)',
          } : {
            backgroundColor: 'rgba(255,255,255,0)',
            borderColor: 'rgba(228,228,231,0)',
            boxShadow: 'none',
            backdropFilter: 'blur(0px)',
          }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="flex items-center justify-between h-11 px-3.5 rounded-2xl border"
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <motion.div
              whileHover={{ rotate: -8 }}
              transition={{ type: 'spring', stiffness: 600, damping: 22 }}
              className="w-6 h-6 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0"
            >
              <TbHammer className="text-white text-xs" />
            </motion.div>
            <span className="font-black text-[15px] tracking-[-0.04em] text-zinc-900">
              sanayide<span className="text-amber-500">.</span>
            </span>
          </a>

          {/* Center nav */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-0">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.06 + 0.15 }}
                className="px-3.5 py-1 text-[12.5px] font-semibold text-zinc-500 hover:text-zinc-900 rounded-lg hover:bg-black/[0.04] transition-all duration-150"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-1.5 shrink-0">
            <a
              href="#"
              className="px-3 py-1.5 text-[12.5px] font-semibold text-zinc-500 hover:text-zinc-900 rounded-lg hover:bg-black/[0.04] transition-all duration-150"
            >
              Giriş Yap
            </a>
            <motion.a
              href="#"
              id="header-cta"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-1 px-3.5 py-1.5 bg-amber-400 text-zinc-900 text-[12.5px] font-extrabold rounded-xl hover:bg-amber-300 transition-colors duration-150"
            >
              Başla
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center rounded-xl text-zinc-700 hover:bg-zinc-100 transition-colors"
          >
            {mobileOpen ? <TbX className="text-base" /> : <TbMenu2 className="text-base" />}
          </button>
        </motion.div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.16 }}
            className="mx-4 mt-1.5 bg-white/95 backdrop-blur-xl border border-zinc-200 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-2.5 flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-[13.5px] font-semibold text-zinc-600 hover:text-zinc-900 rounded-xl hover:bg-zinc-50 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-1.5 mt-2 pt-2 border-t border-zinc-100">
                <a href="#" className="py-2.5 text-center text-[13.5px] font-semibold text-zinc-500">
                  Giriş Yap
                </a>
                <a href="#" className="py-2.5 text-center text-[13.5px] font-extrabold bg-amber-400 text-zinc-900 rounded-xl">
                  Hemen Başla
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
