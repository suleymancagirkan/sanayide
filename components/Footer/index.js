'use client'

/*
 * Footer Bileşeni — v5 (Epic Edition)
 * ------------------------------------
 * Amaç: CTA (zinc-950 koyu) sonrası tamamen ayrışan, açık/beyaz premium footer.
 * Tasarım: Açık gri (#f2f2f0) arka plan, beyaz iç kart container.
 * Düzen:
 *   - Üst satır: Sol logo + tagline, Sağda 3 sütun link grubu
 *   - Alt satır: Copyright sol, yasal linkler sağ
 *   - En alt: Büyük brand watermark yazısı (çok büyük, soluk, editorial)
 *
 * Değişkenler:
 *  - navGroups: Link sütunları [{title, links[]}]
 *  - socials: Sosyal medya icon + href
 *  - year: Mevcut yıl
 */

import { motion } from 'framer-motion'
import {
  TbHammer,
  TbBrandInstagram,
  TbBrandTwitter,
  TbBrandLinkedin,
  TbArrowUpRight,
} from 'react-icons/tb'

const navGroups = [
  {
    title: 'Platform',
    links: [
      { label: 'Nasıl Çalışır?', href: '#how-it-works' },
      { label: 'Özellikler', href: '#features' },
      { label: 'Usta Keşfet', href: '#masters' },
      { label: 'İstatistikler', href: '#stats' },
    ],
  },
  {
    title: 'Şirket',
    links: [
      { label: 'Hakkımızda', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Kariyer', href: '#' },
      { label: 'Basın', href: '#' },
    ],
  },
  {
    title: 'Destek',
    links: [
      { label: 'Yardım Merkezi', href: '#' },
      { label: 'İletişim', href: '#' },
      { label: 'Gizlilik', href: '#' },
      { label: 'Kullanım Koşulları', href: '#' },
    ],
  },
]

const socials = [
  { icon: TbBrandInstagram, href: '#', label: 'Instagram' },
  { icon: TbBrandTwitter, href: '#', label: 'Twitter' },
  { icon: TbBrandLinkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#f0f0ee] overflow-hidden relative">

      {/* ── Inner white card ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl px-8 md:px-12 pt-10 pb-8"
        >
          {/* ── Main grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-10">

            {/* Brand col — 2/5 */}
            <div className="md:col-span-2 flex flex-col gap-4">
              <a href="/" className="flex items-center gap-2 w-fit">
                <div className="w-8 h-8 rounded-xl bg-zinc-900 flex items-center justify-center">
                  <TbHammer className="text-amber-400 text-sm" />
                </div>
                <span className="font-black text-[18px] tracking-[-0.04em] text-zinc-900">
                  sanayide<span className="text-amber-500">.</span>
                </span>
              </a>

              <p className="text-[13px] text-zinc-400 font-medium leading-relaxed max-w-[220px]">
                Hızlı eşleş, güvenli öde, doğrulanmış ustalar.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-2 mt-1">
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    whileHover={{ scale: 1.1, y: -1 }}
                    className="w-8 h-8 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 transition-all duration-150"
                  >
                    <Icon className="text-[14px]" />
                  </motion.a>
                ))}
              </div>

              {/* App badge */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                className="mt-1 w-fit flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-xl text-[12px] font-bold hover:bg-zinc-800 transition-colors"
              >
                Uygulamayı İndir
                <TbArrowUpRight className="text-amber-400 text-xs" />
              </motion.a>
            </div>

            {/* Nav columns — 3/5 */}
            <div className="md:col-span-3 grid grid-cols-3 gap-6">
              {navGroups.map((group) => (
                <div key={group.title}>
                  <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.15em] mb-4">
                    {group.title}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-[13px] font-medium text-zinc-600 hover:text-zinc-900 transition-colors duration-150"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="border-t border-zinc-100 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[12px] text-zinc-400">
              © {year} Sanayide Teknoloji A.Ş. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-5">
              {['Gizlilik Politikası', 'Kullanım Koşulları', 'Çerezler'].map((t) => (
                <a
                  key={t}
                  href="#"
                  className="text-[12px] text-zinc-400 hover:text-zinc-700 transition-colors"
                >
                  {t}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Watermark brand name ── */}
      <div
        className="relative select-none pointer-events-none overflow-hidden"
        style={{ height: 'clamp(80px, 14vw, 160px)' }}
      >
        <p
          className="absolute bottom-0 left-1/2 -translate-x-1/2 font-black text-zinc-900/[0.055] whitespace-nowrap leading-none tracking-[-0.04em]"
          style={{ fontSize: 'clamp(80px, 15vw, 190px)' }}
        >
          sanayide.
        </p>
      </div>
    </footer>
  )
}
