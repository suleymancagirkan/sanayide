'use client'

/*
 * Testimonials Bileşeni — v3
 * ---------------------------
 * Amaç: Kullanıcı yorumları. Tek satır marquee (sonsuz kayan).
 * Kartlar küçük, temiz, gerçekçi. Yapay zeka dashboard hissi yok.
 * Renk: Beyaz arka plan, zarif gölge, ince border.
 * Her kart: isim, meslek, şehir, puan, kısa yorum.
 *
 * Değişkenler:
 *  - testimonials: Yorum verisi listesi
 *  - DURATION: Marquee animasyon süresi (saniye)
 */

import { motion } from 'framer-motion'
import { TbStar } from 'react-icons/tb'

const DURATION = 35

const testimonials = [
  { name: 'Selin A.', role: 'Ev Sahibi', city: 'İstanbul', rating: 5, initials: 'SA', color: 'bg-rose-100 text-rose-700', text: 'Elektrik arızamı 3 dakikada Ahmet Bey ile eşleştim. 2 saat içinde geldi, profesyoneldi.' },
  { name: 'Burak Y.', role: 'Kiracı', city: 'Ankara', rating: 5, initials: 'BY', color: 'bg-blue-100 text-blue-700', text: 'Ustayı bulmak bu kadar kolay olabilirmi! Saniyeler içinde eşleştim, 1 saatte tesisatcı geldi.' },
  { name: 'Fatma K.', role: 'İşletme Sahibi', city: 'İzmir', rating: 5, initials: 'FK', color: 'bg-violet-100 text-violet-700', text: '5 farklı ustanın teklifini karşılaştırabildim. En uygun fiyatı kolayca buldum.' },
  { name: 'Emre Ş.', role: 'Ev Sahibi', city: 'Bursa', rating: 4, initials: 'EŞ', color: 'bg-amber-100 text-amber-700', text: 'Marangoz bulmak her zaman zordu. 10 dakikada doğrulanmış usta buldum.' },
  { name: 'Ayşe D.', role: 'Yeni Ev Sahibi', city: 'Antalya', rating: 5, initials: 'AD', color: 'bg-emerald-100 text-emerald-700', text: 'Taşınırken çok tadilat vardı. Tüm ustalar doğrulanmış olduğu için güvenle kullandım.' },
  { name: 'Murat Ö.', role: 'Kiracı', city: 'Trabzon', rating: 5, initials: 'MÖ', color: 'bg-cyan-100 text-cyan-700', text: 'Gece 22:00\'de kilitlenince Sanayide kurtardı! Çilingir 20 dakikada kapıdaydı.' },
  { name: 'Zeynep Ç.', role: 'Ofis Yöneticisi', city: 'İstanbul', rating: 5, initials: 'ZÇ', color: 'bg-pink-100 text-pink-700', text: 'Ofis klima bakımı için usta hem zamanında geldi hem de çok temiz çalıştı.' },
  { name: 'Hakan Y.', role: 'Ev Sahibi', city: 'Adana', rating: 4, initials: 'HY', color: 'bg-orange-100 text-orange-700', text: 'Kategori seçtim, yakınımdaki ustalar anında sıralandı. Çok kullanıcı dostu.' },
]

function Card({ item }) {
  return (
    <div className="w-72 shrink-0 mx-3 bg-white border border-zinc-100 rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <TbStar
            key={i}
            className={`text-[12px] ${i <= item.rating ? 'text-amber-400' : 'text-zinc-200'}`}
          />
        ))}
      </div>

      <p className="text-[13px] text-zinc-600 leading-relaxed mb-4 font-medium">
        "{item.text}"
      </p>

      <div className="flex items-center gap-2.5">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-black ${item.color}`}>
          {item.initials}
        </div>
        <div>
          <p className="text-[13px] font-bold text-zinc-900 leading-none">{item.name}</p>
          <p className="text-[11px] text-zinc-400 font-medium mt-0.5">{item.role} · {item.city}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials, ...testimonials]

  return (
    <section className="py-20 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
            Kullanıcı Yorumları
          </span>
          <h2
            className="font-extrabold text-zinc-900 tracking-[-0.035em] leading-[1.1] mt-2"
            style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}
          >
            Binlerce mutlu kullanıcı.
          </h2>
        </motion.div>
      </div>

      {/* Single marquee row */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#fafafa] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#fafafa] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex"
          animate={{ x: ['0%', '-33.33%'] }}
          transition={{ duration: DURATION, ease: 'linear', repeat: Infinity }}
        >
          {doubled.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
