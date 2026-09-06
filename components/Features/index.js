'use client'

/*
 * Features Bileşeni
 * -----------------
 * Amaç: Uygulamanın öne çıkan özelliklerini görsel kartlarla listeler.
 * Sol tarafta büyük bir özellik kartı (featured), sağ tarafta 4 küçük kart şeklinde grid yapısı.
 * Her kart hover'da scale ve shadow animasyonu alır.
 *
 * Değişkenler:
 *  - featuredFeature: Büyük öne çıkan özellik objesi (icon, başlık, açıklama, renk)
 *  - features: Diğer özelliklerin listesi
 */

import { motion } from 'framer-motion'
import {
  TbShieldCheck,
  TbBolt,
  TbStar,
  TbMapPin,
  TbMessageCircle,
  TbCertificate,
  TbArrowRight,
} from 'react-icons/tb'

const featuredFeature = {
  icon: TbShieldCheck,
  title: 'Güvenli & Doğrulanmış Ustalar',
  description:
    'Tüm ustalar kimlik doğrulama, referans kontrolü ve yetenek sınavından geçer. Sigortalı ve lisanslı ustaları tercih edebilirsin. Güvenliğin bizim önceliğimiz.',
  tag: 'En Önemli Özellik',
  bg: 'bg-zinc-900',
  textColor: 'text-white',
  descColor: 'text-zinc-400',
  tagBg: 'bg-zinc-800',
  tagText: 'text-amber-400',
  iconBg: 'bg-zinc-800',
  iconColor: 'text-amber-400',
}

const features = [
  {
    icon: TbBolt,
    title: 'Anında Eşleşme',
    description: 'Swipeladıktan sonra usta anında bildirim alır.',
    bg: 'bg-amber-50',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    border: 'border-amber-100',
  },
  {
    icon: TbStar,
    title: 'Şeffaf Puanlama',
    description: 'Gerçek kullanıcı yorumları ve doğrulanmış puanlar.',
    bg: 'bg-white',
    iconBg: 'bg-zinc-100',
    iconColor: 'text-zinc-700',
    border: 'border-zinc-100',
  },
  {
    icon: TbMapPin,
    title: 'Konuma Göre Filtrele',
    description: 'Yakınındaki ustaları harita üzerinde keşfet.',
    bg: 'bg-white',
    iconBg: 'bg-zinc-100',
    iconColor: 'text-zinc-700',
    border: 'border-zinc-100',
  },
  {
    icon: TbMessageCircle,
    title: 'Uçtan Uca Mesajlaşma',
    description: 'Güvenli, şifreli mesajlaşma ve teklif sistemi.',
    bg: 'bg-white',
    iconBg: 'bg-zinc-100',
    iconColor: 'text-zinc-700',
    border: 'border-zinc-100',
  },
  {
    icon: TbCertificate,
    title: 'Lisanslı Ustalar',
    description: 'Mesleki belge ve sertifikalar profilde görüntülenir.',
    bg: 'bg-white',
    iconBg: 'bg-zinc-100',
    iconColor: 'text-zinc-700',
    border: 'border-zinc-100',
  },
]

export default function Features() {
  const FeaturedIcon = featuredFeature.icon

  return (
    <section id="features" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[11px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">
            Özellikler
          </span>
          <h2
            className="font-extrabold text-zinc-900 tracking-[-0.035em] leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
          >
            Neden Sanayide?
          </h2>
          <p className="text-zinc-400 text-[16px] font-medium max-w-xl mx-auto leading-relaxed">
            Rakipsiz özelliklerimizle usta bulma deneyimini yeniden tanımlıyoruz.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Featured - left large card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className={`lg:col-span-1 lg:row-span-2 rounded-3xl p-8 flex flex-col justify-between ${featuredFeature.bg} relative overflow-hidden`}
          >
            {/* Background texture */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '24px 24px',
              }}
            />

            <div className="relative z-10">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-6 ${featuredFeature.tagBg} ${featuredFeature.tagText}`}>
                {featuredFeature.tag}
              </span>

              <div className={`w-14 h-14 rounded-2xl ${featuredFeature.iconBg} flex items-center justify-center mb-6`}>
                <FeaturedIcon className={`text-2xl ${featuredFeature.iconColor}`} />
              </div>

              <h3 className={`text-2xl font-bold mb-4 ${featuredFeature.textColor}`}>
                {featuredFeature.title}
              </h3>
              <p className={`text-sm leading-relaxed ${featuredFeature.descColor}`}>
                {featuredFeature.description}
              </p>
            </div>

            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative z-10 mt-8 group flex items-center gap-2 px-5 py-2.5 border border-amber-500/40 text-amber-400 text-[13px] font-bold rounded-xl hover:bg-amber-500/10 transition-all duration-200 w-fit"
            >
              Daha Fazla Öğren
              <TbArrowRight className="text-sm group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Small feature cards */}
          {features.slice(0, 4).map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(0,0,0,0.08)' }}
                className={`rounded-3xl p-6 border ${feature.bg} ${feature.border} transition-all duration-300`}
              >
                <div className={`w-11 h-11 rounded-xl ${feature.iconBg} flex items-center justify-center mb-4`}>
                  <Icon className={`text-xl ${feature.iconColor}`} />
                </div>
                <h3 className="text-base font-bold text-zinc-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
