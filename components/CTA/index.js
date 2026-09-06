'use client'

/*
 * CTA (Call to Action) Bileşeni — v3 (Interactive Master Hub)
 * -------------------------------------------------------------
 * Amaç: Landing page'in son ve en güçlü dönüşüm bölümü.
 * Tasarım: AI şablonlarından uzak, modern ve yenilikçi bir ada (island) mimarisi.
 * Özellikler:
 *  - Ada Kart Tasarımı: Açık gri zemin üzerinde yüzen titanium-zinc zeminli kart
 *  - Sol Kolon: Güçlü editorial tipografi, canlı çevrimiçi usta göstergesi,
 *    amber birincil aksiyon butonu ve minimalist store rozetleri
 *  - Sağ Kolon: İnteraktif canlı eşleşme simülatörü (Kullanıcı mekanik, boya,
 *    elektrik sekmelerine tıklayarak anlık usta eşleşmesini deneyimleyebilir)
 *
 * Değişkenler:
 *  - activeTab / setActiveTab: Canlı simülatördeki seçili hizmet kategorisi
 *  - previewCases: İnteraktif kartta gösterilen senaryolar ve usta verileri
 *  - storeBadges: App Store ve Google Play bağlantı verileri
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  TbBrandApple,
  TbBrandGooglePlay,
  TbArrowUpRight,
  TbStar,
  TbMapPin,
  TbShieldCheck,
  TbClock,
  TbTools,
  TbPaint,
  TbCpu,
  TbSparkles,
  TbQrcode,
} from 'react-icons/tb'

const previewCases = [
  {
    id: 'mechanic',
    label: 'Oto Mekanik',
    icon: TbTools,
    car: '2021 VW Golf 1.5 eTSI',
    issue: 'Ön fren balatası & disk değişimi, periyodik bakım',
    location: 'Kadıköy, İstanbul',
    master: {
      name: 'Kemal Usta',
      title: 'VAG Grubu Mekanik Uzmanı',
      exp: '22 Yıl Deneyim',
      rating: 4.9,
      reviews: 384,
      distance: '1.4 km mesafede',
      responseTime: '3 dk',
      tag: 'Orijinal Parça Garantili',
      avatar: 'KU',
      avatarBg: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    },
  },
  {
    id: 'bodywork',
    label: 'Kaporta & Boya',
    icon: TbPaint,
    car: '2020 Renault Megane',
    issue: 'Sağ ön çamurluk boyasız göçük düzeltme (PDR)',
    location: 'Ümraniye Sanayi, İstanbul',
    master: {
      name: 'Serkan Usta',
      title: 'PDR & Fırın Boya Ustası',
      exp: '16 Yıl Deneyim',
      rating: 5.0,
      reviews: 219,
      distance: '2.1 km mesafede',
      responseTime: '5 dk',
      tag: 'Aynı Gün Teslimat',
      avatar: 'SU',
      avatarBg: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    },
  },
  {
    id: 'electric',
    label: 'Oto Elektrik',
    icon: TbCpu,
    car: '2019 Ford Focus',
    issue: 'Akü kontrolü & start-stop arıza tespiti',
    location: 'Maslak Oto Sanayi, İstanbul',
    master: {
      name: 'Hakan Usta',
      title: 'Elektronik & Beyin Uzmanı',
      exp: '19 Yıl Deneyim',
      rating: 4.8,
      reviews: 412,
      distance: '0.8 km mesafede',
      responseTime: '2 dk',
      tag: 'Bilgisayarlı Arıza Tespiti',
      avatar: 'HU',
      avatarBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    },
  },
]

export default function CTA() {
  const [activeTab, setActiveTab] = useState(previewCases[0].id)
  const currentCase = previewCases.find((c) => c.id === activeTab) || previewCases[0]

  return (
    <section className="py-20 md:py-28 bg-[#f0f0ee] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Main Island Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative bg-zinc-950 text-white rounded-[2.5rem] border border-zinc-800/90 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.35)] overflow-hidden"
        >
          {/* Subtle architectural dot grid background */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Diagonal subtle line accent */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-amber-500/10 via-transparent to-transparent pointer-events-none rounded-bl-full" />

          {/* Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 p-8 sm:p-12 lg:p-16 items-center">

            {/* ── LEFT COLUMN (6 cols): Direct Value & Conversion ── */}
            <div className="lg:col-span-6 flex flex-col justify-center">

              {/* Live Signal Indicator */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 w-fit mb-6 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[12px] font-semibold tracking-wide">
                  4.850+ Usta Çevrimiçi · Ortalama 45 sn yanıt
                </span>
              </div>

              {/* Bold Editorial Headline */}
              <h2 className="text-3xl sm:text-5xl lg:text-[3.4rem] font-black tracking-[-0.04em] leading-[1.08] mb-5">
                Sanayi cebinde,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                  usta kapında.
                </span>
              </h2>

              <p className="text-zinc-400 text-base sm:text-lg font-medium leading-relaxed max-w-xl mb-8">
                Aradığın tamirci veya bakım uzmanı saniyeler içinde karşına çıksın.
                Fiyat tekliflerini karşılaştır, gerçek kullanıcı puanlarını incele,
                güvenle yola devam et.
              </p>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
                {/* Amber Action Button */}
                <motion.a
                  href="#"
                  id="cta-primary-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-center gap-3 px-8 py-4 bg-amber-400 text-zinc-950 text-[15px] font-black rounded-2xl hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20"
                >
                  <span>Hemen Usta Bul</span>
                  <div className="w-6 h-6 rounded-full bg-zinc-950/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    <TbArrowUpRight className="text-zinc-950 text-sm font-bold" />
                  </div>
                </motion.a>

                {/* Secondary: Usta Kaydı */}
                <motion.a
                  href="#"
                  id="cta-master-register"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 text-[14px] font-bold rounded-2xl transition-all"
                >
                  <TbSparkles className="text-amber-400 text-base" />
                  <span>Usta mısın? Kayıt Ol</span>
                </motion.a>
              </div>

              {/* App Stores & Rating Strip */}
              <div className="pt-6 border-t border-zinc-900 flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2.5">
                  <a
                    href="#"
                    id="cta-store-apple"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800/80 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                  >
                    <TbBrandApple className="text-xl text-white" />
                    <span className="text-[12px] font-bold">App Store</span>
                  </a>

                  <a
                    href="#"
                    id="cta-store-google"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800/80 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                  >
                    <TbBrandGooglePlay className="text-lg text-emerald-400" />
                    <span className="text-[12px] font-bold">Google Play</span>
                  </a>
                </div>

                <div className="flex items-center gap-2 text-zinc-400 text-[12px] font-semibold">
                  <div className="flex items-center text-amber-400">
                    <TbStar className="fill-amber-400 text-xs" />
                  </div>
                  <span className="text-white font-bold">4.9</span>
                  <span>/ 5 (12.000+ Değerlendirme)</span>
                </div>
              </div>

            </div>

            {/* ── RIGHT COLUMN (6 cols): Interactive Live Match Card ── */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center">

              {/* Category Tab Selector */}
              <div className="w-full max-w-md flex items-center p-1 bg-zinc-900 border border-zinc-800 rounded-2xl mb-4">
                {previewCases.map((tab) => {
                  const Icon = tab.icon
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative flex-1 flex items-center justify-center gap-2 py-2 text-[12px] font-bold rounded-xl transition-all duration-200 cursor-pointer ${
                        isActive ? 'text-zinc-950 font-black' : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="ctaTabIndicator"
                          className="absolute inset-0 bg-amber-400 rounded-xl"
                          transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-1.5">
                        <Icon className="text-sm" />
                        <span className="hidden sm:inline">{tab.label}</span>
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Dynamic Match Preview Card */}
              <div className="w-full max-w-md bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 shadow-2xl backdrop-blur-md relative">

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCase.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* Header: Request Summary */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800/80">
                      <div>
                        <div className="flex items-center gap-1.5 text-zinc-400 text-[11px] font-bold uppercase tracking-wider mb-1">
                          <TbMapPin className="text-amber-400 text-xs" />
                          <span>{currentCase.location}</span>
                        </div>
                        <p className="text-[14px] font-extrabold text-white">
                          {currentCase.car}
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-400 text-[11px] font-extrabold">
                        ⚡ Canlı Talep
                      </span>
                    </div>

                    {/* Issue Description */}
                    <div className="bg-zinc-950/60 rounded-xl p-3 border border-zinc-800/60 mb-5">
                      <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-0.5">
                        İş Emri / Talep
                      </p>
                      <p className="text-[13px] font-medium text-zinc-300">
                        {currentCase.issue}
                      </p>
                    </div>

                    {/* Matched Master Block */}
                    <div className="bg-zinc-800/60 rounded-2xl p-4 border border-zinc-700/60">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-11 h-11 rounded-2xl flex items-center justify-center font-black text-sm border ${currentCase.master.avatarBg}`}
                          >
                            {currentCase.master.avatar}
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <h4 className="font-extrabold text-[15px] text-white leading-tight">
                                {currentCase.master.name}
                              </h4>
                              <TbShieldCheck className="text-emerald-400 text-base" title="Doğrulanmış Usta" />
                            </div>
                            <p className="text-[12px] text-zinc-400 font-medium">
                              {currentCase.master.title}
                            </p>
                          </div>
                        </div>

                        {/* Rating pill */}
                        <div className="flex items-center gap-1 bg-zinc-900 px-2 py-1 rounded-lg border border-zinc-700/60 shrink-0">
                          <TbStar className="text-amber-400 fill-amber-400 text-[11px]" />
                          <span className="text-[12px] font-extrabold text-white">
                            {currentCase.master.rating}
                          </span>
                        </div>
                      </div>

                      {/* Micro Specs */}
                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-700/50 text-[11px]">
                        <div className="flex items-center gap-1.5 text-zinc-400">
                          <TbMapPin className="text-amber-400" />
                          <span>{currentCase.master.distance}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-zinc-400">
                          <TbClock className="text-emerald-400" />
                          <span>Yanıt: {currentCase.master.responseTime}</span>
                        </div>
                      </div>

                      {/* Tag pill */}
                      <div className="mt-3 pt-2.5 border-t border-zinc-700/30 flex items-center justify-between">
                        <span className="text-[11px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-md">
                          {currentCase.master.tag}
                        </span>
                        <span className="text-[11px] font-medium text-zinc-400">
                          {currentCase.master.exp}
                        </span>
                      </div>
                    </div>

                    {/* Quick Matching Action in card */}
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                          <TbQrcode className="text-emerald-400 text-xs" />
                        </div>
                        <span className="text-[11px] text-zinc-400 font-semibold">
                          Eşleşme Tamamlandı
                        </span>
                      </div>

                      <button
                        onClick={() => {
                          const nextIdx = (previewCases.findIndex((c) => c.id === activeTab) + 1) % previewCases.length
                          setActiveTab(previewCases[nextIdx].id)
                        }}
                        className="text-[12px] font-bold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1"
                      >
                        Sıradaki Örnek <TbArrowUpRight className="text-xs" />
                      </button>
                    </div>

                  </motion.div>
                </AnimatePresence>

              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
