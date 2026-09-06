'use client'

/*
 * MasterShowcase Bileşeni — v3
 * -----------------------------
 * Amaç: Usta keşif bölümü. Yapay zeka hissi vermeyecek şekilde tamamen yeniden tasarlandı.
 * Sol tarafta gerçek bir uygulama listesi görünümü (liste kartları),
 * sağ tarafta büyük öne çıkan usta profili. Swipe etkileşimi yoktur,
 * bu bir tanıtım/showcase bölümüdür — temiz, minimal, inandırıcı.
 *
 * Değişkenler:
 *  - masters: Usta listesi (isim, meslek, puan, şehir, deneyim, renk)
 *  - selected: Aktif seçili usta index'i
 *  - skills: Her usta için beceri etiketleri
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  TbMapPin,
  TbStar,
  TbShieldCheck,
  TbBriefcase,
  TbClock,
  TbArrowRight,
  TbCheck,
} from 'react-icons/tb'

const masters = [
  {
    id: 1,
    name: 'Ahmet Yılmaz',
    job: 'Elektrikçi',
    city: 'Kadıköy, İstanbul',
    rating: 4.9,
    jobs: 847,
    exp: '12 yıl',
    response: '2 dk',
    skills: ['Pano Montajı', 'Arıza Tespiti', 'Topraklama'],
    initials: 'AY',
    accent: 'bg-amber-50 border-amber-100',
    avatarBg: 'bg-amber-100 text-amber-700',
    badge: 'En Çok Tercih Edilen',
    badgeColor: 'bg-amber-500',
  },
  {
    id: 2,
    name: 'Mehmet Demir',
    job: 'Tesisatçı',
    city: 'Çankaya, Ankara',
    rating: 4.8,
    jobs: 524,
    exp: '9 yıl',
    response: '5 dk',
    skills: ['Petek Sistemi', 'Kombi Bakımı', 'Su Tesisatı'],
    initials: 'MD',
    accent: 'bg-blue-50 border-blue-100',
    avatarBg: 'bg-blue-100 text-blue-700',
    badge: 'Hızlı Yanıt',
    badgeColor: 'bg-blue-500',
  },
  {
    id: 3,
    name: 'Ali Kaya',
    job: 'Boyacı',
    city: 'Bornova, İzmir',
    rating: 4.7,
    jobs: 392,
    exp: '7 yıl',
    response: '8 dk',
    skills: ['İç Cephe', 'Dış Cephe', 'Dekoratif Boya'],
    initials: 'AK',
    accent: 'bg-rose-50 border-rose-100',
    avatarBg: 'bg-rose-100 text-rose-700',
    badge: 'Yüksek Puan',
    badgeColor: 'bg-rose-500',
  },
  {
    id: 4,
    name: 'Hasan Çelik',
    job: 'Marangoz',
    city: 'Nilüfer, Bursa',
    rating: 5.0,
    jobs: 203,
    exp: '15 yıl',
    response: '10 dk',
    skills: ['Mobilya Yapımı', 'Döşeme', 'Parke'],
    initials: 'HÇ',
    accent: 'bg-emerald-50 border-emerald-100',
    avatarBg: 'bg-emerald-100 text-emerald-700',
    badge: 'Mükemmel Puan',
    badgeColor: 'bg-emerald-600',
  },
]

export default function MasterShowcase() {
  const [selected, setSelected] = useState(0)
  const master = masters[selected]

  return (
    <section id="masters" className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
            Usta Keşfet
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mt-2">
            <h2
              className="font-extrabold text-zinc-900 tracking-[-0.035em] leading-[1.08]"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              Platformdaki ustalar
            </h2>
            <p className="text-zinc-400 text-[14px] font-medium max-w-xs">
              50.000+ doğrulanmış usta arasından senin için en iyileri
            </p>
          </div>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

          {/* Left: Master list */}
          <div className="lg:col-span-2 flex flex-col gap-2">
            {masters.map((m, i) => (
              <motion.button
                key={m.id}
                onClick={() => setSelected(i)}
                whileHover={{ x: 2 }}
                transition={{ duration: 0.15 }}
                className={`text-left px-4 py-4 rounded-2xl border transition-all duration-200 ${
                  selected === i
                    ? 'bg-zinc-900 border-zinc-900 shadow-lg'
                    : 'bg-white border-zinc-100 hover:border-zinc-200 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-[13px] font-black shrink-0 ${
                    selected === i ? 'bg-zinc-800 text-amber-400' : m.avatarBg
                  }`}>
                    {m.initials}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className={`text-[14px] font-bold truncate ${selected === i ? 'text-white' : 'text-zinc-900'}`}>
                        {m.name}
                      </p>
                      <div className="flex items-center gap-1 shrink-0">
                        <TbStar className={`text-xs ${selected === i ? 'text-amber-400' : 'text-amber-400'}`} />
                        <span className={`text-[12px] font-bold ${selected === i ? 'text-white' : 'text-zinc-800'}`}>{m.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className={`text-[12px] font-medium ${selected === i ? 'text-zinc-400' : 'text-zinc-500'}`}>{m.job}</span>
                      <span className={`text-[11px] ${selected === i ? 'text-zinc-600' : 'text-zinc-300'}`}>·</span>
                      <span className={`text-[12px] font-medium ${selected === i ? 'text-zinc-400' : 'text-zinc-400'}`}>{m.city.split(',')[1]?.trim()}</span>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}

            {/* CTA below list */}
            <motion.a
              href="#"
              id="showcase-see-all"
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center gap-2 mt-2 px-4 py-3 border-2 border-dashed border-zinc-200 rounded-2xl text-[13px] font-semibold text-zinc-400 hover:border-zinc-400 hover:text-zinc-700 transition-all duration-200"
            >
              Tüm ustaları gör
              <TbArrowRight className="text-sm" />
            </motion.a>
          </div>

          {/* Right: Detail card */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={master.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="bg-white border border-zinc-100 rounded-3xl overflow-hidden shadow-sm h-full"
              >
                {/* Profile header */}
                <div className={`px-8 py-7 border-b border-zinc-50`}>
                  <div className="flex items-start gap-5">
                    <div className={`w-16 h-16 rounded-2xl ${master.avatarBg} flex items-center justify-center text-2xl font-black shrink-0`}>
                      {master.initials}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-[20px] font-extrabold text-zinc-900 tracking-tight">{master.name}</h3>
                        <TbShieldCheck className="text-emerald-500 text-lg shrink-0" />
                      </div>
                      <p className="text-zinc-500 text-[14px] font-semibold">{master.job}</p>
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <TbMapPin className="text-zinc-400 text-[13px]" />
                        <span className="text-[13px] text-zinc-400 font-medium">{master.city}</span>
                      </div>
                    </div>
                    <div>
                      <span className={`${master.badgeColor} text-white text-[11px] font-bold px-3 py-1 rounded-full`}>
                        {master.badge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-4 border-b border-zinc-50">
                  {[
                    { icon: TbStar, val: master.rating, label: 'Puan', accent: 'text-amber-500' },
                    { icon: TbBriefcase, val: master.jobs, label: 'Tamamlanan İş', accent: 'text-zinc-800' },
                    { icon: TbClock, val: master.response, label: 'Yanıt Süresi', accent: 'text-emerald-600' },
                    { icon: TbShieldCheck, val: master.exp, label: 'Deneyim', accent: 'text-zinc-800' },
                  ].map((s) => (
                    <div key={s.label} className="py-5 flex flex-col items-center border-r border-zinc-50 last:border-r-0">
                      <span className={`text-[18px] font-extrabold tracking-tight ${s.accent}`}>{s.val}</span>
                      <span className="text-[11px] text-zinc-400 font-medium mt-0.5 text-center px-1">{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <div className="px-8 py-6 border-b border-zinc-50">
                  <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-3">Uzmanlık</p>
                  <div className="flex flex-wrap gap-2">
                    {master.skills.map((skill) => (
                      <div key={skill} className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-50 border border-zinc-100 rounded-xl">
                        <TbCheck className="text-emerald-500 text-xs" />
                        <span className="text-[13px] font-semibold text-zinc-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="px-8 py-5 flex gap-3">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-3 bg-zinc-900 text-white text-[14px] font-bold rounded-xl text-center hover:bg-zinc-800 transition-colors"
                  >
                    Eşleşme Talebi Gönder
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.02 }}
                    className="px-5 py-3 border border-zinc-200 text-zinc-600 text-[14px] font-semibold rounded-xl hover:bg-zinc-50 transition-colors"
                  >
                    Profil
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
